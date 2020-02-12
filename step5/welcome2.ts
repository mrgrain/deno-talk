import { readJsonSync } from "https://deno.land/std/fs/mod.ts";
import { welcome } from "./greeter.ts";

welcome(Deno.env().USER);

const greetings = readJsonSync("./greetings.json") as string[];
greetings.forEach(welcome);
