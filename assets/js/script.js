/*
KOTRANA JS
var btn = document.getElementById("button");
btn.onclick = function () {
    var division = parseFloat(diviseur.value);
    var valeur1 = parseFloat(numbre1.value);
    var valeur2 = parseFloat(numbre2.value);

    var resultatText = "";
    if (isNaN(division) || isNaN(valeur1) || isNaN(valeur2)) {
        resultatText = "Veuillez entrer des nombres valides.";
    }else{
        if (valeur1 % division === 0) {
            resultatText += "Le nombre " + valeur1 + " est divisible par " + division + "<br>";
        } else {
            resultatText += "Le nombre " + valeur1 + " n'est pas divisible par " + division + "<br>";
        }
    
        if (valeur2 % division === 0) {
            resultatText += "Le nombre " + valeur2 + " est divisible par " + division;
        } else {
            resultatText += "Le nombre " + valeur2 + " n'est pas divisible par " + division;
        }
    }
   

    document.getElementById("resulat").innerHTML = resultatText;
}
*/
var btn = document.getElementById("button");

btn.onclick = function () {
    var diviseur = document.getElementById("diviseur");
    var numb1 = document.getElementById("numbre1");
    var numb2 = document.getElementById("numbre2");

    var division = parseFloat(diviseur.value);
    var valeur1 = parseFloat(numb1.value);
    var valeur2 = parseFloat(numb2.value);

    var resultatText = "";

    if (isNaN(division) || isNaN(valeur1) || isNaN(valeur2)) {
        resultatText = "Veuillez entrer des nombres valides.";
    } else if (division != 0 ) {
        function afficherDiviseurs(divisions) {
            var diviseurs = [];
            for (var i = valeur1; i <= valeur2; i++) {
                if (i % divisions === 0) {
                    diviseurs.push(i);
                }
            }
            return diviseurs;
        }

        var diviseurs = afficherDiviseurs(division);
        resultatText = "Les nombres divisibles par " + division + " entre " + valeur1 + " et " + valeur2 + " sont : " + diviseurs.join(", ");
    } else {
        resultatText = "FI";
    }
    document.getElementById("resulat").innerHTML = resultatText;
}
