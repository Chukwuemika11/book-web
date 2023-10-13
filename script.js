// Sample book data
const books = [
    {
        title: "Book Title 1",
        author: "Author Name 1",
        genre: "Fiction",
        price: "$19.99",
    },
    // Add more book data here
];

document.addEventListener('DOMContentLoaded', function () {
    const bookCards = document.querySelectorAll('.book-card');

    // Function to display book details when a card is clicked
    function displayBookDetails(event) {
        const card = event.currentTarget;
        const index = Array.from(card.parentElement.children).indexOf(card);
        const book = books[index];
        const bookDetails = `
            Title: ${book.title}
            Author: ${book.author}
            Genre: ${book.genre}
            Price: ${book.price}
        `;
        alert(bookDetails);
    }

    // Attach a click event listener to each book card
    bookCards.forEach(card => {
        card.addEventListener('click', displayBookDetails);
    });
});
