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

deno run https://raw.githubusercontent.com/mrgrain/deno-talk/master/step1/welcome.ts

code welcome.ts
```

## Step 2 - Basics

```ts
import { bold, cyan, italic, red } from "https://deno.land/std/fmt/colors.ts";
```

```bash
cd step2

deno run welcome.ts

deno
deno eval "console.log('hello world')"
```

## Step 3 - Dev practices

### IDEA support, Format, Test, Bash

```bash
cd step3

code --install-extension denoland.vscode-deno

deno info
deno lint welcome.ts
deno fmt welcome.ts
deno run some_test.ts
```

### Bash Completions

```bash
cd step4

# bash
deno completions bash > /usr/local/etc/bash_completion.d/deno.bash
source /usr/local/etc/bash_completion.d/deno.bash

# zsh
mkdir ~/.oh-my-zsh/custom/plugins/deno
deno completions zsh > ~/.oh-my-zsh/custom/plugins/deno/_deno
```

## Step 4 - Distribution

### Fetch, Bundle & Install

```bash
deno cache welcome.ts
deno run welcome.ts "Name"
deno cache -r welcome.ts

# Clean cache ~> this will change
deno info
rm -rf /path/to/DENO_DIR 

deno bundle welcome.ts welcome.js
deno run -r welcome.js "Name"

deno install welcome.ts
welcome "Name"
```

### Publishing

```bash
git commit
git tag 1.2.3
git push origin 1.2.3
```

## Step 5 - Permissions

See: https://deno.land/manual@v1.11.3/getting_started/permissions#permissions

```bash
cd step5
```

```ts
welcome(Deno.env.get("USER"));
```

```bash
deno run --allow-env welcome.ts
deno run --allow-env=USER welcome.ts
```

```ts
const greetings = JSON.parse(
  await Deno.readTextFile("./greetings.json"),
) as string[];
greetings.forEach(welcome);
```

```bash
deno run --allow-env=USER --allow-read welcome.ts
deno run --allow-env=USER --allow-read=greetings.json welcome.ts

deno install --allow-env=USER --allow-read=greetings.json welcome.ts
deno run --prompt welcome.ts
```
