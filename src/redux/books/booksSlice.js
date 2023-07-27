import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLn0NaIlPBg5qEjBlFbQ/books';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

// Action creator that fetches books
export const fetchBooks = createAsyncThunk('books/fetchBooks', async (thunkAPI) => {
  try {
    // Fetch API
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`There was an error: ${error}`);
  }
});

// Action creator that adds a book to the API
export const addBookAsync = createAsyncThunk('books/addBookAsync', async (newBook, thunkAPI) => {
  try {
    const response = await axios.post(url, newBook);
    thunkAPI.dispatch(fetchBooks());
    return response.newBook;
  } catch (error) {
    return thunkAPI.rejectWithValue(`There was an error: ${error}`);
  }
});

// Action creator that removes a book from the API
export const removeBookAsync = createAsyncThunk('books/removeBookAsync', async (itemId, thunkAPI) => {
  try {
    const response = await axios.delete(`${url}/${itemId}`);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`There was an error: ${error}`);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const booksArray = action.payload;
        state.isLoading = false;
        state.books = booksArray;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBookAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBookAsync.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBookAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBookAsync.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBookAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default booksSlice.reducer;
