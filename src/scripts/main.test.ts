"use strict";

it("button click should change a player's score", () => {
  // Mock a document body
  document.body.innerHTML =
    "<div>" +
    '  <span id="cell_score_p1">0</span>' +
    '  <button id="button_add_score_p1">Score 1</button>' +
    '</div>';

  require("./main");
  const $ = require("jquery");

  $("#button_add_score_p1").click();
  expect($("#cell_score_p1").text()).toBe("15");
});
