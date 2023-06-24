import {
  YoutubeShort,
  YoutubeSubscribe,
  YoutubeLibrary,
  HistoryVideo,
  MyVideo,
  ViewLater,
  LikedVideo,
  MoreIcon,
  YoutubeHome,
} from "../components/icons";

export const sidebar = [
  { name: "Trang chủ", icon: <YoutubeHome /> , param : "/" },
  { name: "Shorts", icon: <YoutubeShort /> , param : "/" },
  { name: "Kênh đăng ký", icon: <YoutubeSubscribe />, param: "/subscriptions" },
  { name: "Thư viện", icon: <YoutubeLibrary />, param: "/library" },
  { name: "Video đã xem", icon: <HistoryVideo />, param: "/history" },
  { name: "Video của bạn", icon: <MyVideo />, param: "/" },
  { name: "Xem sau", icon: <ViewLater /> , param : "/" },
  { name: "Video đã thích", icon: <LikedVideo />, param: "likedVideos" },
  { name: "Thêm", icon: <MoreIcon /> , param : "/"},
];

export const navChannel = [
  { name : "Trang chủ" } ,
  { name : "Video" } ,
  { name : "Sự kiện phát trực tiếp" } ,
  { name : "Danh sách phát" } ,
  { name : "Cộng đồng" } ,
  { name : "Kênh" } ,
  { name : "Giới thiệu"} ,
]

export const categories = [
  {
    name: "All",
  },
  {
    name: "Playlist",
  },
  {
    name: "Music",
  },
  {
    name: "Live",
  },
  {
    name: "Game",
  },
  {
    name: "Travel",
  },
  {
    name: "Math",
  },
  {
    name: "News",
  },
  {
    name: "Nature",
  },
  {
    name: "Cartoon",
  },
];

export const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelId = "UCV7qWy2FoFZ4v4p1x_R-n3Q";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "Trung Hiếu";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

export const demoAvatarUrl = '' 
