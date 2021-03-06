# li-sass

A Production-ready build process with autoprefixer and ftp-deploy.

## Config

Define required environment variables in a `.env` file in the root directory, otherwise the upload on a web server exit with an error.

**Required environment variables:**

* `FTP_USER`
* `FTP_PASSWORD`
* `FTP_HOST`
* `FTP_PORT`
* `FTP_REMOTE_ROOT`

1. Create a `.env` file in the root directory of your project.

2. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

```JS
FTP_USER=VALUE
FTP_PASSWORD=VALUE
FTP_HOST=VALUE
FTP_PORT=VALUE
FTP_REMOTE_ROOT=VALUE
```

## Install

```shell
npm install
```

### Rebuild node-sass binaries

```shell
npm rebuild node-sass
```

If your environment has changed since running `npm install`. Run `npm rebuild node-sass` to build the binding for your current environment.

## Usage

### Build

#### Local

```shell
npm run build:local
```

Generates a minified and prefixed `.css` file inside the `dist` folder.

#### FTP

```shell
npm run build:ftp
```

Generates a minified and prefixed `.css` file inside the `dist` folder and deploys it to any ftp server configured in the `.env` file.

### Develope

#### Local

```shell
npm run develope:local
```
Generates a nested compiled `.css` file inside the `dist` folder. Watches recursively for any changes made and generates a new file on the fly when needed.

#### FTP

```shell
npm run develope:ftp
```
Generates a nested compiled `.css` file inside the `dist` folder. Watches recursively for any changes made and generates a new file on the fly when needed and auto deploys it to any ftp server configured in the `.env` file.

## Best use

* Check node version with [Node Version Manager](https://github.com/nvm-sh/nvm): `nvm use`

  * Alternatively you can check the version in `.nvmrc`-File and install the correct version manually 

* Install the VSC [IntelliSense-Extension](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss) to use variables, mixins and functions) for all files in the workspace.

# License

lithop/li-sass is licensed under the [MIT License](LICENSE).
