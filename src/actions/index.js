const bookLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};


const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(bookLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

const bookRemovedFomCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  }
}

const allBooksRemovedFomCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  }
}

export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedFomCart,
  allBooksRemovedFomCart
};

