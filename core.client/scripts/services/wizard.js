(function () {

  angular.module('habitac') .factory('wizardService', ["localStorageService", wizardService]);

  function wizardService(localStorageService) {

    var service = {
      getWizardState: getWizardState,
      setWizardState: setWizardState,
      setSteps: setSteps,
      stepDetails: stepDetails
    };

    function getWizardState() {
      return localStorageService.get('wizard');
    }

    function setWizardState(wizard){
      return localStorageService.set('wizard', wizard);
    }
    function setSteps(path_id){
      var path = allPaths[path_id];
      var steps = [];
      angular.forEach(path.steps, function(step){
        steps.push(allSteps[step]);
      });
      return steps;
    }

    function stepDetails(path, step){
      return wizRollout[path][step]
    }

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

    var allPaths = {
      "a": {text: "Faire des travaux dans ma maison (tout type de travaux)",
            steps: [1, 2, 4, 5, 6, 7, 8, 0, 9, 10, 11, 12, 13, 14]
          },
      "b": {text: "Faire des travaux dans mon appartement (tout type de travaux)",
            steps: [6, 7, 8, 0, 9, 10, 11, 12, 13, 14]
          },
      "c": {text: "Refaire une piece de mon logement",
            steps: [6, 7, 8, 9, 10, 11, 12, 13, 14]
          },
      "d": {text: "Refaire ou isoler ma toiture",
            steps: [1]
          },
      "e": {text: "Changer ou modifier les portes et fenêtres",
            steps: [4, 5, 7] // peut-etre rajouter 10: quelle finition si fermeture de trous ? (voir avec Yoann si ca a un impact sur le cout)
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


    var wizRollout = {
      ///////////////////  travaux dans toute la maison  /////////////////////////////
      "a": {
        "toit": {
          headline: "Votre chantier comporte-t-il des travaux de toiture (ex: isolation ou aménagement des combles)?"
        },
        "sols_exterieurs": {
          headline: "Avez vous une terrasse ou un dallage extérieur à faire?"
        },
        "facade": {
          headline: "Voulez vous réaliser des travaux de façade (ex: ouvertures ou ravalaments)?"
        },
        "fenetres_et_entree": {
          headline: "Souhaitez vous changer votre porte d'entrée ou installer de nouvelles fenêtres?"
        },
        "cloisons": {
          headline: "Souhaitez vous abattre ou éléver des cloisons internes pour agrandir ou créer de nouvelles pièces?"
        },
        "portes": {
          headline: "Voulez vous créer, supprimer ou modifier des portes dans les murs existants?"
        },
        "isolation": {
          headline: "Souhaitez-vous isoler des murs existants?",
        },
        "composition_logement": {
          mandatory: true,
          headline: "Quelle est la composition de votre logement?"
        },
        "sols_interieurs": {
          headline: "Voulez vous changer le revetement de vos sols ou installer du chauffage par le sol?"
        },
        "finition_murs": {
          headline: "Voulez-vous poser du papier-peint, repeindre ou revêtir des murs existants?"
        },
        "plafonds": {
          headline: "Voulez vous repeindre ou isoler vos plafonds?"
        },
        "elements": {
          headline: "Souhaitez vous ajouter des équippements ou des éléments de menuiserie (ex: etagère, penderie) dans certaines pièces?"
        },
        "electricite": {
          headline: "Souhaitez-vous réaliser des travaux sur votre installation électrique?"
        },
        "controle_temperature": {
          headline: "Voulez vous installer du chauffage ou de l'air conditionné?"
        }
      },
      ///////////////////  travaux dans toute l'appartement  //////////////////////////
      "b": {
        "cloisons": {
          headline: "Souhaitez vous abattre ou éléver des cloisons internes pour agrandir ou créer de nouvelles pièces?"
        },
        "portes": {
          headline: "Voulez vous créer, supprimer ou modifier des portes dans les murs existants?"
        },
        "isolation": {
          headline: "Souhaitez-vous isoler des murs existants?",
        },
        "composition_logement": {
          mandatory: true,
          headline: "Quelle est la composition de votre logement?"
        },
        "sols_interieurs": {
          headline: "Voulez vous changer le revetement de vos sols ou installer du chauffage par le sol?"
        },
        "finition_murs": {
          headline: "Voulez-vous poser du papier-peint, repeindre ou revêtir des murs existants?"
        },
        "plafonds": {
          headline: "Voulez vous repeindre ou isoler vos plafonds?"
        },
        "elements": {
          headline: "Souhaitez vous ajouter des équippements ou des éléments de menuiserie (ex: etagère, penderie) dans certaines pièces?"
        },
        "electricite": {
          headline: "Souhaitez-vous réaliser des travaux sur votre installation électrique?"
        },
        "controle_temperature": {
          headline: "Voulez vous installer du chauffage ou de l'air conditionné?"
        }
      },
      //////////////////   refaire une pièce du logement    ///////////////////////
      "c": {
        "cloisons": {
          headline: "Votre projet implique-t-il de détruire ou construire une nouvelle cloison ?"
        },
        "portes": {
          headline: "Voulez vous créer, supprimer ou modifier des portes dans les murs existants?"
        },
        "isolation": {
          headline: "Souhaitez-vous isoler certains des murs déja existants?",
        },
        "sols_interieurs": {
          headline: "Voulez vous changer le revetement du sol de cette pièce ou installer du chauffage par le sol?"
        },
        "finition_murs": {
          headline: "Voulez-vous poser du papier-peint, repeindre ou revêtir les murs de la pièce?"
        },
        "plafonds": {
          headline: "Voulez vous repeindre ou isoler le plafond de la pièce?"
        },
        "elements": {
          headline: "Souhaitez vous ajouter des équippements ou des éléments de menuiserie (ex: etagère, penderie) dans cette pièce?"
        },
        "electricite": {
          headline: "Souhaitez-vous modifier les éléments electriques (ex: prises de courant, interrupteurs) de la pièce?"
        },
        "controle_temperature": {
          headline: "Voulez-vous installer du chauffage ou de l'air conditionné?"
        }
      },
      ///////////////////  travaux dans toute la maison  /////////////////////////////
      "d": {
        "toit": {
          mandatory: true,
          headline: "Décrivez ci-dessous vos travaux de toiture:"
        }
      },
      ///////////////////  refaire portes ou fenetres   ///////////////////////////
      "e": {
        "facade": {
          headline: "Souhaitez vous créer de nouvelles ouvertures dans la facade ou en supprimer?"
        },
        "fenetres_et_entree": {
          headline: "Souhaitez vous changer votre porte d'entrée ou installer de nouvelles fenêtres?"
        },
        "portes": {
          headline: "Souhaitez vous créer ou supprimer des portes <em>à l'intérieur</em> de votre maison?"
        },
        "fenetres_et_entree": {
        }
      },
      ///////////////////  refaire l'électricité   /////////////////////////////////
      "f": {
        "composition_logement": {
          mandatory: true,
          headline: "Quelle est la composition de votre logement?"
        },
        "electricite": {
          mandatory: true,
          headline: "Décrivez ci-dessous vos travaux d'electricité"
        },
        "sols_interieurs": {
          headline: "Parfois les fils electriques passent par le sol. Souhaitez vous en profiter pour changer vos revetement de sol?"
        },
        "finition_murs": {
          headline: "Si vous avez opté pour une installation encastrée ou semi-encastré, l'electricien va creuser légèrement vos murs. Souhaitez vous en profiter pour les repeindre ou les recouvrir?"
        }
      },
      ///////////////////  refaire les murs ou plafonds   /////////////////////////////////
      "g": {
        "isolation": {
          headline: "Souhaitez-vous isoler certains murs?"
        },
        "finition_murs": {
          headline: "Souhaitez-vous modifier la finition ou le revêtement de vos murs?"
        },
        "plafonds": {
          headline: "Voulez vous repeindre ou isoler vos plafonds?"
        }
      },
      ///////////////////  refaire chauffage ou air conditionné   /////////////////////////////////
      "h": {
        "composition_logement": {
          mandatory: true,
          headline: "Quelle est la composition de votre logement?"
        },
        "finition_murs": {
          headline: "Souhaitez-vous modifier la finition ou le revêtement de vos murs?"
        },
        "plafonds": {
          headline: "Voulez vous repeindre ou isoler vos plafonds?"
        }
      },
    }

    return service;
  }

})();

