import { Schema, model } from 'mongoose';
import { DATABASES } from '../constants';
import { IBook } from '../interfaces'; // Assuming your interface file is in a folder named 'interfaces'

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    index: true,
  },
  genre: {
    type: String,
    required: true,
    index: true,
  },
  publicationDate: {
    type: Date,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
    index: true,
  },
  availableCopies: {
    type: Number,
    required: true,
  },
  totalCopies: {
    type: Number,
    required: true,
  },
});

export const BookModel = model<IBook>(DATABASES.BOOK, bookSchema);
