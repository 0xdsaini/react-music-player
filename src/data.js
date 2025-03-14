import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Sunrise Serenade",
      cover: "/images/sunrise-serenade.png",
      artist: "Harmony Harp",
      audio: "/songs/jawan-preview-theme.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Urban Groove",
      cover: "/images/urban-groove.png",
      artist: "Beatmaster B",
      audio: "/songs/soundhelix-song-10.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mystic Echo",
      cover: "/images/mystic-echo.png",
      artist: "Harmony Harp",
      audio: "/songs/jawan-preview-theme.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Electro Vibes",
      cover: "/images/electro-vibes.png",
      artist: "Synthwave Sensation",
      audio: "/songs/zinda-banda.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jazzy Whispers",
      cover: "/images/jazzy-whispers.png",
      artist: "Smooth Sax Serenade",
      audio: "/songs/soundhelix-song-10.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tropical Breez",
      cover: "/images/tropical-breez.png",
      artist: "Island Rhythms",
      audio: "/songs/zinda-banda.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
