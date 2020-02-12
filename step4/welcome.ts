import {
  red,
  bold,
  italic,
  cyan
} from "https://deno.land/std@v0.32.0/fmt/colors.ts";

console.log(
  `${red(bold(Deno.args[0] || "Anonymous"))}, welcome to ${cyan(
    italic("Deno")
  )} 🦕`
);
