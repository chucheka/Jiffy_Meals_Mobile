import React from "react";
import { Image } from "react-native";

function AppImage({ source, width, height, borderRadius, otherStyles }) {
  return (
    <Image
      style={{ width, height, borderRadius, ...otherStyles }}
      source={source}
    />
  );
}

export default AppImage;
