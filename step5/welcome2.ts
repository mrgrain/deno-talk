import { welcome } from "./greeter.ts";

welcome(Deno.env.get("USER"));

const greetings = JSON.parse(
  await Deno.readTextFile("./greetings.json"),
) as string[];
greetings.forEach(welcome);
