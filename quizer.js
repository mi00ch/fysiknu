function rättaQuiz() {
    let poäng = 0;
    let total = 3;
    let outcome1 = "";
    let outcome2 = "";
    let outcome3 = "";
  
    const rättSvar = {
        fr1: "alt2_1",
        fr2: "alt1_2",
        fr3: "alt1_3"
    };

    const fr1 = document.querySelector('input[name="fr1"]:checked');
    const fr2 = document.querySelector('input[name="fr2"]:checked');
    const fr3 = document.querySelector('input[name="fr3"]:checked');

    if (fr1 && fr1.value === rättSvar.fr1) {
      poäng++;
      outcome1 = "Rätt!";
    } else {
      outcome1 = "Fel!";
    }
  
    if (fr2 && fr2.value === rättSvar.fr2) {
      poäng++;
      outcome2 = "Rätt!";
    } else {
      outcome2 = "Fel!";
    }

    if (fr3 && fr3.value === rättSvar.fr3) {
      poäng++;
      outcome3 = "Rätt!";
    } else {
      outcome3 = "Fel!";
    }
  
    const frga1 = document.getElementById("frga1");
    const frga2 = document.getElementById("frga2");
    const frga3 = document.getElementById("frga3");
  
    const resultatText = document.getElementById("resultatText");
  
    frga1.innerHTML = outcome1;
    frga2.innerHTML = outcome2;
    frga3.innerHTML = outcome3;
  
    resultatText.innerHTML = "Poäng: <strong>" + poäng + " / " + total + "</strong>";

    return false;
}
