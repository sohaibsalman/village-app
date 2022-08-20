import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import Modal from "react-native-modal";

import { Message } from "../components";
import DEMO from "../assets/data/demo";
import styles from "../assets/styles";
import UserAvatar from "../components/UserAvatar";
import Chat from "./Chat";

const Messages = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>('');

  const onMessagePress = (userId: string) => {
    setSelectedUser(userId.toString());
    setShowModal(true);
  }

  return <ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
  >
    <View style={styles.top}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.title}>New Matches</Text>
        <FlatList
          data={DEMO}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <TouchableOpacity>
              <UserAvatar image={item.image} name={item.name} />
            </TouchableOpacity>
          }}
        />
      </View>
    </View>
    <View style={styles.containerMessages}>
      <View style={{ paddingTop: 25 }}>
        <Text style={styles.title}>Messages</Text>
      </View>

      <FlatList
        data={DEMO}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            onMessagePress(item.id.toString())
          }}>
            <Message
              image={item.image}
              name={item.name}
              lastMessage={item.message}
            />
          </TouchableOpacity>
        )}
      />
    </View>
    <Modal
      style={{ margin: 0 }}
      propagateSwipe
      isVisible={showModal}
      backdropOpacity={0.5}
      // swipeDirection="down"
      // onSwipeComplete={() => setShowModal(false)}
      onBackButtonPress={() => setShowModal(false)}
    >
      <Chat
        userId={selectedUser}
      />
    </Modal>
  </ImageBackground>
};

export default Messages;
