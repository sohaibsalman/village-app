import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import styles from "../../../assets/styles";
import MainButton from "../../../components/buttons/MainButton";
import AppRadioItem from "../../../components/input/AppRadioItem";
import MainHeading from "../../../components/text/MainHeading";
import { AuthStackParamList } from "../../../types";

interface IProps {}

const GenderEntry: React.FC<IProps> = () => {
  const [gender, setGender] = useState("Woman");

  const genders = ["Woman", "Man", "Other"];

  const navigator = useNavigation();
  const route = useRoute<RouteProp<AuthStackParamList, "GenderEntryScreen">>();

  const handleNextPress = () => {
    navigator.navigate("AreasOfInterestScreen", {
      userId: route.params.userId,
      password: route.params.password,
      email: route.params.email ? route.params.email : "",
      mobile: route.params.mobile ? route.params.mobile : "",
      firstName: route.params.firstName,
      lastName: route.params.lastName,
      dateOfBirth: route.params.dateOfBirth,
      address: route.params.address,
      companyName: route.params.companyName,
      companyWebsite: route.params.companyWebsite,
      linkedInProfile: route.params.linkedInProfile,
      avatar: route.params.avatar,
      gender,
    });
  };

  return (
    <View style={[styles.top, style.container]}>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <MainHeading text="I am a" />
        <View style={style.gendersContainer}>
          {genders.map((g) => {
            return (
              <AppRadioItem
                key={g}
                text={g}
                styles={{ marginTop: 15 }}
                onPress={() => setGender(g)}
                selected={g === gender}
              />
            );
          })}
        </View>
        <MainButton
          text="Confirm"
          style={style.button}
          onPress={handleNextPress}
        />
      </ScrollView>
    </View>
  );
};

export default GenderEntry;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    marginTop: "25%",
  },
  gendersContainer: {
    marginTop: 80,
    flexGrow: 1,
    flexDirection: "column",
  },
  button: {
    marginTop: "70%",
  },
});
