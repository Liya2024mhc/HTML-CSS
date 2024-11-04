https://www.educative.io/blog/nextjs-tutorial-examples
https://www.freecodecamp.org/news/build-a-full-stack-application-with-nextjs/
https://nextjs.org/learn-pages-router/basics/create-nextjs-app
https://github.com/vercel/next.js/tree/canary/examples/with-emotion
https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
https://github.com/vercel/styled-jsx
https://github.com/lukeed/clsx

















IMPORT POINT ON API
Choosing how to fetch data
API layer
APIs are an intermediary layer between your application code and database. There are a few cases where you might use an API:

If you're using 3rd party services that provide an API.
If you're fetching data from the client, you want to have an API layer that runs on the server to avoid exposing your database secrets to the client.
In Next.js, you can create API endpoints using Route Handlers.

Database queries
When you're creating a full-stack application, you'll also need to write logic to interact with your database. For relational databases like Postgres, you can do this with SQL or with an ORM.

There are a few cases where you have to write database queries:

When creating your API endpoints, you need to write logic to interact with your database.
If you are using React Server Components (fetching data on the server), you can skip the API layer, and query your database directly without risking exposing your database secrets to the client.
