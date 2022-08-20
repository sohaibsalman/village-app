import React from 'react'
import { Image, Text, View } from 'react-native';

import styles, { GRAY } from "../assets/styles";

interface IProps {
    image: any,
    name?: string,
    isOnline?: boolean,
}

const UserAvatar: React.FC<IProps> = ({ image, name, isOnline }) => {
    return (<View>
        <Image source={image} style={[styles.avatar, { marginRight: 10, marginLeft: 10, marginTop: 0 }]} />
        {
            name ? (
                <Text style={{ textAlign: 'center', marginTop: -8, color: GRAY }}>{name.split(" ")[0]}</Text>
            ) : null
        }
    </View>);
}

export default UserAvatar;