import { red, 
  bold, italic, 
  
  cyan } from 
  
        "https://deno.land/std@0.100.0/fmt/colors.ts";

let name: any = 'Momo';

console.log(
  
  
  `${red(bold(name))}, welcome to ${cyan(italic("Deno"))} 🦕`);
