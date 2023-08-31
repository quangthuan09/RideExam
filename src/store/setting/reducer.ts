import { createAction, createSlice } from '@reduxjs/toolkit';
import { TTopic } from './type';

type TInitialState = {
  topics?: Array<TTopic>;
  topicsChoose: TTopic;
};

const initialState: TInitialState = {
  topicsChoose: {
    id: 'QTinZURgM1XVGWc4cNSK',
    name: 'Bằng A1',
    type: 'A1',
    description: 'Xe mô tô hai bánh có dung tích xy lanh dưới 175 cm3',
  },
};

export const setTopics = createAction('SETTING/SET_DATA', (data) => ({
  payload: {
    topics: data,
  },
}));

export const setTopicChoose = createAction('SETTING/SET_DATA_CHOOSE', (topic: TTopic) => ({
  payload: {
    topicsChoose: topic,
  },
}));

export const setting = createSlice({
  name: 'setting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTopics, (state, { payload }) => {
      state.topics = payload.topics;
    });
    builder.addCase(setTopicChoose, (state, { payload }) => {
      state.topicsChoose = payload.topicsChoose;
    });
  },
});

export default setting.reducer;
