// Import Node.js Dependencies
import { describe, it } from "node:test";
import assert from "node:assert";

// Import Internal Dependencies
import * as utils from "../index.js";

describe("manifestAuthorRegex", () => {
  it("must return a RegExp", () => {
    const regex = utils.manifestAuthorRegex();
    assert.ok(regex instanceof RegExp);
  });
});

describe("parseManifestAuthor", () => {
  it("parse a name field", () => {
    const result = utils.parseManifestAuthor("GENTILHOMME Thomas");
    assert.deepEqual(result, {
      name: "GENTILHOMME Thomas"
    });
  });

  it("parse a generic name <email> field", () => {
    const result = utils.parseManifestAuthor("GENTILHOMME Thomas <gentilhomme.thomas@gmail.com>");
    assert.deepEqual(result, {
      name: "GENTILHOMME Thomas",
      email: "gentilhomme.thomas@gmail.com"
    });
  });

  it("parse an author field with name, email and URL", () => {
    const result = utils.parseManifestAuthor("John-David Dalton <john.david.dalton@gmail.com> (http://allyoucanleet.com/)");
    assert.deepEqual(result, {
      name: "John-David Dalton",
      email: "john.david.dalton@gmail.com",
      url: "http://allyoucanleet.com/"
    });
  });

  it("parse an author field with name and URL", () => {
    const result = utils.parseManifestAuthor("John-David Dalton (http://allyoucanleet.com/)");
    assert.deepEqual(result, {
      name: "John-David Dalton",
      url: "http://allyoucanleet.com/"
    });
  });

  it("empty string must return empty object", () => {
    const result = utils.parseManifestAuthor("");
    assert.deepEqual(result, {});
  });

  it("must throw an Error if the argument is not a string", () => {
    try {
      utils.parseManifestAuthor(null);
    }
    catch (error) {
      assert.strictEqual(error.message, "expected manifestAuthorField to be a string");
    }
  });
});
