import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";
import ImageOverlay from "react-native-image-overlay";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import routes from "../navigation/routes";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  steamId: Yup.string().required().min(17).max(17).label("Steam ID"),
});

function WelcomeScreen({ navigation }) {
  const handleSubmit = async ({ steamId }) => {
    navigation.navigate(routes.STATS, steamId);
  };

  return (
    <ImageOverlay
      source={require("../../assets/images/background.jpg")}
      height={"100%"}
      overlayColor={colors.black}
      overlayAlpha={0.7}
    >
      <Screen style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
        <AppForm
          initialValues={{ steamId: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="steam"
            keyboardType="default"
            name="steamId"
            placeholder="Steam ID"
            textContentType="username"
          />
          <SubmitButton title="Search" />
        </AppForm>
      </Screen>
    </ImageOverlay>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 300,
    height: 300,
    marginLeft: 25,
  },
});

export default WelcomeScreen;
