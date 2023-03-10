import { CodegenConfig, executeCodegen } from 'npm:@graphql-codegen/cli'
import 'npm:@graphql-codegen/typescript'

// Exploring these next for validation
// import 'npm:@graphql-codegen/typescript-type-graphql'
// import 'npm:graphql-codegen-typescript-validation-schema'

const config: CodegenConfig = {
  overwrite: true,
  schema: './fauna/**/*.gql',
  emitLegacyCommonJSImports: false,
  generates: {
    './fauna/': {
      plugins: ['typescript'],
      config: {
        declarationKind: 'declare interface',
        noExport: true,
        typesPrefix: 'I',
        skipTypename: true,
      },
    },
  },
}

// I don't think Windows would be happy with this....
const paths = Object.keys(config.generates)
paths.map(async (p) => {
  await Deno.mkdir(
    `${p.slice(-1) === '/' ? p : p.split('/').slice(0, -1).join('/')}`,
    { recursive: true },
  )
})

const outputs = await executeCodegen(config)

outputs.map(async (glob) => {
  await Deno.writeTextFile(
    `${glob.filename}${glob.filename.slice(-1) === '/' ? 'types.d.ts' : ''}`,
    `//THIS FILE IS AUTOGENERATED AND WILL BE OVERWRITTEN.\n//DO NOT EDIT.\n\n${glob.content}`,
    // glob.content,
  )
})
