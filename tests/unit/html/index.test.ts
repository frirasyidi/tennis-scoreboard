const fs = require("fs");
const path = require("path");
const $ = require("jquery");

("use strict");

beforeAll(() => {
  document.body.innerHTML = fs.readFileSync(
    path.resolve(__dirname, "../../../src/index.html"),
    "utf8"
  );
});

describe("player 1 display", () => {
  it("should have score cell", () => {
    const elementsWithId = document.querySelectorAll("#cell_score_p1");
    expect(elementsWithId.length).toBe(1);
  });

  it("should have score button", () => {
    const elementsWithId = document.querySelectorAll("#button_add_score_p1");
    expect(elementsWithId.length).toBe(1);
  });

  it("should have game cell", () => {
    const elementsWithId = document.querySelectorAll("#cell_game_p1");
    expect(elementsWithId.length).toBe(1);
  });
});

describe("player 2 display", () => {
  it("should have score cell", () => {
    const elementsWithId = document.querySelectorAll("#cell_score_p2");
    expect(elementsWithId.length).toBe(1);
  });

  it("should have score button", () => {
    const elementsWithId = document.querySelectorAll("#button_add_score_p2");
    expect(elementsWithId.length).toBe(1);
  });

  it("should have game cell", () => {
    const elementsWithId = document.querySelectorAll("#cell_game_p2");
    expect(elementsWithId.length).toBe(1);
  });
});

describe("history game control", () => {
  it("should have undo button", () => {
    const elementsWithId = document.querySelectorAll("#button_undo");
    expect(elementsWithId.length).toBe(1);
  });

  it("should have redo button", () => {
    const elementsWithId = document.querySelectorAll("#button_redo");
    expect(elementsWithId.length).toBe(1);
  });

  it("should have reset button", () => {
    const elementsWithId = document.querySelectorAll("#button_reset");
    expect(elementsWithId.length).toBe(1);
  });
});
