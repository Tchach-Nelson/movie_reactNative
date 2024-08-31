import React, { useEffect, useRef, useState } from 'react';
import { Image, StatusBar, Text, View, Dimensions, Button} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Icon, Icons } from '../components';

function Notification({navigation}) {

    // const route = useRoute();
    // const [color, setColor] = useState('');
    // // const currentPage ;
    // useEffect(() => {
    //     const currentRoute = route.name; 

    //     if(currentRoute == "")
    //     setColor('#d8a037');
    //     // console.log('Current screen: ', currentRoute);
    // }, [navigation]);

    return (
        <View backgroundColor='rgba(17, 52, 61, 0.7)'>
            <View style={{height:"87%"}}>
            <Text>Notif</Text>
            </View>
            <View style={{marginLeft:"8%", width:"85%", marginBottom: 20, backgroundColor:'rgba(0, 0, 0, 0.4)', height:"10%", borderRadius: 20,  padding: 20, paddingLeft: 40, paddingRight:40, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }} >
                <Text onPress={() => navigation.navigate("MyHome")} style={{ height:"200%",width:40, paddingTop:20, textAlign:'center'}}>
                    <Icon type={Icons.Fontisto} name="film" size={22} color={"rgba(255, 255, 255, 0.4)"} />            
                </Text>
                <Text onPress={() => navigation.navigate("Recherche")} style={{ height:"200%",width:40, paddingTop:20, textAlign:'center'}}>
                    <Icon type={Icons.AntDesign} name="search1" size={22} color={"rgba(255, 255, 255, 0.4)"} />            
                </Text>
                <Text style={{ height:"200%",width:40, paddingTop:20, textAlign:'center'}} >
                    <Icon type={Icons.Ionicons} name="ticket-outline" size={22} color={"rgba(255, 255, 255, 0.4)"} />            
                </Text>
                <Text onPress={() => navigation.navigate("Notification")} style={{ height:"200%",width:40, paddingTop:20, textAlign:'center'}}>
                    <Icon  type={Icons.Ionicons} name="notifications-outline" size={22} color={"#d8a037"} />            
                </Text>
                <Text style={{ height:"200%",width:40, paddingTop:20, textAlign:'center'}}>
                    <Icon type={Icons.Feather} name="user" size={22} color={"rgba(255, 255, 255, 0.4)"} />            
                </Text>
            </View>
        </View>
    )
}

export default Notification