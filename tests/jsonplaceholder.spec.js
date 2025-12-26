import {test, expect} from "@playwright/test";

// GET users
test("GET Request Users-- Verify user list is returned", async ({request}) => {
	const response = await request.get(
		"https://jsonplaceholder.typicode.com/users"
	);

	expect(response.status()).toBe(200);

	const body = await response.json();
	expect(body.length).toBeGreaterThan(0);
	expect(body[0]).toHaveProperty("email");
});

// POST Create Users
test("POST Request Users-- Verify new user creation", async ({request}) => {
	const payLoad = {
		name: "Humayun",
		job: "Automation Engineer",
	};
	const response = await request.post(
		"https://jsonplaceholder.typicode.com/users",
		{
			data: payLoad,
		}
	);

	expect(response.status()).toBe(201);

	const body = await response.json();
	expect(body.name).toBe(payLoad.name);
	expect(body.job).toBe(payLoad.job);
	expect(body).toHaveProperty("id");
});

// PUT Update Users
test("PUT Request users-- Verify user update", async ({request}) => {
	const payLoad = {
		name: "Humayun",
		job: "Frontend Engineer",
	};
	const response = await request.put(
		"https://jsonplaceholder.typicode.com/users/1",
		{
			data: payLoad,
		}
	);

	expect(response.status()).toBe(200);

	const body = await response.json();
	expect(body.name).toBe(payLoad.name);
	expect(body.job).toBe(payLoad.job);
	expect(body).toHaveProperty("id");
});

// DELETE Users
test("DELETE Request Users-- Verify user deletion", async ({request}) => {
	const response = await request.delete(
		"https://jsonplaceholder.typicode.com/users/1"
	);

	expect(response.status()).toBe(200);
});

// EDGE CASE: Invalid POST ID
test("GET /users/999 - Verify 404 for non-existing user", async ({request}) => {
	const response = await request.get(
		"https://jsonplaceholder.typicode.com/users/999"
	);

	expect(response.status()).toBe(404);

	const body = await response.json();
	expect(body).toEqual({});
});

// EDGE CASE: DELETE Without ID
test("EDGE CASE DELETE- Verify delete without ID fails", async ({request}) => {
	const response = await request.delete(
		"https://jsonplaceholder.typicode.com/users"
	);

	expect(response.status()).toBe(404);
});
