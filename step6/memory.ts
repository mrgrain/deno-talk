import { welcome } from "./greeter.ts";

if (Deno.args[0]) {
  localStorage.setItem("name", Deno.args[0]);
}

const name = localStorage.getItem("name") as string ?? "NOT_FOUND";

welcome(name);
