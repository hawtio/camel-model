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

Publishing to npm is automated via the [Publish](.github/workflows/publish.yml) GitHub Actions workflow. It is triggered automatically when a version tag is pushed to the repository.

To release the `@hawtio/camel-model` package, follow these steps:

1. Manually increase the `version` in [package.json](./package.json). (Currently, we don't use any automation tool for increasing versions yet.)

   ```diff
    {
      "name": "@hawtio/camel-model",
   -  "version": "3.20.6",
   +  "version": "3.21.0",
      "description": "Camel Catalog Definition Model",
   ```

2. Commit the change and push a version tag. Note we prefix `v` to a version in commit messages and tags.

   ```console
   git commit -m v3.21.0
   git tag v3.21.0
   git push && git push origin v3.21.0
   ```

   Pushing the tag triggers the [Publish](.github/workflows/publish.yml) workflow, which builds, tests, and publishes the package to npm automatically.
