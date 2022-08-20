import React from "react";
import { View } from "react-native";


import ChatHeader from "../components/ChatHeader";
import ChatFooter from "../components/ChatFooter";
import ChatBody from "../components/ChatBody";
import DEMO, { messageData } from "../assets/data/demo";
import styles from "../assets/styles";
import { ChatMessage } from "../types";

interface IProps {
    userId: string
}

const Chat: React.FC<IProps> = ({ userId }) => {
    const selectedUser = DEMO.filter(x => x.id == Number(userId))[0];
    const messages = messageData;

    return (
        <View
            style={styles.chatContainer}
        >
            <ChatHeader
                userImage={selectedUser.image}
                userName={selectedUser.name}
            />
            <ChatBody
                messages={messageData}
            />
            <ChatFooter />
        </View>
    );
};

export default Chat;
