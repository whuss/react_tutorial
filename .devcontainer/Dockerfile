FROM whuss/vsc_infinity:0.3

COPY .devcontainer/bashrc /home/vscode
RUN cat /home/vscode/bashrc >> /home/vscode/.bashrc && rm /home/vscode/bashrc

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends libusb-1.0-0

RUN npm install -g npm-check pyright