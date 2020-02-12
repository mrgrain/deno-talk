# Deno

![Deno logo](../deno_logo.svg)

## What is Deno

A secure runtime for JavaScript and TypeScript \
https://deno.land/

It's built on V8, Rust, and Tokio.

## Background and history

Created by Ryan Dahl - the guy who made Node.js - in May 2018.

![Ryan Dahl speaking](ryan.jpg)

The goal is to resolve all of node's design mistakes. See Ryan's great talk about the whats and whys: https://www.youtube.com/watch?v=M3BM9TB-8yA

- No initial support for Promises
- Zero Security
- Build System
- node_modules
- package.json & npm & require without file endings
- index.js

## Features

- Secure by default using the sandbox approach
- Supports TypeScript out of the box
- Built on modern Web Standards
- Distributed module resolution
- Ships a single executable
- Opinionated built in utilities (`deno fmt`)
- Scripts can be bundled into a single javascript file
- Development speed due to Rust code base
- Node.js compat package

## Installation

Using Shell:

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Using PowerShell:

```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

Using package managers:

```
brew install deno
scoop install deno
choco install deno
```

## Contributors

[![Avatars of Contributors](../contributors.png)](https://github.com/denoland/deno/graphs/contributors)

Made with [contributors-img](https://contributors-img.firebaseapp.com).
