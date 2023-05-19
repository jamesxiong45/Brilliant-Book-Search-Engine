import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    me{
        _id
        username
        email 
        bookCount
        savedBooks {
            authors 
            description
            bookId 
            image 
            link 
            title 
        }
    }
}
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        // Include the fields you need for the saved books
        _id
        title
        authors
        description
        image
      }
    }
  }
`;