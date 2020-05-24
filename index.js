import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
const Pressable = ({ children, ...props }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableWithoutFeedback
      {...props}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View>
        {typeof children === "function" ? children({ pressed }) : children}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Pressable;
