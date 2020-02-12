import { red, bold, italic, cyan } from "https://deno.land/std/fmt/colors.ts";

export function greet(
  name: string = "Anonymous",
  colors: boolean = true
): string {
  const noop = (it: any) => it;
  const redBold = colors ? (text: string) => red(bold(text)) : noop;
  const cyanItalic = colors ? (text: string) => cyan(italic(text)) : noop;

  return `${redBold(name)}, welcome to ${cyanItalic("Deno")} 🦕`;
}

export function welcome(name: string | undefined): void {
  console.log(greet(name));
}
