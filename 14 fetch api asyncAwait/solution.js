const isbn = prompt(`Podaj numer ISBN:`);

fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
  .then((response) => response.json())
  .then((data) =>
    console.log(
      `Książka o numerze ${isbn}: tytuł - ${data.items[0].volumeInfo.title}, autor: ${data.items[0].volumeInfo.authors}.`
    )
  )
  .catch(() => {
    console.log(`Coś jest nie tak...`);
  });
