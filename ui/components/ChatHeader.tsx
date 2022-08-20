import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import Icon from './Icon';
import styles, { BLACK } from '../assets/styles';

interface IProps {
    userImage: any,
    userName: string,
}

const ChatHeader: React.FC<IProps> = ({ userImage, userName }) => {
    return <View style={styles.chatHeader}>
        <Image source={userImage} style={styles.avatar} />
        <View style={{ flexGrow: 1 }}>
            <Text>{userName}</Text>
            <Text>Online</Text>
        </View>
        <TouchableOpacity style={{ borderColor: BLACK }}>
            <Icon
                name="ellipsis-vertical"
                size={20}
                color={BLACK}
                style={styles.topIconRight}
            />
        </TouchableOpacity>
    </View>;
}

export default ChatHeader;