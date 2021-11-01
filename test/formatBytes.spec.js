// Import Third-party Dependencies
import test from "tape";

// Import Internal Dependencies
import * as utils from "../index.js";

test("formatBytes should return '0 B' if bytes argument is equal zero", (tape) => {
  tape.equal(utils.formatBytes(0), "0 B");

  tape.end();
});

test("formatBytes should format 10 bytes", (tape) => {
  tape.equal(utils.formatBytes(10), "10 B");

  tape.end();
});

test("formatBytes should format 3000 bytes in KB with two fixed number", (tape) => {
  tape.equal(utils.formatBytes(3000), "2.93 KB");

  tape.end();
});

test("formatBytes should format 822_223_900 bytes in MB", (tape) => {
  tape.equal(utils.formatBytes(822_223_900), "784.13 MB");

  tape.end();
});
