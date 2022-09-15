import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import styles, { TEXT_LIGHT } from "../../../assets/styles";
import MainButton from "../../../components/buttons/MainButton";
import AppRadioItem from "../../../components/input/AppRadioItem";
import MainHeading from "../../../components/text/MainHeading";
import { http } from "../../../services/httpService";
import { storeData } from "../../../services/localStorageService";
import { AuthStackParamList } from "../../../types";

interface IProps {}

const AreasOfInterest: React.FC<IProps> = () => {
  const allInterests = [
    "Photography",
    "Shopping",
    "Karaoke",
    "Yoga",
    "Cooking",
    "Tennis",
    "Run",
    "Swimming",
    "Art",
    "Traveling",
    "Extreme",
    "Music",
    "Drink",
    "Video games",
  ];

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const navigator = useNavigation();
  const route =
    useRoute<RouteProp<AuthStackParamList, "AreasOfInterestScreen">>();

  const handleNext = async () => {
    const signupReq = {
      userId: route.params.userId,
      password: route.params.password,
      email: route.params.email ? route.params.email : "",
      mobileNumber: route.params.mobile ? route.params.mobile : "",
      firstName: route.params.firstName,
      lastName: route.params.lastName,
      dateOfBirth: route.params.dateOfBirth,
      address: route.params.address,
      companyName: route.params.companyName,
      companyWebsite: route.params.companyWebsite,
      linkedInProfile: route.params.linkedInProfile,
      avatar: route.params.avatar,
      gender: route.params.gender,
      areasOfInterest: selectedInterests,
    };

    try {
      const res = await http.post("api/users/signup", signupReq);
      storeData("access_token", res.data.access_token);
      navigator.navigate("Main");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInterestSelection = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      const interests = [...selectedInterests];
      const index = interests.indexOf(interest);
      interests.splice(index, 1);
      setSelectedInterests(interests);
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <View style={[styles.top, style.container]}>
      <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
        <MainHeading text="Your Interests" />
        <Text style={style.subText}>
          Select a few of your interests and let everyone know what you're
          passionate about.
        </Text>
        <View style={style.grid}>
          {allInterests.map((interest, index) => {
            return (
              <AppRadioItem
                key={index}
                text={interest}
                onPress={() => {
                  handleInterestSelection(interest);
                }}
                selected={selectedInterests.includes(interest)}
                styles={style.radioButtons}
              />
            );
          })}
        </View>
        <MainButton text="Continue" onPress={handleNext} style={style.button} />
      </ScrollView>
    </View>
  );
};

export default AreasOfInterest;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  scrollView: { width: "100%", paddingHorizontal: 30 },
  subText: {
    color: TEXT_LIGHT,
    marginTop: 5,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 40,
    marginBottom: 60,
  },
  radioButtons: {
    width: "45%",
    marginVertical: 5,
    marginHorizontal: 8,
  },
  button: {
    marginBottom: 30,
  },
});
