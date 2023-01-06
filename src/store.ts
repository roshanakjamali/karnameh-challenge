import { configureStore } from '@reduxjs/toolkit';

import answerReducer from './features/answersSlice';

export default configureStore({
  reducer: {
    answers: answerReducer,
  },
});
