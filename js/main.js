document.addEventListener("DOMContentLoaded", function() {

    let p1, p2, p3, p4, p5, p6, p7, p8, p9;
    let p_all;
    let turn_count = 0;

    let minValue = 0;
    let maxValue = 100;
    let player_turn_game;

    let player_turn_init = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    console.log("Iznad 50, X ide prvi. Ispod 50 OKS ide prvi.")
    console.log("Bacam kocku ko ide prvi:", player_turn_init);

    if (player_turn_init > 50){
        document.getElementById("player_turn").innerHTML = "X igra prvi";
        player_turn_game = 1;
        console.log("X igra prvi");
    }  else {
        document.getElementById("player_turn").innerHTML = "OKS igra prvi";
        player_turn_game = 0;
        console.log("OKS igra prvi");
    }

    p_all = document.querySelectorAll(".polje");

    p_all.forEach(function(button) {
        button.addEventListener("click", function() {
            if (player_turn_game === 1){
            button.textContent="X"
            button.style.color='blue';
            player_turn_game = 0
            turn_count = turn_count + 1
            console.log("Turn count: ", turn_count)
            document.getElementById("player_turn").innerHTML = "OKS je na redu";
            button.disabled = true;
        } else {
            button.textContent="O"
            button.style.color='red';
            player_turn_game = 1
            turn_count = turn_count + 1
            console.log("Turn count: ", turn_count)
            document.getElementById("player_turn").innerHTML = "X je na redu";
            button.disabled = true;
        }         
        });
    });

    let p_combo_win = [
        p1 = document.getElementById("p1"),
        p2 = document.getElementById("p2"),
        p3 = document.getElementById("p3"),

        p4 = document.getElementById("p4"),
        p5 = document.getElementById("p5"),
        p6 = document.getElementById("p6"),

        p7 = document.getElementById("p7"),
        p8 = document.getElementById("p8"),
        p9 = document.getElementById("p9"),
    ]

});