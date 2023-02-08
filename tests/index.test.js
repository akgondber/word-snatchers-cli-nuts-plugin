import { test } from "uvu";
import * as assert from "uvu/assert";
import WordSnatchersCliNutsPlugin from "../index.js";

let wordSnatchersCliNutsPlugin;

test.before.each(() => {
  wordSnatchersCliNutsPlugin = new WordSnatchersCliNutsPlugin();
});

test("WordSnatchersCliNutsPlugin#build", () => {
  const items = wordSnatchersCliNutsPlugin.build();

  items.map((item) =>
    assert.ok(item.definition.length > 4 && item.word.length > 1)
  );
});

test.run();
