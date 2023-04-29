import { configureStore } from "@reduxjs/toolkit";
import ScrapReducer from "../reducer/ScrapReducer";

console.log(ScrapReducer,"scrapReducer")

 const Store = configureStore({
  reducer: {
    ScrapReducer: ScrapReducer,
  },
});
export default Store