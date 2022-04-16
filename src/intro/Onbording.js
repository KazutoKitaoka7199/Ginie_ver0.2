import {View, StyleSheet, FlatList, Animated} from "react-native";
import React, {useState, useRef} from "react";
import {Ionicons} from "@expo/vector-icons";

import OnbordingItem from "./OnbordingItem";
import Slides from "./Slides";
import Pagenator from "./Pagenator";
import BackButton from "./BackButton";

export default function Onbording() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <Ionicons
          name="chevron-back-circle"
          size={60}
          color="gray"
          style={{position: "absolute", top: 30, left: 20}}
        />
        {/* <BackButton /> */}
        <FlatList
          data={Slides}
          renderItem={({item}) => <OnbordingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.key}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollx}}}],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Pagenator data={Slides} scrollx={scrollx} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
