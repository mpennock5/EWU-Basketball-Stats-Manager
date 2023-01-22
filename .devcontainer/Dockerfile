FROM node:18

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

RUN npm add @mui/material @emotion/react @emotion/styled

RUN npm add @remix-run/react @remix-run/node @remix-run/serve

RUN npm add -D @remix-run/dev

RUN npm install

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true
