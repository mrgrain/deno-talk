import { welcome } from "./greeter.ts";

const shouted = await (await fetch("HTTP://API.SHOUTCLOUD.IO/V1/SHOUT", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ INPUT: "Momo" }),
})).json();

welcome(shouted.OUTPUT);
