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

