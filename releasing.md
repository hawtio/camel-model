# Releasing @hawtio/camel-model

This document describes the release procedure for this package.

## Updating Camel model

If this release is intended to upgrade the Camel model, the following must be done before the release is made.

1. Update the Camel version `<version.org.apache.camel>` in `pom.xml`. (if not already updated by dependabot):

   ```diff
   - <version.org.apache.camel>4.3.0</version.org.apache.camel>
   + <version.org.apache.camel>4.4.0</version.org.apache.camel>
   ```

2. Run the following Yarn script to update the Camel model:

   ```console
   yarn generate:camel-model
   ```

3. Commit the changes:

   ```console
   git commit -m 'feat: upgrade Apache Camel model to 4.4.0'
   ```

## Preliminary check

Before performing a release, first ensure that the project is ready for release by doing the following:

```console
yarn install
yarn build
yarn test
```

## Releasing

Publishing to npm is fully automated via the [Publish](.github/workflows/publish.yml) GitHub Actions workflow. It is triggered automatically when Dependabot merges a PR that bumps the Camel version (i.e. updates `pom.xml`) into one of the main branches.

The workflow automatically:
1. Extracts the new Camel version from `pom.xml`
2. Regenerates the Camel model (`yarn generate:camel-model`)
3. Updates the `version` in `package.json` to match the Camel version
4. Builds and tests the package
5. Commits the generated model and version bump, and creates a `v<version>` tag
6. Publishes the package to npm

> **Note:** A `NPM_TOKEN` secret with publish access to the `@hawtio` npm scope must be configured in the repository's Settings → Secrets → Actions.
