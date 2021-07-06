import { bold, cyan, italic, red } from "https://deno.land/std/fmt/colors.ts";

console.log(
  `${red(bold(Deno.args[0] || "Anonymous"))}, welcome to ${
    cyan(
      italic("Deno"),
    )
  } 🦕🦕`,
);
