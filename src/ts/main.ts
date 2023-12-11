const buttonAddScoreP1 = document.getElementById("button_add_score_p1")!;
const cellScoreP1 = document.getElementById("cell_score_p1")!;

const buttonAddScoreP2 = document.getElementById("button_add_score_p2")!;
const cellScoreP2 = document.getElementById("cell_score_p2")!;

if (buttonAddScoreP1) {
  buttonAddScoreP1.onclick = () => {
    cellScoreP1.textContent = "15";
  };
}

if (buttonAddScoreP2) {
  buttonAddScoreP2.onclick = () => {
    cellScoreP2.textContent = "15";
  };
}
