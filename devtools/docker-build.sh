#!/bin/bash

# Get the settings
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
source ${SCRIPT_DIR}/../devconfig/docker-settings.sh

if [ "${IMAGE_NAME}" == "" ]; then
    echo "Could not get IMAGE_NAME."
    exit 1
fi

echo "Docker Build $IMAGE_NAME"

# Extract the version number using jq
PACKAGE_VERSION=$(jq -r .version ${SCRIPT_DIR}/../package.json)
echo Building: "${IMAGE_NAME}:${PACKAGE_VERSION}"

# Build the image, passing the version as a tag and a build-arg
echo docker build -t "${IMAGE_NAME}:${PACKAGE_VERSION}" -t "${IMAGE_NAME}:latest" -f "${SCRIPT_DIR}/../dockerfile" .
docker build -t "${IMAGE_NAME}:${PACKAGE_VERSION}" -t "${IMAGE_NAME}:latest" -f "${SCRIPT_DIR}/../dockerfile" .
