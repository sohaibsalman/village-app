import React from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import { Message } from "../components";
import DEMO from "../assets/data/demo";
import styles from "../assets/styles";
import UserAvatar from "../components/UserAvatar";

const Messages = () => (
  <ImageBackground
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
          <TouchableOpacity>
            <Message
              image={item.image}
              name={item.name}
              lastMessage={item.message}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </ImageBackground>
);

export default Messages;
