import { View } from "react-native";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Index() {
  const [bgColorUI, setBgColorUI] = useState("#9c634f");
  const [fontColor, setFontColor] = useState("white");
  const [bgColorMain, setBgColorMain] = useState("#eee1ba");
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", backgroundColor: bgColorMain }}
    >
      <Header bgColor={bgColorUI} fontColor={fontColor} />
      <Footer bgColor={bgColorUI} fontColor={bgColorMain} bgColorMain={bgColorMain} />
    </View>
  );
}
