# Camel Catalog Definition Model

This project provides [Apache Camel](https://camel.apache.org/) catalog definition model extracted from the [org.apache.camel:camel-catalog](https://github.com/apache/camel/tree/main/catalog/camel-catalog) JAR. NPM projects can consume this package to create an application that is based on the Apache Camel model.

## Install

NPM

```console
npm i @hawtio/camel-model
```

Yarn

```console
yarn add @hawtio/camel-model
```

## Usage

<!-- prettier-ignore-start -->
```javascript
import {
  apacheCamelModelVersion,
  components,
  dataformats,
  definitions,
  languages,
  rests
} from '@hawtio/camel-model'
```
<!-- prettier-ignore-end -->

## License

This project is licensed under the [Apache 2.0 License](./LICENSE).
