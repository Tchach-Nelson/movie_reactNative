import React from 'react'
import { Icon, Icons } from '../components';
import { Image, StatusBar, Text, View, Dimensions, Button} from 'react-native';

function NavBar({navigation}) {
  return (
    <View style={{marginLeft:"8%", width:"85%", marginBottom: 20, backgroundColor:'rgba(0, 0, 0, 0.4)', height:"10%", borderRadius: 20,  padding: 20, paddingLeft: 40, paddingRight:40, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }} >
        <Text>
            <Icon type={Icons.Fontisto} name="film" size={22} color={"#d8a037"} />            
        </Text>
        <Text>
            <Icon type={Icons.AntDesign} name="search1" size={22} color={"rgba(255, 255, 255, 0.4)"} />            
        </Text>
        <Text>
            <Icon type={Icons.Ionicons} name="ticket-outline" size={22} color={"rgba(255, 255, 255, 0.4)"} />            
        </Text>
        <Text>
            <Icon type={Icons.Ionicons} name="notifications-outline" size={22} color={"rgba(255, 255, 255, 0.4)"} />            
        </Text>
        <Text>
            <Icon type={Icons.Feather} name="user" size={22} color={"rgba(255, 255, 255, 0.4)"} />            
        </Text>
        <Button title='Go to Notif' onPress={() => navigation.navigate("Notification")}/>
    </View>
  )
}

export default NavBar