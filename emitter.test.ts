import { assert } from "https://deno.land/std@0.224.0/assert/assert.ts";
import { emitter } from "./emitter.ts";

Deno.test("emitter has magic number", () => {
  const actual = emitter();
  assert(actual instanceof Uint8Array);
  assert(actual.length === 8);
});

Deno.test("emitter has valid wasm", async () => {
  const wasm = emitter();
  await WebAssembly.instantiate(wasm);
});
