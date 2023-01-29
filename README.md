# Steps before starting development

- ## Install docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

- ## Install VS Code [https://code.visualstudio.com/](https://code.visualstudio.com/)

- ## Add Remote Development Extension to VS Code

# Steps for development on Windows.

- ## Open powershell and run `wsl --install`

- ## Install Ubuntu from windows store.

- ## Make sure that WSL 2 is running and not WSL 1 by using `wsl -l -v` in powershell

  - ### If WSL 1 is running then use `wsl --set-version <distro name> 2` in powershell to swap the version to WSL 2

- ## Open Docker for Desktop's setting page and navigate to resources and make sure that wsl is enabled on ubuntu.

- ## Open ubuntu terminal and clone repository.

- ## Navigate to cloned repo and enter `code .` to open the repo in vsCode using remote connection.

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
