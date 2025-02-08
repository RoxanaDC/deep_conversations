const fs = require('fs');

// Citește fișierul text
fs.readFile('english_questions.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Eroare la citirea fișierului:', err);
    return;
  }

  // Normalizează spațiile multiple și liniile goale
  const questions = data
    .split(/\n\s*\n/) // Separă întrebările la linii goale multiple
    .map((line) => line.trim())
    .filter((line) => line) // Elimină liniile goale
    .map((question) => ({ questionname: question }));

  // Salvează JSON-ul într-un fișier
  fs.writeFile(
    'questions.json',
    JSON.stringify(questions, null, 2),
    'utf8',
    (err) => {
      if (err) {
        console.error('Eroare la salvarea JSON:', err);
        return;
      }
      console.log('Fișierul questions.json a fost generat cu succes!');
    }
  );
});
