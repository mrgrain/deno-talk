import { red, 
  bold, italic, 
  
  cyan } from 
  
        "https://deno.land/std/fmt/colors.ts";

let name: any = 'Momo';

console.log(
  
  
  `${red(bold(name))}, welcome to ${cyan(italic("Deno"))} 🦕`);
