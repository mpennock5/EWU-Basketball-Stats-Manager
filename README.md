# Steps before starting development

- ## Install docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

- ## Install VS Code [https://code.visualstudio.com/](https://code.visualstudio.com/)

- ## Add Remote Development Extension to VS Code

- ## Pull down Repo

- ## Remote into devContainer <small>(using green box in the bottom left)<small>

# Development

From your terminal:

```sh
yarn run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
yarn run build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.
