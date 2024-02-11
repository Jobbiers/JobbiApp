# Jobbi monorepo

This is the Jobbi app's monorepo.

## Setup

Run the following commands:

- pnpm
```sh
npm install -g pnpm
```
- turbo CLI
```sh
pnpm install turbo --global
```

## How to run an app?

### clients app

```sh
pnpm expo:clients
```
or
```sh
pnpm turbo:clients
```

### partners app

```sh
pnpm expo:partners
```
or
```sh
pnpm turbo:partners
```
or you can also move to the application folder and run the application as you always do.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `clients`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/) for users
- `partners`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/) for partners
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@jobbi/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@jobbi/common`: a set of functions and helpers for all applications
- `@jobbi/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
