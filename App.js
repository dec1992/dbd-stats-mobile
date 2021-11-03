import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // if (!isReady)
  //   return (
  //     <AppLoading onFinish={() => setIsReady(true)} onError={console.warn} />
  //   );

  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
