import React, { useState, useEffect } from "react";
import { Autocomplete, Box, Grid, Typography, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTagsAction, getReportAction } from "../Action/Action";
const StackOverFlowData = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ScrapReducer.Tags.data);
  const ReportData = useSelector((state) => state.ScrapReducer.ReportData.data);
  console.log(ReportData, "state");
  useEffect(() => {
    dispatch(getTagsAction());
  }, [dispatch]);

  const getReport = (name) => {
    dispatch(getReportAction(name));
  };
  return (
    <Box>
      <Typography sx={{ textAlign: "center", mt: 2 }}>
        Scrape data from the Stack Overflow websiteScrape data from the Stack
        Overflow website
      </Typography>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Grid container sx={{ width: "80vw", height: "85vh" }} spacing={3}>
          <Grid
            xs={6}
            item
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "whitesmoke",
            }}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={state}
              getOptionLabel={(option) => option.name}
              sx={{ width: 250 }}
              size="small"
              onChange={(e, value) => getReport(value.name)}
              renderInput={(params) => (
                <TextField {...params} label="Program" />
              )}
            />
          </Grid>
          <Grid
            xs={6}
            item
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "whitesmoke",
            }}
          >
            <Box sx={{ mt: 10 }}>
              {ReportData.totalQuestion ? (
                <Box>
                  <Typography sx={{ mt: 3 }}>
                    {" "}
                    Total No Of Question : {ReportData.totalQuestion}
                  </Typography>
                  <Typography sx={{ mt: 3 }}>
                    Total No Of Votes : {ReportData.totalVotes}
                  </Typography>
                  <Typography sx={{ mt: 3 }}>
                    Total No Of Views : {ReportData.totalViews}
                  </Typography>
                </Box>
              ) : (
                <Typography>No data Found</Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StackOverFlowData;
