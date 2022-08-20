import React from 'react';
import { Text, View } from 'react-native';
import styles, { GRAY, WHITE } from '../assets/styles';

import { ChatMessage } from '../types';
import { formatAMPM } from '../utlils/utils';

interface IProps {
    message: ChatMessage,
}

const MessageBox: React.FC<IProps> = ({ message }) => {
    const addStyle = message.isSent ? styles.sentMessage : styles.receivedMessage;
    const timeStyle = message.isSent ? styles.selfAlignEnd : styles.selfAlignStart;
    return <View>
        <View style={[styles.messageBox, addStyle]}>
            <Text style={{ color: WHITE }}>
                {message.text}
            </Text>
        </View>
        <Text style={[timeStyle, { marginVertical: 5, marginHorizontal: 5, fontSize: 12, color: GRAY }]}>{formatAMPM(message.timestamp)}</Text>
    </View>
}

export default MessageBox;