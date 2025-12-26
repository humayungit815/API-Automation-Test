import {test, expect} from "@playwright/test";

// GET Users EDGE CASE Forbidden
test("GET users-- Verify forbidden access", async ({request}) => {
	const response = await request.get("https://reqres.in/api/users");

	expect(response.status()).toBe(403);
});

// POST Register forbidden
test("POST Register- Verify registration fails", async ({request}) => {
	const response = await request.post("https://reqres.in/api/register");

	expect(response.status()).toBe(403);
});
