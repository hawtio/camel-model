# Releasing @hawtio/camel-model

This document describes the release procedure for this package.

## Preliminary check

Before performing a release, first ensure that the project is ready for release by doing the following:

```console
yarn install
yarn generate
yarn build
yarn test
```

## Releasing

To release the `@hawtio/camel-model` package, follow these steps:

1. Manually increase the `version` in [package.json](./package.json). (Currently, we don't use any automation tool for increasing versions yet.)

   ```diff
    {
      "name": "@hawtio/camel-model",
   -  "version": "3.20.6",
   +  "version": "3.21.0",
      "description": "Camel Catalog Definition Model",
   ```

2. Commit the change and tag the version. Note we prefix `v` to a version in commit messages and tags.

   ```console
   git commit -m v3.21.0
   git tag v3.21.0
   ```

3. Check the contents to be packaged before the actual release is made with `yarn pack` command.

   ```console
   $ yarn pack
   $ tar -tf package.tgz
   package/LICENSE
   package/dist/index.d.ts
   package/dist/index.js
   package/package.json
   ```

   Make sure to clean up the generated file after checking.

   ```console
   git clean -f
   ```

4. Perform the release.

   ```console
   yarn release
   ```
