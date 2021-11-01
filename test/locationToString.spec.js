// Import Third-party Dependencies
import test from "tape";

// Import Internal Dependencies
import * as utils from "../index.js";

test("locationToString should return the location array in string syntax", (tape) => {
  const str = utils.locationToString([[1, 2], [2, 4]]);
  tape.equal(str, "[1:2] - [2:4]");

  tape.end();
});

test("locationToString should ignore elements after length 1", (tape) => {
  const str = utils.locationToString([[1, 2, 3], [2, 4, 10], [50]]);
  tape.equal(str, "[1:2] - [2:4]");

  tape.end();
});
