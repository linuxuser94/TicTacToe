document.addEventListener("DOMContentLoaded", function () {
  // funkcija za loadanje svog html/css kontenta
  let p1, p2, p3, p4, p5, p6, p7, p8, p9; // sva polja u igri

  let p_all; // varijabla za selektovanje svih elemenata koji se identificiraju kao polja
  let turn_count = 0; // brojac poteza koji signalizira kada nije X niti O pobjednik

  let minValue = 0; // minimalni broj za random sansu da igra odluci ko ide prvi
  let maxValue = 100; // maksmimalni broj za random sansu da igra odluci ko ide prvi
  let player_turn_game; // varijabla za odlucivanje ko igra, X ili O

  let x_wins = 0; // varijabla za sve X pobjede
  let o_wins = 0; // varijabla za sve O pobjede
  let draw = 0; // varijabla za nerijeseno

  document.getElementById("x_wins_html").innerHTML = "X pobjeda: " + x_wins;
  document.getElementById("o_wins_html").innerHTML = "O pobjeda: " + o_wins; // ispis pobjeda na ekranu
  document.getElementById("draw_html").innerHTML = "Neriješeno: " + draw;

  let player_turn_init = Math.floor(
    // dio koda koji odlucuje ko igra prvi
    Math.random() * (maxValue - minValue + 1) + minValue
  );
  console.log("Iznad 50, X ide prvi. Ispod 50 OKS ide prvi.");
  console.log("Bacam kocku ko ide prvi:", player_turn_init);

  if (player_turn_init > 50) {
    // generisani broj iznad 50 X igra prvi, ispod 50 O igra prvi
    document.getElementById("player_turn").innerHTML = "X igra prvi";
    player_turn_game = 1;
    console.log("X igra prvi");
  } else {
    document.getElementById("player_turn").innerHTML = "OKS igra prvi";
    player_turn_game = 0;
    console.log("OKS igra prvi");
  }

  p_all = document.querySelectorAll(".polje"); //dio koda koji selektira sva polja u tabeli, tj. klasu .polje

  p_all.forEach(function (button) {
    button.addEventListener("click", function () {
      //na klik u bilo koje selektirano polje izvrsi kod ispod
      if (player_turn_game === 1) {
        button.innerHTML = "X"; // upis X u kliknuto polje
        button.style.color = "blue";
        player_turn_game = 0; // nula za X, jedan za OKS
        turn_count = turn_count + 1; // brojac poteza
        console.log("Turn count: ", turn_count);
        document.getElementById("player_turn").innerHTML = "OKS je na redu"; // ispis ko je na redu
        button.disabled = true; // iskljucivanje dugmeta nakon igranog poteza
        (p1 = document.getElementById("p1").innerHTML), // dohvacanje statusa na poljima
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
          // jeftina game logika sta ce se desiti ako X pobjedi i ujedno logika kada ce pobjediti X
          (p1 === "X" && p2 === "X" && p3 === "X") ||
          (p4 === "X" && p5 === "X" && p6 === "X") ||
          (p7 === "X" && p8 === "X" && p9 === "X") ||
          (p1 === "X" && p4 === "X" && p7 === "X") ||
          (p2 === "X" && p5 === "X" && p8 === "X") ||
          (p3 === "X" && p6 === "X" && p9 === "X") ||
          (p1 === "X" && p5 === "X" && p9 === "X") ||
          (p3 === "X" && p5 === "X" && p7 === "X")
        ) {
          window.alert("X wins"),
            (x_wins = x_wins + 1), // sabiranje pobjeda
            (document.getElementById("x_wins_html").innerHTML = x_wins),
            (document.getElementById("x_wins_html").innerHTML =
              "X pobjeda: " + x_wins),
            (document.getElementById("o_wins_html").innerHTML =
              "O pobjeda: " + o_wins), // update teksta za pobjede
            (document.getElementById("draw_html").innerHTML =
              "Neriješeno: " + draw);
        }

        if (turn_count == 9) {
          // ako je igrano na svih 9 polja bez pobjednika, onda je nerijeseno
          window.alert("Draw!"), (draw = draw + 1);
        }
      } else {
        button.innerHTML = "O"; // upis OKS u polje
        button.style.color = "red"; // crvena za OKS
        player_turn_game = 1; // OKS je jedinica u logici igre
        turn_count = turn_count + 1; // brojac poteza (svih)
        console.log("Turn count: ", turn_count); // ispis u konzolu koji je potez
        document.getElementById("player_turn").innerHTML = "X je na redu"; //ispis u naslov ko je na redu
        button.disabled = true; // iskljucivanje funkcionalnosti dugmeta nakon klika
        (p1 = document.getElementById("p1").innerHTML), // dohvacanje statusa na poljima
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
          // jeftina game logika sta ce se desiti ako O pobjedi i ujedno logika kada ce pobjediti O
          (p1 === "O" && p2 === "O" && p3 === "O") ||
          (p4 === "O" && p5 === "O" && p6 === "O") ||
          (p7 === "O" && p8 === "O" && p9 === "O") ||
          (p1 === "O" && p4 === "O" && p7 === "O") ||
          (p2 === "O" && p5 === "O" && p8 === "O") ||
          (p3 === "O" && p6 === "O" && p9 === "O") ||
          (p1 === "O" && p5 === "O" && p9 === "O") ||
          (p3 === "O" && p5 === "O" && p7 === "O")
        ) {
          window.alert("O wins"),
            (o_wins = o_wins + 1), // sabiranje OKS pobjeda
            (document.getElementById("x_wins_html").innerHTML =
              "X pobjeda: " + x_wins),
            (document.getElementById("o_wins_html").innerHTML =
              "O pobjeda: " + o_wins), // ispis na stranicu statusa pobjeda
            (document.getElementById("draw_html").innerHTML =
              "Neriješeno: " + draw);
        }

        if (turn_count == 9) {
          window.alert("Draw!"),
            (draw = draw + 1),
            (document.getElementById("x_wins_html").innerHTML =
              "X pobjeda: " + x_wins),
            (document.getElementById("o_wins_html").innerHTML =
              "O pobjeda: " + o_wins),
            (document.getElementById("draw_html").innerHTML =
              "Neriješeno: " + draw);
        }
      }
    });
  });
});
