# Releasing @hawtio/camel-model

This document describes the release procedure for this package.

## Updating Camel model

If this release is intended to upgrade the Camel model, the following must be done before the release is made.

1. Update the Camel version `<version.org.apache.camel>` in `pom.xml`. (if not already updated by dependabot):

   ```diff
   - <version.org.apache.camel>4.22.1</version.org.apache.camel>
   + <version.org.apache.camel>4.23.0</version.org.apache.camel>
   ```

2. Run the following Yarn script to update the Camel model:

   ```console
   yarn generate:camel-model
   ```

3. Commit the changes:

   ```console
   git commit -m 'feat: upgrade Apache Camel model to 4.23.0'
   ```

## Preliminary check

Before performing a release, first ensure that the project is ready for release by doing the following:

```console
yarn install
yarn build
yarn test
```

## Releasing

To release the `@hawtio/camel-model` package, follow these steps:

1. Manually increase the `version` in [package.json](./package.json). (Currently, we don't use any automation tool for increasing versions yet.)

   ```diff
    {
      "name": "@hawtio/camel-model",
   -  "version": "4.22.1",
   +  "version": "4.23.0",
      "description": "Camel Catalog Definition Model",
   ```

2. Commit the change and tag the version. Note we prefix `v` to a version in commit messages and tags.

   ```console
   git commit -m v4.23.0
   git tag v4.23.0
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

   Publishing requires npm authentication (e.g. an OTP for 2FA), so it must be run by a human in an interactive terminal; it fails in non-interactive environments such as AI agents. Note that npm registry validation can take a while, so the new version may not show up immediately. Check it with:

   ```console
   yarn npm info @hawtio/camel-model --fields version
   ```

5. Once the new version is confirmed on npm, push the release commits and the tag to the official repository (`hawtio/camel-model`).

   The name of the remote depends on your local setup and is not necessarily `origin`. Check it with `git remote -v`, and use the one pointing to `hawtio/camel-model` in place of `<remote>`.

   ```console
   git push <remote> 4.x v4.23.0
   ```

   Specify the tag explicitly. The tag is a lightweight tag, so `git push --follow-tags` does not push it.
