// Import Third-party Dependencies
import test from "tape";

// Import Internal Dependencies
import * as utils from "../index.js";

test("taggedString with numeric parameter", (tape) => {
  const clojureHello = utils.taggedString`Hello ${0}`;
  tape.strictEqual(clojureHello(), "Hello ");
  tape.strictEqual(clojureHello("world"), "Hello world");

  tape.end();
});

test("taggedString with nammed parameter", (tape) => {
  const clojureFoo = utils.taggedString`Hello ${"word"}`;
  tape.strictEqual(clojureFoo({}), "Hello ");
  tape.strictEqual(clojureFoo({ word: "bar" }), "Hello bar");

  tape.end();
});
