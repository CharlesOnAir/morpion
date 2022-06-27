function main() {
    var pions = document.querySelectorAll("#game_table button");
    const joueur_1 = document.getElementById('nom_joueur_1');
    const joueur_2 = document.getElementById('nom_joueur_2');
    var joueurs = [
        [joueur_1.value, "X"],
        [joueur_2.value, "O"],
    ];
    var tour = 0;
    var jeuEstFini = false;

    for (var i = 0, len = pions.length; i < len; i++) {
        pions[i].addEventListener("click", function() {
          if (jeuEstFini) return;
    
          if (!estValide(this)) {
            sendMessage(
              "Case occupée ! <br />Joueur " +
                joueurs[tour][0] +
                " c'est toujours à vous !"
            );
          } else {
            setSymbol(this, joueurs[tour][1]);
            jeuEstFini = rechercherVainqueur(pions, joueurs, tour);
    
            if (jeuEstFini) {
              logger("Le joueur " +
              joueurs[tour][0] +
            ' a gagné ! <br /> <a href="">Rejouer</a>');
              sendMessage(
                "Le joueur " +
                    joueurs[tour][0] +
                  ' a gagné ! <br /> <a href="">Rejouer</a>'
              );
              return;
            }
    
            if (matchNul(pions)) {
              sendMessage(
                'Match Nul ! <br/> <a href="">Rejouer</a>'
              );
              return;
            }
            logger("Joueur " + joueurs[tour][0] + " vient de jouer");
            tour++;
            tour = tour % 2;
            sendMessage("Joueur " + joueurs[tour][0] + " c'est à vous !");
          }
        });
      }
}

function logger(data) {
    const logger_inputs = document.getElementById('logger_inputs');
    logger_inputs.innerHTML += '<tr><td>'+data+'</td></tr>';
}

function matchNul(pions) {
    for (var i = 0, len = pions.length; i < len; i++) {
      if (pions[i].innerHTML.length == 0) return false;
    }
    return true;
  }


function sendMessage(data) {
    Swal.fire(data)
}

function estValide(button) {
    return button.innerHTML.length == 0;
}

function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
}

function rechercherVainqueur(pions, joueurs, tour) {
    if (
      pions[0].innerHTML == joueurs[tour][1] &&
      pions[1].innerHTML == joueurs[tour][1] &&
      pions[2].innerHTML == joueurs[tour][1]
    ) {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[1].style.backgroundColor = "#9ACD32";
      pions[2].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pions[3].innerHTML == joueurs[tour][1] &&
      pions[4].innerHTML == joueurs[tour][1] &&
      pions[5].innerHTML == joueurs[tour][1]
    ) {
      pions[3].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pions[6].innerHTML == joueurs[tour][1] &&
      pions[7].innerHTML == joueurs[tour][1] &&
      pions[8].innerHTML == joueurs[tour][1]
    ) {
      pions[6].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pions[0].innerHTML == joueurs[tour][1] &&
      pions[3].innerHTML == joueurs[tour][1] &&
      pions[6].innerHTML == joueurs[tour][1]
    ) {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[3].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pions[1].innerHTML == joueurs[tour][1] &&
      pions[4].innerHTML == joueurs[tour][1] &&
      pions[7].innerHTML == joueurs[tour][1]
    ) {
      pions[1].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pions[2].innerHTML == joueurs[tour][1] &&
      pions[5].innerHTML == joueurs[tour][1] &&
      pions[8].innerHTML == joueurs[tour][1]
    ) {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pions[0].innerHTML == joueurs[tour][1] &&
      pions[4].innerHTML == joueurs[tour][1] &&
      pions[8].innerHTML == joueurs[tour][1]
    ) {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pions[2].innerHTML == joueurs[tour][1] &&
      pions[4].innerHTML == joueurs[tour][1] &&
      pions[6].innerHTML == joueurs[tour][1]
    ) {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      return true;
    }
}

function start() {
    const start_section = document.getElementById('start_section');
    const infos_section = document.getElementById('infos_section');
    start_section.style.display = 'none';
    infos_section.style.display = 'flex';
} 

function start_game() {
    const joueur_1 = document.getElementById('nom_joueur_1');
    const joueur_2 = document.getElementById('nom_joueur_2');
    const infos_section = document.getElementById('infos_section');
    const game_section = document.getElementById('game_section');
    game_section.style.display = 'flex';
    const logger_inputs = document.getElementById('logger_inputs');
    if (joueur_1.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vous devez remplir le nom du joueur 1',
          })
        return;
    }
    if (joueur_2.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vous devez remplir le nom du joueur 2',
          })
        return;
    }
    infos_section.style.display = 'none';
    main();
    logger('Démarrage du jeu avec ' + joueur_1.value + ' et ' + joueur_2.value);
}