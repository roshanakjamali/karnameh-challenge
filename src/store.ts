import { configureStore } from '@reduxjs/toolkit';

import answerReducer from './features/answersSlice';
import questionsReducer from './features/questionsSlice';

export default configureStore({
  reducer: {
    answers: answerReducer,
    questions: questionsReducer,
  },
});
