# API Automation Test Suite

## Project Overview

This project contains automated API test cases using **Playwright** for the following APIs:

1. [JSONPlaceholder](https://jsonplaceholder.typicode.com)
2. [Reqres.in](https://reqres.in)

The test suite validates:

- Response status codes
- Response payloads
- Basic edge cases
- Clean and readable test structure

---

## Setup Instructions

1. **Clone the repository**

git clone <https://github.com/humayungit815/API-Automation-Test.git>

2. npm install

3. npx playwright install

## Steps to Execute the Tests

1. npx playwright test
or
npx playwright test --ui

## Testing Steps

1. JSONPlaceholder API
   https://jsonplaceholder.typicode.com

**GET /users**

Verify status code 200

Validate payload: at least one user exists, has email property

**POST /users**

Verify creation status 201

Validate payload matches request data (name, job, id)

**PUT /users/1**

Update existing user

Verify status code 200

Validate updated fields and id

**DELETE /users/1**

Delete existing user

Validate status code 200

**Edge Cases**

GET non-existing ID /users/999 → expect 404, empty response {}

DELETE without ID /users → expect 404

2. Reqres.in API
   https://reqres.in

GET /users → forbidden access test, expect 403

POST /register → forbidden registration test, expect 403

