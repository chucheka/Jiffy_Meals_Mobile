import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { colors } from "../config/config";

const CusineCarousel = ({ data }) => {
  const [active, setActive] = useState(0);

  const change = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );

      if (slide !== active) {
        setActive(slide);
      }
    }
  };

  const images = data.map((c) => c.image);

  return (
    <View style={styles.wrap}>
      <ScrollView
        onScroll={({ nativeEvent }) => change(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
      >
        {images.map((e, index, images) => (
          <ImageBackground
            key={e}
            resizeMode="stretch"
            style={styles.wrap}
            source={e}
          >
            <View
              style={[
                styles.wrap,
                {
                  backgroundColor: colors.overlayColor,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={{ color: colors.light, fontSize: 18 }}>
                {data[index].name}
              </Text>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={styles.wrapDot}>
        {images.map((e, index) => (
          <Text
            key={e}
            style={active === index ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.28,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    margin: 3,
    color: colors.dark,
  },
});

export default CusineCarousel;
