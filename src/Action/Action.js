import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
 
export const getTagsAction = createAsyncThunk('scrapData/getTagsAction', async (page,{ rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow`);
    console.log(data,"resData")
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const getReportAction = createAsyncThunk('scrapData/getReportAction ', async (value,{ rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.stackexchange.com/2.3/questions?order=desc&sort=votes&tagged=${value}&site=stackoverflow&filter=withbody`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })
  
