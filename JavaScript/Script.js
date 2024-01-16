const q = document.querySelector('form'); // Correction du sélecteur

var score = 0;

function test() {
    event.preventDefault();

    // Récupération des valeurs des questions
    const question1 = q.elements['question1'].value;
    const question2 = q.elements['question2'].value;
    const question3 = q.elements['question3'].value;
    const question4 = q.elements['question4'].value;
    const question5 = q.elements['question5'].value;
    const question6 = q.elements['question6'].value;
    const question7 = q.elements['question7'].value;
    const question8 = q.elements['question8'].value;
    const question9 = q.elements['question9'].value;
    const question10 = q.elements['question10'].value;
    const question11 = q.elements['question11'].value;
    const question12 = q.elements['question12'].value;

    // Vérification si toutes les questions sont remplies
    if (
        question1 == "" || question2 == "" || question3 == "" || question4 == "" ||
        question5 == "" || question6 == "" || question7 == "" || question8 == "" ||
        question9 == "" || question10 == "" || question11 == "" || question12 == ""
    ) {
        alert("Remplissez toutes les questions.");
    } else {
        if (question1 == "b") {
            score++;
        }
        if (question2 == "a") {
            score++;
        }
        if (question3 == "b") {
            score++;
        }
        if (question4 == "c") {
            score++;
        }
        if (question5 == "b") {
          score++;
      }
      if (question6 == "b") {
        score++;
    }
    if (question7 == "b") {
      score++;
  }
  if (question8 == "c") {
    score++;
}
if (question9 == "a") {
  score++;
}
if (question10 == "b") {
  score++;
}
if (question11 == "c") {
  score++;
}
if (question12 == "a") {
  score++;
}

        if (score > 6) {
            alert("Bien ! Votre score est " + score + " /12");
            q.reset();
        } else if (score < 6) {
            alert("Jouez dans la cuisine ! Votre score est " + score + " /12");
            q.reset();
        } else if (score === 12) {
            alert("Félicitations ! Vous avez un score parfait de " + score + " /12");
            q.reset();
        }
    }
}

