import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Modal from "react-native-modal";
import * as ImagePicker from "expo-image-picker";
import { Calendar } from "react-native-calendars";

import styles, { PRIMARY_COLOR, WHITE } from "../../../assets/styles";
import MainHeading from "../../../components/text/MainHeading";
import AppTextInput from "../../../components/input/AppTextInput";
import MainButton from "../../../components/buttons/MainButton";
import { Icon } from "../../../components";
import TextButton from "../../../components/buttons/TextButton";
import { AuthStackParamList } from "../../../types";
import ErrorMessage from "../../../components/errors/ErrorMessage";
import AppImagePicker from "../../../components/input/AppImagePicker";
import { http } from "../../../services/httpService";
import AppDropdown from "../../../components/input/AppDropdown";

interface IProps {}

declare global {
  interface CustomFormDataValue {
    uri: string | undefined;
    name: string | undefined;
    type: string;
  }

  interface FormData {
    append(name: string, value: CustomFormDataValue, fileName?: string): void;
    set(name: string, value: CustomFormDataValue, fileName?: string): void;
  }
}

const ProfileDetails: React.FC<IProps> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [image, setImage] = useState<ImagePicker.ImageInfo>();
  const [joiningAnswer, setJoiningAnswer] = useState(
    "Why did you join the Village App?"
  );
  const [showJoiningDd, setShowJoiningDd] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState({});
  const [errors, setErrors] = useState<string[]>([]);

  const joiningQuestions = [
    "Looking to connect with Founders",
    "Looking to connect with Investors",
    "Looking to connect with Engineers",
    "I attended Founders Night!",
  ];

  const navigator = useNavigation();
  const route =
    useRoute<RouteProp<AuthStackParamList, "ProfileDetailScreen">>();

  const getSelectedDayEvents = (date: any) => {
    let markedDates: any = {};
    markedDates[date] = {
      selected: true,
      color: PRIMARY_COLOR,
    };
    setDateOfBirth(date);
    setSelectedDate(markedDates);
  };

  const validate = (): boolean => {
    let isValid = true;
    const err = [];

    if (firstName.trim().length === 0) {
      err.push("First Name is required.");
      isValid = false;
    }
    if (lastName.trim().length === 0) {
      err.push("Last Name is required.");
      isValid = false;
    }
    if (dateOfBirth.trim().length === 0) {
      err.push("Date of Birth is required.");
      isValid = false;
    }
    if (address.trim().length === 0) {
      err.push("Address is required.");
      isValid = false;
    }
    if (companyName.trim().length === 0) {
      err.push("Company Name is required.");
      isValid = false;
    }
    if (linkedInProfile.trim().length === 0) {
      err.push("Linkedin Profile is required.");
      isValid = false;
    }

    setErrors(isValid ? [] : err);
    return isValid;
  };

  const handleNextPress = async () => {
    if (validate()) {
      await uploadAvatar();
    }
  };

  const uploadAvatar = async () => {
    if (image?.uri) {
      const formData = new FormData();

      let localUri = image.uri;
      let filename = localUri.split("/").pop();
      let match = /\.(\w+)$/.exec(filename!);
      let type = match ? `image/${match[1]}` : `image`;

      formData.append("avatar", { uri: localUri, name: filename, type });

      try {
        const result = await http.post("/api/profile/avatar", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        navigateToNextScreen(result.data);
      } catch (error) {}
    } else {
      navigateToNextScreen("");
    }
  };

  const navigateToNextScreen = (userAvatar: string) => {
    navigator.navigate("GenderEntryScreen", {
      userId: route.params.userId,
      password: route.params.password,
      email: route.params.email,
      mobile: route.params.mobile,
      avatar: userAvatar,
      firstName,
      lastName,
      dateOfBirth,
      address,
      companyName,
      companyWebsite,
      linkedInProfile,
    });
  };

  const handleShowJoiningDropdown = () => {
    setShowJoiningDd(true);
  };

  const handleHideJoiningDropdown = () => {
    setShowJoiningDd(false);
  };

  const handleJoiningDdSelection = (index: number) => {
    setJoiningAnswer(joiningQuestions[index]);
    setShowJoiningDd(false);
  };

  return (
    <View style={[styles.top, style.container]}>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.skipButton}>
          <TextButton text="Skip" onPress={() => navigator.navigate("Main")} />
        </View>
        <MainHeading text="Profile Details" />
        <View style={style.userImageContainer}>
          <AppImagePicker
            imageUri={image?.uri}
            onChangeImage={(result) => setImage(result)}
          />
        </View>
        <AppTextInput
          autoCapitalize="sentences"
          placeholder="First Name"
          style={{ marginTop: 32 }}
          value={firstName}
          onChangeText={(text: string) => setFirstName(text)}
        />
        <AppTextInput
          autoCapitalize="sentences"
          placeholder="Last Name"
          style={{ marginTop: 15 }}
          value={lastName}
          onChangeText={(text: string) => setLastName(text)}
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
        <AppTextInput
          placeholder="Full Address"
          style={{ marginTop: 15 }}
          value={address}
          onChangeText={(text: string) => setAddress(text)}
        />
        <AppTextInput
          placeholder="Company Name"
          style={{ marginTop: 15 }}
          value={companyName}
          onChangeText={(text: string) => setCompanyName(text)}
        />
        <AppTextInput
          autoCapitalize="none"
          keyboardType="url"
          placeholder="Company Website"
          style={{ marginTop: 15 }}
          value={companyWebsite}
          onChangeText={(text: string) => setCompanyWebsite(text)}
        />
        <AppTextInput
          autoCapitalize="none"
          keyboardType="url"
          placeholder="Linked in Profile"
          style={{ marginTop: 15 }}
          value={linkedInProfile}
          onChangeText={(text: string) => setLinkedInProfile(text)}
        />
        <AppDropdown
          primaryText={joiningAnswer}
          dropdownValues={joiningQuestions}
          visible={showJoiningDd}
          showMenu={handleShowJoiningDropdown}
          hideMenu={handleHideJoiningDropdown}
          onSelection={handleJoiningDdSelection}
          styles={{ marginTop: 15 }}
        />
        {errors.length > 0 && <ErrorMessage errors={errors} />}
        <MainButton
          text="Confirm"
          style={{ marginTop: "25%", marginBottom: "15%" }}
          onPress={handleNextPress}
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
      </ScrollView>
    </View>
  );
};

export default ProfileDetails;

const style = StyleSheet.create({
  container: {
    flex: 1,
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
