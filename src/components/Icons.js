import React from 'react';
import {
    AntDesign,
    EvilIcons,
    Entypo,
    Feather,
    FontAwesome,
    FontAwesome5,
    Foundation,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons
} from '@expo/vector-icons';

export const Icons = {
    AntDesign,
    EvilIcons,
    Entypo,
    Feather,
    FontAwesome,
    FontAwesome5,
    Foundation,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons
};

const Icon = ({ type, name, color, size = 24, style }) => {
    const fontSize = 24;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} size={size || fontSize} color={color} style={style} />
            )}
        </>
    )
};

export default Icon;
