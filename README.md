# max-api

## Intro

This package is simply a placeholder package to prevent malicious usage of the `max-api` package name. It simply throws an error when required in order to showcase that a user has accidentally installed a `max-api` package when using `[node.script]`.

## Background

When using `[node.script]`in [Cycling '74](http://cycling74.com) Max one gets access to an API that allows bi-directional communication between Node and Max. This API is made dynamically available and can be required using `require("max-api")`. To avoid any issues or unexpected behaviour with an installed dependency of `max-api` that might overwrite the dynamic API module this package immediately throws an error.

## License
[MIT](./LICENSE)
