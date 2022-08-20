import React from "react";
import { View } from "react-native";


import ChatHeader from "../components/ChatHeader";
import ChatFooter from "../components/ChatFooter";
import DEMO from "../assets/data/demo";
import styles from "../assets/styles";

interface IProps {
    userId: string
}

const Chat: React.FC<IProps> = ({ userId }) => {
    const selectedUser = DEMO.filter(x => x.id == Number(userId))[0];
    return (
        <View
            style={styles.chatContainer}
        >
            <ChatHeader
                userImage={selectedUser.image}
                userName={selectedUser.name}
            />
            <View style={{ flex: 1 }}></View>

            <ChatFooter />
        </View>
    );
};

export default Chat;
