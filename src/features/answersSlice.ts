import { createSlice } from '@reduxjs/toolkit';
import { AnswerProps } from '../components/question/answerBox';

export interface initialAnswerStateProps {
  list: { [key: string]: { like: number; dislike: number } };
  count: number;
}

const initialState: initialAnswerStateProps = {
  list: {},
  count: 0,
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswers: (
      state,
      action: {
        payload: { answer: AnswerProps };
        type: string;
      }
    ) => {
      state.list[action.payload.answer.id] = {
        like: action.payload.answer.like,
        dislike: action.payload.answer.dislike,
      };
      state.count += 1;
    },
    setAnswers: (
      state,
      action: {
        payload: { answers: AnswerProps[] };
        type: string;
      }
    ) => {
      const list = state.list;
      for (let answer of action.payload.answers) {
        if (!list[answer.id]) {
          state.list[answer.id] = {
            like: answer.like,
            dislike: answer.dislike,
          };
        }
      }
      state.count = action.payload.answers.length;
    },
    likeAnswer: (
      state,
      action: {
        payload: { answerId: string };
        type: string;
      }
    ) => {
      state.list[action.payload.answerId].like += 1;
    },
    disLikeAnswer: (
      state,
      action: {
        payload: { answerId: string };
        type: string;
      }
    ) => {
      state.list[action.payload.answerId].dislike += 1;
    },
  },
});

export const { setAnswers, addAnswers, likeAnswer, disLikeAnswer } =
  answersSlice.actions;
export default answersSlice.reducer;
