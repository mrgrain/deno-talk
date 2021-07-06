import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";

Deno.test("testing example", () => {
  assertEquals("world", "world");
  assertEquals({ hello: "world" }, { hello: "world" });
});
