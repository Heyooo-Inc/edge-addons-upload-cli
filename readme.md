# edge-addons-upload-cli

> Upload/Publish Microsoft Edge add-ons from the CLI

A CLI wrapper around the [Microsoft Edge Addons API for NodeJS](https://github.com/PlasmoHQ/edge-addons-api) module.

## Install

```shell
npm install edge-addons-upload-cli
```

## Setup

You'll need to get a `productId`, `clientId`, `clientSecret`, and `accessTokenUrl` for your project.

You can get these for your project by following
the [Microsoft Edge Add-Ons API guide](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/api/using-addons-api)
.

## Usage

```shell
$ edge-addons-upload upload --source extension.zip --product-id $PRODUCT_ID --client-id $CLIENT_ID --client-secret $CLIENT_SECRET --access-token-url $ACCESS_TOKEN_URL
$ edge-addons-upload publish --product-id $PRODUCT_ID --client-id $CLIENT_ID --client-secret $CLIENT_SECRET --access-token-url $ACCESS_TOKEN_URL
```
