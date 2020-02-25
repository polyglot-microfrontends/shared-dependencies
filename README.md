# shared-dependencies

[![CircleCI](https://circleci.com/gh/polyglot-microfrontends/shared-dependencies.svg?style=svg)](https://circleci.com/gh/polyglot-microfrontends/shared-dependencies)

## What is this?

This is an example microfrontend repo demonstrating how to use [single-spa](https://single-spa.js.org). You can see the code running at https://polyglot.microfrontends.app. The full, deployed import map is visible at https://polyglot.microfrontends.app/importmap.json.

## How does it work?

[Full article](https://single-spa.js.org/docs/recommended-setup)

This repository contains an [import map](https://github.com/WICG/import-maps/) that controls the shared libraries between all microfrontends.

Whenever a pull request is merged to master, [CircleCI deploys the import map](https://circleci.com/gh/polyglot-microfrontends/shared-dependencies). Deployments for this project are completely independent of deployments for any other module.

## Adapting for your organization

Feel free to fork and modify any files you would like when doing a proof of concept for your organization.
