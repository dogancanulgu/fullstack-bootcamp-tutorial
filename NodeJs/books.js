const books = [
    {name : "Kitap1", author: "Yazar1"},
    {name : "Kitap2", author: "Yazar2"}
];

const listbooks = () => {
    books.map(book => console.log(book.name));
};

const addBooks = (newBook) => {
    const addBookPromise = new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                books.push(newBook);
                resolve();
            }, 3000);
        }catch(error) {
            reject(error);
        }
    });
    return addBookPromise;
};

addBooks({name: "Kitap3", author: "Yazar3"})
    .then(() => {
        listbooks();
    })
    .catch((error) => {
        console.log("Bir hata olustu.")
    });