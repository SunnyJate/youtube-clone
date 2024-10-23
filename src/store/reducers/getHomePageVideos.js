import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/homePageVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`
      );

      const items = response.data.items;
      const parsedData = await parseData(items);
      const nextPageToken = response.data.nextPageToken; // Update token from response

      return {
        parsedData: [...videos, ...parsedData],
        nextPageToken: nextPageToken,
      };
    } catch (error) {
      console.error("Error fetching home page videos:", error);
      throw error;
    }
  }
);
