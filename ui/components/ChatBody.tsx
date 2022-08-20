import React from 'react';
import { FlatList, View } from 'react-native';

import { ChatMessage } from '../types';
import MessageBox from './MessageBox';

interface IProps {
    messages: ChatMessage[]
}

const ChatBody: React.FC<IProps> = ({ messages }) => {
    return <View style={{ flex: 1, marginBottom: 40 }}>
        <FlatList
            inverted
            showsVerticalScrollIndicator={false}
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return <MessageBox message={item} />
            }}
        />
    </View>
}

export default ChatBody;