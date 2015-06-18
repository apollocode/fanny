(function () {

  angular.module('habitac') .factory('wizardService', ["localStorageService", wizardService]);

  function wizardService(localStorageService) {

    var service = {
      getWizardState: getWizardState,
      setWizardState: setWizardState,
      setSteps: setSteps
    };

    var allSteps = [
        "composition_logement", // 0
        "toit", // 1
        "sols_exterieurs", // 2
        "gros_oeuvre", // 3
        "facade", // 4
        "fenetres_et_entree", // 5
        "cloisons", // 6
        "portes", // 7
        "isolation", // 8
        "sols_interieurs", // 9
        "finition_murs", // 10
        "plafonds", // 11
        "elements", // 12
        "electricite", // 13
        "controle_temperature", // 14
        "type" // 15
      ];

    function paths(){
      return {
        "a": {text: "Faire des travaux dans ma maison (tout type de travaux)",
              steps: [1, 2, 4, 5, 6, 7, 0, 8, 9, 10, 11, 12, 13, 14]
            },
        "b": {text: "Faire des travaux dans mon appartement (tout type de travaux)",
              steps: [6, 7, 0, 8, 9, 10, 11, 12, 13, 14]
            },
        "c": {text: "Refaire une piece de mon logement",
              steps: [6, 7, 8, 9, 10, 11, 12, 13, 14]
            },
        "d": {text: "Refaire ou isoler ma toiture",
              steps: [1]
            },
        "e": {text: "Changer ou modifier les portes et fenêtres",
              steps: [4, 7, 10] // 10: si fermeture de trous: quelle finition ? (voir avec Yoann si ca a un impact sur le cout)
            },
        "f": {text: "Changer ou refaire l'installation électrique",
              steps: [0, 13, 9, 10, 8]  //Isolation en mode : 'tant que t'y est a refaire tes murs, ca te dirait pas de les isoler?""
            },
        "g": {text: "Refaire les murs ou plafonds",
              steps: [8, 10, 11] // j'ai retiré le 0 ici car je pense pas qu'on soit legitime pour demander compo de l'appart dans ce cas
            },
        "h": {text: "Réparer ou changer mon système de chauffage",
              steps: [0, 14, 9, 8, 10]
            },
        "i": {text: "Refaire des revetements de sol (intérieur ou extérieur)",
              steps: [2, 9] // j'ai retiré le 0 ici car je pense pas qu'on soit legitime pour demander compo de l'appart dans ce cas
            }//,
        // "j": {text: "Je ne suis pas sûr, je souhaiterais etre guidé"
        //       steps: [15] => en fait en fonction de sa réponse on le renvoit vers path a) ou b); voir comment on gere ca
        //     },
        // TO DO: agrandir ou surélever la maison
      };
    }


    function getWizardState() {
      return localStorageService.get('wizard');
    }

    function setWizardState(wizard){
      return localStorageService.set('wizard', wizard);
    }
    function setSteps(path_id){
      var path = paths()[path_id];
      var steps = [];
      angular.forEach(path.steps, function(step){
        steps.push(allSteps[step]);
      });
      return steps;
    }

    return service;
  }

})();



// AUTRE FORMATAGE POUR LES PATHS

// [
//   {id: "a"
//     text: "Faire des travaux dans ma maison (tout type de travaux)"
//     steps: [1, 2, 4, 5, 6, 7, 0, 8, 9, 10, 11, 12, 13, 14]
//   },
//   {id: "b"
//     text: "Faire des travaux dans mon appartement (tout type de travaux)"
//     steps: [6, 7, 0, 8, 9, 10, 11, 12, 13, 14]
//   },
//   {id: "c"
//     text: "Refaire une piece de mon logement"
//     steps: [6, 7, 8, 9, 10, 11, 12, 13, 14]
//   },
//   {id: "d"
//     text: "Refaire ou isoler ma toiture"
//     steps: [1]
//   },
//   {id: "e"
//     text: "Changer ou modifier les portes et fenêtres"
//     steps: [4, 7, 10] // 10: si fermeture de trous: quelle finition ? (voir avec Yoann si ca a un impact sur le cout)
//   },
//   {id: "f"
//     text: "Changer ou refaire l'installation électrique"
//     steps: [0, 13, 9, 10, 8]  //Isolation en mode : 'tant que t'y est a refaire tes murs, ca te dirait pas de les isoler?""
//   },
//   {id: "g"
//     text: "Refaire les murs ou plafonds"
//     steps: [8, 10, 11] // j'ai retiré le 0 ici car je pense pas qu'on soit legitime pour demander compo de l'appart dans ce cas
//   },
//   {id: "h"
//     text: "Réparer ou changer mon système de chauffage"
//     steps: [0, 14, 9, 8, 10]
//   }
//   {id: "i"
//     text: "Refaire des revetements de sol (intérieur ou extérieur)"
//     steps: [2, 9] // j'ai retiré le 0 ici car je pense pas qu'on soit legitime pour demander compo de l'appart dans ce cas
//   }//,
//   // "j": {text: "Je ne suis pas sûr, je souhaiterais etre guidé"
//   //       steps: [15] => en fait en fonction de sa réponse on le renvoit vers path a) ou b); voir comment on gere ca
//   //     },
//   // TO DO: agrandir ou surélever la maison
// ];