
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "./src/components/**/*.ts",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true
      }
    }
  }
};

export default config;
