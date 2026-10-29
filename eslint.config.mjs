import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Sempre por último: desativa regras do ESLint que conflitam com o Prettier.
  prettier,
  {
    rules: {
      // Sem `any` em lugar nenhum (TypeScript estrito é contrato do projeto).
      "@typescript-eslint/no-explicit-any": "error",
      // Convenção: argumentos e variáveis prefixados com "_" são
      // intencionalmente não usados.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", ".sanity/**", "docs/**"]),
]);

export default eslintConfig;
