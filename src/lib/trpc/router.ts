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
	greeting: protectedRoute.query(async () => {
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
	courses: protectedRoute
		.input(
			z.object({
				cartId: z.string()
			})
		)
		.query(async ({ input, ctx }) => {
			const data = await ctx.client?.getRegistrationRoundCourses(input.cartId);

			return data.sort((a, b) => b.registrations_count - a.registrations_count);
		}),
	coursesEditions: protectedRoute
		.input(
			z.object({
				courseId: z.string(),
				termId: z.string()
			})
		)
		.query(async ({ input, ctx }) => {
			const data = await ctx.client?.getCourseEditions(input.courseId, input.termId);

			return data;
		}),
	courseUnit: protectedRoute
		.input(
			z.object({
				courseUnitId: z.string()
			})
		)
		.query(async ({ input, ctx }) => {
			const data = await ctx.client?.getCourseUnitWithGroups('65726');

			return data;
		}),
	cart: protectedRoute.query(async ({ ctx }) => {
		const data = await ctx.client?.getCoursesCarts();

		return data;
	}),
	userCoures: protectedRoute.query(async ({ ctx }) => {
		const data = await ctx.client?.getUserCourses();

		return data;
	}),
	tt: t.router({
		classgroup: protectedRoute.query(async ({ ctx }) => {
			return ctx.client.getClassGroupTimetable('65726', '1');
		})
	}),
	meeting: protectedRoute
		.input(
			z.object({
				meetingId: z.number()
			})
		)
		.query(async ({ ctx, input }) => {
			return ctx.client.getMeetingDate(input.meetingId.toString());
		}),
	getCourses: protectedRoute
		.input(
			z.object({
				coursesIds: z.array(z.string())
			})
		)
		.query(async ({ ctx, input }) => {
			return Promise.all(input.coursesIds.map(async (courseId) => ctx.client.getGroups(courseId)));
		})
});

export type Router = typeof router;
