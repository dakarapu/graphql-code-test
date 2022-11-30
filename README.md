### GraphQL Challenge Todo List:

1. Add a GraphQL RESTDataSource to interact with https://jsonplaceholder.typicode.com
2. The posts resolver should call the RESTDataSource and return all posts from https://jsonplaceholder.typicode.com/posts
3. The comments resolver receive a postId from the parent, and use this to find the related comments from https://jsonplaceholder.typicode.com/comments
4. The comments resolver should implement a dataloader, so that the requests for comments are batched into a single API call for comments.
5. Commit the code to a publicly available repository and send us a link. Good luck!

###

All the above todo list points have been implemented

Also, the API can be deployed into AWS lambda using serverless framework using:

`serverless deploy`

Given the right configuration and credentials in your local CLI.

### Installing

To install dependencies, run:

`npm install`

### Starting Application

To start the server, run:

`npm run start`

To start the server in dev mode, run:

`npm run dev`

### Testing

To test the API using serverless framework, run:

`npm run test`
