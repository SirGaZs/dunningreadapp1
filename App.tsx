const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IPhone13Mini from "./screens/IPhone13Mini";
import FrameImage from "./components/FrameImage";
import IPhone13Mini1 from "./screens/IPhone13Mini1";
import Frame from "./screens/Frame";
import MaskGroup from "./screens/MaskGroup";
import MaskGroup1 from "./screens/MaskGroup1";
import IPhone13Mini2 from "./screens/IPhone13Mini2";
import IPhone13Mini3 from "./screens/IPhone13Mini3";
import Frame1 from "./screens/Frame1";
import Frame2 from "./screens/Frame2";
import Frame3 from "./screens/Frame3";
import PolygonComponent from "./components/PolygonComponent";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="IPhone13Mini"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="IPhone13Mini"
              component={IPhone13Mini}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini1"
              component={IPhone13Mini1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MaskGroup"
              component={MaskGroup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MaskGroup1"
              component={MaskGroup1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini2"
              component={IPhone13Mini2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini3"
              component={IPhone13Mini3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <IPhone13Mini2 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
