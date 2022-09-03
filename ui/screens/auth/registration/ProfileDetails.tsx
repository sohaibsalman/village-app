import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";

import styles, { PRIMARY_COLOR, WHITE } from "../../../assets/styles";
import MainHeading from "../../../components/text/MainHeading";
import AppTextInput from "../../../components/input/AppTextInput";
import MainButton from "../../../components/buttons/MainButton";
import { Icon } from "../../../components";
import TextButton from "../../../components/buttons/TextButton";
import { useNavigation } from "@react-navigation/native";

interface IProps {}

const ProfileDetails: React.FC<IProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState({});
  const [dateOfBirth, setDateOfBirth] = useState("");

  const navigator = useNavigation();

  const getSelectedDayEvents = (date: any) => {
    let markedDates: any = {};
    markedDates[date] = {
      selected: true,
      color: PRIMARY_COLOR,
    };
    setDateOfBirth(date);
    setSelectedDate(markedDates);
  };

  return (
    <View style={[styles.top, style.container]}>
      <View style={style.skipButton}>
        <TextButton text="Skip" onPress={() => navigator.navigate("Main")} />
      </View>
      <MainHeading text="Profile Details" />
      <View style={style.userImageContainer}>
        <Image
          style={style.userImage}
          source={require("../../../assets/images/05.jpg")}
        />
      </View>
      <AppTextInput
        autoCapitalize="sentences"
        placeholder="First Name"
        style={{ marginTop: 32 }}
      />
      <AppTextInput
        autoCapitalize="sentences"
        placeholder="Last Name"
        style={{ marginTop: 15 }}
      />
      <TouchableOpacity
        style={style.datePicker}
        activeOpacity={0.7}
        onPress={() => setShowModal(true)}
      >
        <Icon name="calendar-outline" color={PRIMARY_COLOR} size={20} />
        <Text style={style.datePickerText}>
          {dateOfBirth ? dateOfBirth : "Choose birthday date"}
        </Text>
      </TouchableOpacity>
      <MainButton
        text="Confirm"
        style={{ marginTop: "25%" }}
        onPress={() => navigator.navigate("Main")}
      />

      <Modal
        style={style.modal}
        propagateSwipe
        isVisible={showModal}
        backdropOpacity={0.5}
        onBackButtonPress={() => setShowModal(false)}
      >
        <View style={style.modalContainer}>
          <Calendar
            hideDayNames
            hideExtraDays
            markedDates={selectedDate}
            onDayPress={(date) => {
              getSelectedDayEvents(date.dateString);
            }}
          />
          <MainButton
            text="Save"
            style={{ marginTop: 20 }}
            onPress={() => setShowModal(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ProfileDetails;

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    marginTop: "5%",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  userImageContainer: {
    alignSelf: "center",
    marginTop: "25%",
    marginBottom: 25,
  },
  datePicker: {
    flexDirection: "row",
    backgroundColor: "rgba(233, 64, 87, 0.1)",
    width: "100%",
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
  },
  datePickerText: {
    color: PRIMARY_COLOR,
    marginLeft: 10,
  },
  skipButton: {
    position: "relative",
    left: "90%",
  },
  modal: {
    margin: 0,
    height: "50%",
  },
  modalContainer: {
    backgroundColor: WHITE,
    height: "65%",
    marginTop: "auto",
    paddingTop: "12%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 30,
  },
});