import { createSlice } from '@reduxjs/toolkit';

export interface initialQuestionsStateProps {
  isInvalidate: number;
}

const initialState: initialQuestionsStateProps = {
  isInvalidate: -1,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    invalidateList: (state) => {
      state.isInvalidate = Date.now();
    },
  },
});

export const { invalidateList } = questionsSlice.actions;
export default questionsSlice.reducer;
