//isBookRead
interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [  
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Book[], titleToSearch: string): boolean {
  return books.reduce((isRead: boolean, book: Book) => {
    if (book.title === titleToSearch) {
      return book.isRead;
    }
    return isRead;
  }, false);
}

const bookSelect = document.getElementById("books") as HTMLSelectElement;
const bookButton = document.getElementById("isBookRead-button") as HTMLButtonElement;
const bookResult = document.getElementById("isBookReadResult") as HTMLInputElement;

bookButton.addEventListener("click", () => {
  const selectedBook: string = bookSelect.value;
  const result: boolean = isBookRead(books, selectedBook);
  console.log(
    `Ejercicio 4: isBookRead: Listado de libros${JSON.stringify(books)}, libro a buscar ${selectedBook}, resultado => ${result}`);
  bookResult.value = result.toString();
});