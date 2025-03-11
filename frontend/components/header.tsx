import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = ({ bgColor = "", fontColor = "" }) => (
  <Appbar.Header
    mode="small"
    // elevated={true}
    style={{ backgroundColor: bgColor }}
  >
    <Appbar.Content title="Knead to Know" color={fontColor} />
    <Appbar.Action color={fontColor} icon="magnify" onPress={() => {}} />
    <Appbar.Action color={fontColor} icon="dots-vertical" onPress={() => {}} />
  </Appbar.Header>
);

export default Header;

