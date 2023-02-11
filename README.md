# Codegen in Deno

I got curious about using GraphQL with Fauna and wanted to autogenerate my types to hand over to TypeScript. I'm not sure this is the best way, but it seems to be working nicely for the small project I used it for. 

## Setup

Drop a fauna admin key in `.env`.

Setup your data model in the `fauna/schema` folder, and any fauna functions or roles you'd like to create.

Push to fauna with `deno task fauna-push`, then `deno task codegen` to create the types so TypeScript checks the project against them. Backend done.

## Adding Fresh

If you run `deno run -A https://fresh.deno.dev .` in the current directory, you can scaffold a new Fresh project so you can actually make something with your backend. It'll overwrite your import_map.json and deno.json files, but just add back the relavent scripts, imports and ts options (in particular, `compilerOptions.types = ["./fauna/types.d.ts"]` in deno.json so TS will pick up the types you generated from your Fauna schema).