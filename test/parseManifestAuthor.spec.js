// Import Third-party Dependencies
import test from "tape";
import is from "@slimio/is";

// Import Internal Dependencies
import * as utils from "../index.js";

test("manifestAuthorRegex must return a RegExp", (tape) => {
  const regex = utils.manifestAuthorRegex();
  tape.true(is.regExp(regex));

  tape.end();
});

test("parse a name field", (tape) => {
  const result = utils.parseManifestAuthor("GENTILHOMME Thomas");
  tape.deepEqual(result, {
    name: "GENTILHOMME Thomas"
  });

  tape.end();
});

test("parse a generic name <email> field", (tape) => {
  const result = utils.parseManifestAuthor("GENTILHOMME Thomas <gentilhomme.thomas@gmail.com>");
  tape.deepEqual(result, {
    name: "GENTILHOMME Thomas",
    email: "gentilhomme.thomas@gmail.com"
  });

  tape.end();
});

test("parse an author field with name, email and URL", (tape) => {
  const result = utils.parseManifestAuthor("John-David Dalton <john.david.dalton@gmail.com> (http://allyoucanleet.com/)");
  tape.deepEqual(result, {
    name: "John-David Dalton",
    email: "john.david.dalton@gmail.com",
    url: "http://allyoucanleet.com/"
  });

  tape.end();
});

test("parse an author field with name and URL", (tape) => {
  const result = utils.parseManifestAuthor("John-David Dalton (http://allyoucanleet.com/)");
  tape.deepEqual(result, {
    name: "John-David Dalton",
    url: "http://allyoucanleet.com/"
  });

  tape.end();
});

test("empty string must return empty object", (tape) => {
  const result = utils.parseManifestAuthor("");
  tape.deepEqual(result, {});

  tape.end();
});

test("parseManifestAuthor must throw an Error if the argument is not a string", (tape) => {
  tape.plan(1);

  try {
    utils.parseManifestAuthor(null);
  }
  catch (error) {
    tape.strictEqual(error.message, "expected manifestAuthorField to be a string");
  }

  tape.end();
});
