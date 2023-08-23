import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useAppNavigation } from "../../hooks/navigation";
import { useAppTranslation } from "../../translations";

const Home = () => {
  const navigation = useAppNavigation();
  const { t } = useAppTranslation();
  const _gotoSetting = () => {
    navigation.navigate("Main", {
      screen: "Setting",
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AppRoute</Text>
      <TouchableOpacity onPress={_gotoSetting}>
        <View
          style={{
            backgroundColor: "blue",
            width: 50,
            height: 50,
          }}></View>
      </TouchableOpacity>
      <Text>{t("hello")}</Text>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
  },
});
