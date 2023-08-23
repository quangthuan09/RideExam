import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  Image,
} from "react-native";
import React, { useCallback, useLayoutEffect } from "react";
import { useAppNavigation } from "../../hooks/navigation";
import { useAppTranslation } from "../../translations";
import { MAP_FEATURE_HOME, ScreenWidth } from "../../helper/constant";
import { TItemFeater } from "../../@types/home";
import { Colors, S16, S8 } from "../../theme";
import { Icon } from "@rneui/themed";
const Home = () => {
  const navigation = useAppNavigation();
  const { t } = useAppTranslation();
  const _gotoSetting = () => {
    navigation.navigate("Main", {
      screen: "Setting",
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "500 câu hỏi bằng lái a3",
      headerRight: () => {
        return (
          <View>
            <Icon name="g-translate" color="red" />
          </View>
        );
      },
    });
  }, []);
  const _renderItem: ListRenderItem<TItemFeater> = useCallback(
    ({ item, index }) => {
      return (
        <TouchableOpacity
          style={[
            styles.item,
            {
              backgroundColor: item.backgroundColor,
            },
          ]}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      );
    },
    []
  );
  return (
    <>
      <FlatList
        style={styles.container}
        data={MAP_FEATURE_HOME}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: Colors.white,
    paddingTop: S8,
  },
  contentContainer: {
    paddingBottom: 100,
    paddingTop: S8,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    margin: S8 / 2,
    flex: 1,
    padding: S16,
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
});
