import { test, describe, expect } from 'bun:test';
import { usosService } from './usos';

// access_token=WQu8UChxC8gbNkv4dc4G; access_token_secret=3BV7UPLQvSST4EpBZta9ZpvQvwY8EbwzQQKVr2JF
describe('usos', () => {
	const service = usosService({
		get: function <R = unknown>(): Promise<R> {
			throw new Error('Function not implemented.');
		},
		post: function <R = unknown>(): Promise<R> {
			throw new Error('Function not implemented.');
		}
	});
	test('getCourses', async () => {
		const course = await service.getGroups('W04IST-SI0010L');

		expect(course).toMatchSnapshot();
	});
});
