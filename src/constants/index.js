import { color } from "three/examples/jsm/nodes/Nodes.js";
import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  viewportFirstImage,
  viewportSecondImage,
  viewportThirdImage,
  viewportFourthImage,
  viewportFifthImage,
  viewportSixthImage,
  viewportSeventhImage,
} from "../utils";

export const navLists = ["Store", "Model 3", "Model Y", "Cybertruck"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Go up to 341 miles (EPA est.)",
      "On a single charge with updated exterior styling optimized",
      "For maximum aerodynamics.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["All-New Interior.", "Settle into an all-new interior"],
    video: highlightSecondVideo,
    videoDuration: 2,
  },
  {
    id: 3,
    textLists: [
      "Upgraded Wheels",
      "Enjoy new styling,",
      "Increased range and less noise.",
    ],
    video: highlightThirdVideo,
    videoDuration: 5,
  },
  {
    id: 4,
    textLists: ["New Colors", "Ultra Red are designed to change."],
    video: highlightFourthVideo,
    videoDuration: 3,
  },
];

export const imagesSlides = [
  {
    id: 1,
    image: viewportFirstImage,
  },
  {
    id: 2,
    image: viewportSecondImage,
  },
  {
    id: 3,
    image: viewportThirdImage,
  },
  {
    id: 4,
    image: viewportFourthImage,
  },
  {
    id: 5,
    image: viewportFifthImage,
  },
  {
    id: 6,
    image: viewportSixthImage,
  },
  {
    id: 7,
    image: viewportSeventhImage,
  },
];

export const models = [
  {
    id: 1,
    title: "Pearl White Multi-Coat",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
  },
  {
    id: 2,
    title: "Deep Blue Metallic",
    color: ["#0D2259"],
  },
  {
    id: 3,
    title: "Ultra Red",
    color: ["#76131C"],
  },
  {
    id: 4,
    title: "Stealth Grey",
    color: ["#19191B"],
  },
];

export const sizes = [
  { label: 'Out', value: "small" },
  { label: 'In', value: "large" },
];