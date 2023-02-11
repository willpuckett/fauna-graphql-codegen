# Codegen in Deno

I got curious about using GraphQL with Fauna and wanted to autogenerate my types to hand over to TypeScript. I'm not sure this is the best way, but it seems to be working nicely for the small project I used it for. 

## Setup

Drop a fauna admin key in `.env`.

Setup your data model in the `fauna/schema` folder, and any fauna functions or roles you'd like to create.

Push to fauna with `deno task fauna-push`, then `deno task codegen` to create the types so TypeScript checks the project against them. Backend done.

## 