import { createSlice } from "@reduxjs/toolkit";
import { getTagsAction,getReportAction } from "../Action/Action";
const initialState = {
  Tags: {
    data: [],
    isLoading: false,
    isSucess: false,
    errorMessage: "",
  },
  ReportData: {
    data: {},
    isLoading: false,
    isSucess: false,
    errorMessage: "",
  },
 
};

export const ScrapReducer = createSlice({
  name: "scrapData",
  initialState,
  reducers: {
  
  },
  extraReducers: {
  
    [getTagsAction.rejected]: (state, { payload }) => {
      state.Tags.isLoading = false;
      state.Tags.isSucess = false;
      state.Tags.errorMessage = payload
    },
    [getTagsAction.fulfilled]: (state, { payload }) => {
      console.log(payload,"payload")
      state.Tags.isLoading = false;
      state.Tags.isSucess = true;
      state.Tags.data =  payload.items;
    },

    [getReportAction.rejected]: (state, { payload }) => {
      state.ReportData.isLoading = false;
      state.ReportData.isSucess = false;
      state.ReportData.errorMessage = payload
    },

    [getReportAction.fulfilled]: (state, { payload }) => {
      state.ReportData.isLoading = false;
      state.ReportData.isSucess = true;
      const questions = payload.items;
      const totalQuestions = questions.length;
      const totalVotes = questions.reduce((total, question) => total + question.score, 0);
      const totalViews = questions.reduce((total, question) => total + question.view_count, 0);
      state.ReportData.data =  {
        totalQuestion :totalQuestions,
        totalVotes: totalVotes,
        totalViews : totalViews
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
 
} = ScrapReducer.actions;

export default ScrapReducer.reducer;

// getCartList

