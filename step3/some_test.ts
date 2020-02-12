import {
  assertEquals,
  runTests,
  test
} from "https://deno.land/std@v0.32.0/testing/mod.ts";

test({
  name: "testing example",
  fn(): void {
    assertEquals("world", "world");
    assertEquals({ hello: "world" }, { hello: "world" });
  }
});

runTests();
