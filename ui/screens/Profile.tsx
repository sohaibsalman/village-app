import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";
import { useNavigation } from "@react-navigation/native";

import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import { removeData } from "../services/localStorageService";

const Profile = () => {
  const [visible, setVisible] = useState(false);

  const navigator = useNavigation();

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const handleSignOut = async () => {
    await removeData("access_token");
    hideMenu();
    navigator.navigate("SplashScreen");
  };

  const { age, image, info1, info2, info3, info4, location, match, name } =
    DEMO[7];

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Icon
                name="chevron-back"
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <Menu
              visible={visible}
              onRequestClose={hideMenu}
              anchor={
                <TouchableOpacity onPress={showMenu}>
                  <Icon
                    name="ellipsis-vertical"
                    size={20}
                    color={WHITE}
                    style={styles.topIconRight}
                  />
                </TouchableOpacity>
              }
            >
              <MenuItem onPress={handleSignOut}>Sign out</MenuItem>
            </Menu>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Icon name="ellipsis-horizontal" size={20} color={WHITE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="chatbubble" size={20} color={WHITE} />
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
