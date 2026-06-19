# react-router-v8-vite

A minimal **React Router v8 + Vite 8** framework-mode app used to verify that
[`react-router-devtools`](../../packages/react-router-devtools) works on the latest major versions.

It exists alongside [`react-router-vite`](../react-router-vite) (React Router 7 / Vite 7) so the repo
exercises both supported majors.

This example imports the devtools plugin by its **published package name**
(`react-router-devtools`) rather than a relative `dist/` path, so it exercises the real consumer
dependency-resolution path — including the `vite-node` runtime dependency that
[issue #261](https://github.com/code-forge-io/react-router-devtools/issues/261) was about.

## Run

```sh
pnpm --filter react-router-v8-vite dev
```

## Build

```sh
pnpm --filter react-router-v8-vite build
pnpm --filter react-router-v8-vite start
```
