# Deno

https://deno.land/

## Step 0 - Introduction

- What is Deno
- Background and history
- Features
- Installation
- Contributors

## Step 1 - Hello World

```bash
cd step1

deno https://raw.githubusercontent.com/mrgrain/deno-talk/master/step1/welcome.ts

code welcome.ts
```

## Step 2 - Basics

```ts
import { red, bold, italic, cyan } from "https://deno.land/std/fmt/colors.ts";
```

```bash
cd step2

deno welcome.ts
deno run welcome.ts

deno
deno eval "console.log('hello world')"
```

## Step 3 - Dev practices

### IDEA support, Format, Test, Bash

```bash
cd step3

code --install-extension axetroy.vscode-deno
# Then restart and run VS Code command "deno enable"

deno fmt welcome.ts
deno run some_test.ts
```

### Bash Completions

```bash
cd step4

# bash
deno completions bash > /usr/local/etc/bash_completion.d/deno.bash
echo "source /usr/local/etc/bash_completion.d/deno.bash" >> ~/.bashrc

# zsh
mkdir -p ~/.zsh/functions
deno completions zsh > ~/.zsh/functions/_deno
echo "\nfpath=(~/.zsh/functions \$fpath)" >> ~/.zshrc
```

## Step 4 - Distribution

### Fetch, Bundle & Install

```bash
deno fetch welcome.ts
deno run welcome.ts "Name"
deno fetch -r welcome.ts

deno bundle welcome.ts welcome.js
deno run -r welcome.js "Name"

deno install welcome welcome.ts
welcome "Name"
```

### Publishing

```bash
git commit
git tag 1.2.3
git push origin 1.2.3
```

## Step 5 - Permissions

See: https://deno.land/rustdoc/deno/permissions/struct.DenoPermissions.html

```bash
cd step5
```

```ts
import { readJsonSync } from "https://deno.land/std/fs/mod.ts";

welcome(Deno.env().USER);

const greetings = readJsonSync("./greetings.json") as string[];
greetings.forEach(welcome);
```
