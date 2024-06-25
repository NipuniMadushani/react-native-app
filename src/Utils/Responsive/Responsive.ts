import { Dimensions, PixelRatio } from "react-native";
const {width, height} = Dimensions.get('screen');

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const widthBaseScale: number = SCREEN_WIDTH / 350;
const heightBaseScale: number = SCREEN_HEIGHT / 680;

function normalize(size: number, based: "width" | "height" = "width"): number {
  const newSize = based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const heightPixel = (size: number): number => {
  return normalize(size, "height");
};

// responsive fontPixel
export const fontPixel = (size: number): number => {
  return heightPixel(size);
};

// responsive width
export const getWidthBasedDimension = (): number => {
  return Dimensions.get("window").width;
};

// responsive height
export const getHeightBasedDimension = (): number => {
  return Dimensions.get("window").height;
};


export const screenWidth = Dimensions.get("window").width;