const cells = $('.cells');
let questions = []; // Stocăm lista întrebărilor

// 1️⃣ - Obținem întrebările din JSON și le amestecăm
$.ajax('./json/questions.json').then((data) => {
  questions = data.sort(() => Math.random() - 0.5); // Amestecăm array-ul

  renderQuestions(); // Afișăm întrebările pe ecran
});

// 2️⃣ - Funcția care afișează întrebările
function renderQuestions() {
  cells.empty(); // Ștergem întrebările anterioare
  questions.forEach((question, index) => {
    const div = $(`<div class='cell question-box' data-index='${index}'>`);
    div.html(`<span>${question.questionname}</span>`);
    div.on('click', moveToEnd); // Adăugăm event listener pe fiecare întrebare
    cells.append(div);
  });
}

// 3️⃣ - Funcția care mută întrebarea apăsată la sfârșitul listei
function moveToEnd() {
  const index = $(this).data('index'); // Luăm indexul întrebării
  const question = questions.splice(index, 1)[0]; // Scoatem întrebarea din array
  questions.push(question); // O adăugăm la sfârșit
  renderQuestions(); // Reafișăm lista actualizată
}
