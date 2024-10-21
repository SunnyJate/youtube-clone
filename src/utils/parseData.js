// This file contains the parseData function
import axios from 'axios';
import { parseVideoDuration } from './parseVideoDuration';
import { convertRawToString } from './convertRawToString';
import { timeSince } from './timeSince';

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

// const convertRawToString = (num) => {
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// };

// const timeSince = (date) => {
//   const now = new Date();
//   const secondsPast = Math.floor((now - date) / 1000);
//   if (secondsPast < 60) return `${secondsPast} seconds ago`;
//   const minutesPast = Math.floor(secondsPast / 60);
//   if (minutesPast < 60) return `${minutesPast} minutes ago`;
//   const hoursPast = Math.floor(minutesPast / 60);
//   if (hoursPast < 24) return `${hoursPast} hours ago`;
//   const daysPast = Math.floor(hoursPast / 24);
//   if (daysPast < 30) return `${daysPast} days ago`;
//   const monthsPast = Math.floor(daysPast / 30);
//   if (monthsPast < 12) return `${monthsPast} months ago`;
//   const yearsPast = Math.floor(monthsPast / 12);
//   return `${yearsPast} years ago`;
// };

export const parseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];
    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      videoIds.push(item.id.videoId);
    });

    const {
      data: { items: channelsData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet.contentDetails&id=${channelIds.join(
        ','
      )}&key=${API_KEY}`
    );
    console.log(channelsData);

    const parsedChannelsData = [];
    channelsData.forEach((channel) =>
      parsedChannelsData.push({
        id: channel.id,
        image: channel.snippet.thumbnails.default.url,
      })
    );

    const {
      data: { items: videosData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ','
      )}&key=${API_KEY}`
    );

    const parsedData = [];
    items.forEach((item, index) => {
      const { image: channelImage } = parsedChannelsData.find(
        (data) => data.id === item.snippet.channelId
      );

      if (channelImage) {
        parsedData.push({
          videoId: item.id.videoId,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
          videoViews: convertRawToString(
            videosData[index].statistics.viewCount
          ),
          videoAge: timeSince(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },
        });
      }
    });

    return parsedData;
  } catch (err) {
    console.log(err);
  }
};
