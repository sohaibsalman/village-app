import React from 'react';
import { TextInput, View } from 'react-native';
import { GRAY } from '../assets/styles';

interface IProps { }


const ChatFooter: React.FC<IProps> = ({ }) => {
    return (
        <View style={{ position: 'relative', bottom: 20, width: '100%' }}>
            <TextInput
                style={{ borderWidth: 1, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15, borderColor: GRAY }}
                placeholder="Your message"
                multiline
                numberOfLines={2}
            />
        </View>
    );
}

export default ChatFooter;