import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar, FAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const Footer = ({ bgColor = "", fontColor = "", bgColorMain = "" }) => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: bgColor,
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action color={fontColor} icon="archive" onPress={() => {}} />
      <Appbar.Action color={fontColor} icon="email" onPress={() => {}} />
      <Appbar.Action color={fontColor} icon="label" onPress={() => {}} />
      <Appbar.Action color={fontColor} icon="delete" onPress={() => {}} />
      <FAB
        mode="flat"
        size="medium"
        icon="plus"
        onPress={() => {}}
        style={[
          styles.fab,
          { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2, backgroundColor: bgColorMain },
        ]}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "#9c634f",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: "absolute",
    right: 16,
  },
});

export default Footer;
