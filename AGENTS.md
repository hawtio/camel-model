# AGENTS.md

Guidelines for AI coding agents working on this repository.

## Project Info

- Primary language: TypeScript
- Package manager: Yarn v4
- Build tool: [tsup](https://tsup.egoist.dev/) (bundles `src/index.ts` → `dist/`)
- Model generation: Maven (`./mvnw compile`) via `camel-catalog-schema-generator-plugin`
- Node.js version: v24 (recommended)
- Apache Camel version: tracked in `pom.xml` as `<version.org.apache.camel>`
- Commit style: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`feat:`, `fix:`, `chore:`, etc.)

## Project Structure

This repository publishes the [`@hawtio/camel-model`](https://www.npmjs.com/package/@hawtio/camel-model) npm package. The JSON model files under `src/` are **generated** from the Apache Camel catalog JAR by the Maven build — do not edit them manually.

```text
.
├── src/
│   ├── index.ts                      # public entry point — re-exports all model data
│   ├── index.test.ts                 # Jest unit tests
│   ├── components-camel-model.json   # generated: Camel component definitions
│   ├── dataformats-camel-model.json  # generated: data format definitions
│   ├── definitions-camel-model.json  # generated: EIP/route definitions
│   ├── languages-camel-model.json    # generated: expression language definitions
│   └── rests-camel-model.json        # generated: REST DSL definitions
├── dist/                             # build output (gitignored; produced by `yarn build`)
├── pom.xml                           # Maven config for model generation
├── tsup.config.ts                    # tsup bundler config
└── jest.config.ts                    # Jest test config
```

## Documentation Index

Read these documents **only when the task requires it** — do not load them all upfront.

| Document                       | When to read                                    |
| ------------------------------ | ----------------------------------------------- |
| [`README.md`](README.md)       | Project overview, install, and usage            |
| [`releasing.md`](releasing.md) | Release procedure and Camel model upgrade steps |

## Essential Commands

```bash
# Install dependencies
yarn install

# Build the package (outputs to dist/)
yarn build

# Run unit tests
yarn test

# Check formatting
yarn format:check

# Fix formatting
yarn format:fix

# Regenerate JSON model files from the Apache Camel catalog JAR
yarn generate:camel-model
```

## Updating the Camel Model

When upgrading the Camel version:

1. Update `<version.org.apache.camel>` in [`pom.xml`](pom.xml).
2. Run `yarn generate:camel-model` to regenerate the JSON files under `src/`.
3. Update the `version` field in [`package.json`](package.json) to match.
4. Commit with a message such as `feat: upgrade Apache Camel model to X.Y.Z`.

See [`releasing.md`](releasing.md) for the full release procedure.

## Code Style

See [`.editorconfig`](.editorconfig) and [`.prettierrc.js`](.prettierrc.js).
