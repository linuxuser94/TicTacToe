document.addEventListener("DOMContentLoaded", function () {
  let p1, p2, p3, p4, p5, p6, p7, p8, p9;

  let p_all;
  let turn_count = 0;

  let minValue = 0;
  let maxValue = 100;
  let player_turn_game;

  let x_wins = 0;
  let o_wins = 0;
  let draw = 0;

  let player_turn_init = Math.floor(
    Math.random() * (maxValue - minValue + 1) + minValue
  );
  console.log("Iznad 50, X ide prvi. Ispod 50 OKS ide prvi.");
  console.log("Bacam kocku ko ide prvi:", player_turn_init);

  if (player_turn_init > 50) {
    document.getElementById("player_turn").innerHTML = "X igra prvi";
    player_turn_game = 1;
    console.log("X igra prvi");
  } else {
    document.getElementById("player_turn").innerHTML = "OKS igra prvi";
    player_turn_game = 0;
    console.log("OKS igra prvi");
  }

  p_all = document.querySelectorAll(".polje");

  p_all.forEach(function (button) {
    button.addEventListener("click", function () {
      if (player_turn_game === 1) {
        button.innerHTML = "X";
        button.style.color = "blue";
        player_turn_game = 0;
        turn_count = turn_count + 1;
        console.log("Turn count: ", turn_count);
        document.getElementById("player_turn").innerHTML = "OKS je na redu";
        button.disabled = true;
        (p1 = document.getElementById("p1").innerHTML),
          (p2 = document.getElementById("p2").innerHTML),
          (p3 = document.getElementById("p3").innerHTML),
          (p4 = document.getElementById("p4").innerHTML),
          (p5 = document.getElementById("p5").innerHTML),
          (p6 = document.getElementById("p6").innerHTML),
          (p7 = document.getElementById("p7").innerHTML),
          (p8 = document.getElementById("p8").innerHTML),
          (p9 = document.getElementById("p9").innerHTML);
        // console.log(p1, p2, p3, p4, p5, p6, p7, p8, p9); ZA DEBUGING

        if (
          (p1 === "X" && p2 === "X" && p3 === "X") ||
          (p4 === "X" && p5 === "X" && p6 === "X") ||
          (p7 === "X" && p8 === "X" && p9 === "X") ||
          (p1 === "X" && p4 === "X" && p7 === "X") ||
          (p2 === "X" && p5 === "X" && p8 === "X") ||
          (p3 === "X" && p6 === "X" && p9 === "X") ||
          (p1 === "X" && p5 === "X" && p9 === "X") ||
          (p3 === "X" && p5 === "X" && p7 === "X")
        ) {
          window.alert("X wins"), (x_wins = x_wins + 1);
        }

        if (turn_count == 9) {
          window.alert("Draw!"), (draw = draw + 1);
        }
      } else {
        button.innerHTML = "O";
        button.style.color = "red";
        player_turn_game = 1;
        turn_count = turn_count + 1;
        console.log("Turn count: ", turn_count);
        document.getElementById("player_turn").innerHTML = "X je na redu";
        button.disabled = true;
        (p1 = document.getElementById("p1").innerHTML),
          (p2 = document.getElementById("p2").innerHTML),
          (p3 = document.getElementById("p3").innerHTML),
          (p4 = document.getElementById("p4").innerHTML),
          (p5 = document.getElementById("p5").innerHTML),
          (p6 = document.getElementById("p6").innerHTML),
          (p7 = document.getElementById("p7").innerHTML),
          (p8 = document.getElementById("p8").innerHTML),
          (p9 = document.getElementById("p9").innerHTML);
        //console.log(p1, p2, p3, p4, p5, p6, p7, p8, p9); ZA DEBUGING

        if (
          (p1 === "O" && p2 === "O" && p3 === "O") ||
          (p4 === "O" && p5 === "O" && p6 === "O") ||
          (p7 === "O" && p8 === "O" && p9 === "O") ||
          (p1 === "O" && p4 === "O" && p7 === "O") ||
          (p2 === "O" && p5 === "O" && p8 === "O") ||
          (p3 === "O" && p6 === "O" && p9 === "O") ||
          (p1 === "O" && p5 === "O" && p9 === "O") ||
          (p3 === "O" && p5 === "O" && p7 === "O")
        ) {
          window.alert("O wins"), (o_wins = o_wins + 1);
        }
      }
    });
  });
});
