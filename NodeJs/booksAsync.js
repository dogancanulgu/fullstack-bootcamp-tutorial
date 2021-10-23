const books = [
  { name: "Kitap1", author: "Yazar1" },
  { name: "Kitap2", author: "Yazar2" },
];

const listbooks = () => {
  books.map((book) => console.log(book.name));
};

const addBooks = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      books.push(newBook);
      resolve();
      reject("Bir Hata Oluştu");
    }, 3000);
  });
  return promise1;
};

async function addAndListBooks() {
  await addBooks({ name: "Kitap3", author: "Yazar3" });
  listbooks();
}

addAndListBooks();

// addBooks({name: "Kitap3", author: "Yazar3"})
//     .then(() => {
//         listbooks();
//     })
//     .catch((error) => {
//         console.log("Bir hata olustu.")
//     });
