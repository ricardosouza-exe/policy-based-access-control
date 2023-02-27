# PBAC - Policy-Based Access Control

This application aims to exemplify a control system, with user groups and policies to apply different levels of permissions to system users.
Requirements

- MongoDB Server
- NodeJS
- Yarn

## Installation

- Install the dependencies using the command yarn
- Rename the .env.example file to .env and configure it according to your environment
- Start the project with yarn start

## Explanation

The application consists of an HTTP server with the following routes:

- POST /login
- GET /users
- GET /users/:id
- POST /users
- PUT /users/:id
- DELETE /users/:id

The algorithm for the routes is available in the files `src/routes/index.js` and `src/routes/UserRoutes.js`.

When logging in, an authentication token (JWT) is generated, which must be passed in the header of authenticated route requests. `Authorization: Bearer <token>`

Before reaching the route, the request goes through the AuthMiddleware middleware located in `src/middlewares/AuthMiddleware.js`, in which the token will be decoded and assigned to the request object. `req.auth = await decodeJWT(authToken)`

Within each route, an asynchronous function is called `await AuthModule.verify(auth, validPolicyActions)`, which is responsible for verifying if the authenticated user has any of the actions listed in the second parameter `validPolicyActions`.

This function can trigger the following errors:

- MISSING_TOKEN = when the token is not passed in the header.
- ACCESS_NOT_FOUND = when the access does not exist or is disabled.
- ACCESS_GROUP_NOT_FOUND = when the access group associated with the user does not exist or is disabled.
- NOT_ALLOWED = when the user does not have permission for any of the listed actions.

The verification function, in case of success, will always return an access object.

`const access = await AuthModule.verify(auth, validPolicyActions)`

And if `validPolicyActions = null`, it will only validate if the user is authenticated, and permission validation will not be performed.

## Scripts

To assist in testing the system, some executables have been created to manipulate the access in the database.

#### Create access policy
`node src/scripts/createAccessPolicy <name> <actions_separed_by_comma>`

#### Create access group
`node src/scripts/createAccessPolicy <name> <policy_ids_separed_by_comma>`

#### Create access
`node src/scripts/createAccess <username> <password> <name> <group_id>`

#### Delete access policy
`node src/scripts/deleteAccess <username>`

#### Delete access group
`node src/scripts/deleteAccess <group_id>`

#### Delete access
`node src/scripts/deleteAccess <username>`

#### Add policies to access group
`node src/scripts/addPoliciesToAccessGroup <groud_id> <policy_ids_separed_by_comma>`

#### Remove policies from access group
`node src/scripts/removePoliciesFromGroup <groud_id> <policy_ids_separed_by_comma>`

#### Add actions to access policy
`node src/scripts/addActionsToPolicy <policy_id> <actions_separed_by_comma>`

#### Remove actions from access policy
`node src/scripts/removeActionsFromPolicy <policy_id> <actions_separed_by_comma>`

#### Set access group
`node src/scripts/setAccessGroup <access_id> <group_id>`

policy_ids_separed_by_comma = "id_1,id_2,id_3"

actions_separed_by_comma = "action_1,action_2,action_3"

**IMPORTANT! Avoid using spaces in the names of actions.**

## Licença

[MIT](https://choosealicense.com/licenses/mit/)