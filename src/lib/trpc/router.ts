import type { Context } from '$lib/trpc/context';
import { TRPCError, initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

const protectedRoute = t.procedure.use(async ({ ctx, next }) => {
	if (!ctx.client) {
		throw new TRPCError({
			code: 'UNAUTHORIZED'
		});
	}

	return next({
		ctx: {
			...ctx,
			client: ctx.client
		}
	});
});

export const router = t.router({
	courses: protectedRoute
		.input(
			z.object({
				cartId: z.string()
			})
		)
		.query(async ({ input, ctx }) => {
			const data = await ctx.client?.getRegistrationRoundCourses(input.cartId);

			return data.sort((a, b) => a.course.name.pl.localeCompare(b.course.name.pl));
		}),
	me: protectedRoute.query(async ({ ctx }) => {
		return ctx.client.getProfile();
	}),
	getGroups: protectedRoute
		.input(
			z.object({
				coursesIds: z.array(z.string())
			})
		)
		.query(async ({ ctx, input }) => {
			const [groups, courses] = await Promise.all([
				Promise.all(input.coursesIds.map(async (courseId) => ctx.client.getGroups(courseId))).then(
					(data) => data.flat()
				),
				Promise.all(
					Array.from(new Set(input.coursesIds)).map(async (courseId) =>
						ctx.client.getCourse(courseId)
					)
				)
			]);

			return groups.map((group) => {
				const course = courses.find((course) => course.id === group.courseId);

				if (!course) {
					throw new TRPCError({
						code: 'INTERNAL_SERVER_ERROR'
					});
				}
				return {
					...group,
					course
				};
			});
		})
});

export type Router = typeof router;
