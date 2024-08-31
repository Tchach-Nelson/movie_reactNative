import React from 'react'
import { Image, StatusBar, Text, View, PanResponder, Animated,} from 'react-native';
import { Icon, Icons } from '../components';

function Movie({result, screenWidth}) {

    color = result.color ;

  return (
    
    <View style={{paddingLeft:20, paddingTop:20, paddingRight:20, height:"100%",backgroundColor:{color}}}>
        <StatusBar backgroundColor='rgba(17, 52, 61, 0.7)' hidden={false} />
        <View>
            {/* nom, saison ,heure , 2 genre, langue et pays */}
            <Text style={{color:'white', fontSize:33, marginTop:10, fontWeight:'bold'}}>{result.nom} </Text> 
            <Text style={{color:'rgba(255, 255, 255, 0.6)', fontSize:20, marginTop:5}}>{result.saison}</Text>
            <View style={{display:'flex', flexDirection:'row', marginTop:10}}>
                <View style={{backgroundColor:'rgba(255, 255, 255, 0.2)', width:70, height:30, textAlign:'center', borderRadius:15, display:'flex', justifyContent:'center', marginRight:4}}><Text style={{textAlign:'center', color:'rgba(255, 255, 255, 0.6)', fontSize:12}}>{result.heures}</Text></View> 
                <View style={{backgroundColor:'rgba(255, 255, 255, 0.2)', width:70, height:30, textAlign:'center', borderRadius:15, display:'flex', justifyContent:'center', marginRight:4}}><Text style={{textAlign:'center', color:'rgba(255, 255, 255, 0.6)', fontSize:12}}>{result.genre2}</Text></View> 
                <View style={{backgroundColor:'rgba(255, 255, 255, 0.2)', width:70, height:30, textAlign:'center', borderRadius:15, display:'flex', justifyContent:'center', marginRight:4}}><Text style={{textAlign:'center', color:'rgba(255, 255, 255, 0.6)', fontSize:10, fontWeight: 'bold'}}>{result.genre1}</Text></View> 
                <View style={{backgroundColor:'rgba(255, 255, 255, 0.2)', width:40, height:30, textAlign:'center', borderRadius:15, display:'flex', justifyContent:'center', marginRight:4}}><Text style={{textAlign:'center', color:'rgba(255, 255, 255, 0.6)'}}>{result.langue}</Text></View> 
                <View style={{backgroundColor:'rgba(255, 255, 255, 0.2)', width:40, height:30, textAlign:'center', borderRadius:15, display:'flex', justifyContent:'center', marginRight:4}}><Text style={{textAlign:'center', color:'rgba(255, 255, 255, 0.6)'}}>{result.pays}</Text></View> 
            </View>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between' ,marginTop:15}}>
                <Text>
                    <Icon type={Icons.FontAwesome} name="star" size={22} color={"#d8a037"} style={{marginRight:10}} />
                    <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}> {result.note}/10</Text> 
                    <Text style={{color:'rgba(255, 255, 255, 0.4)', fontSize:10}}> {result.nbreVote}</Text>
                </Text>
                <Text style={{ position: 'relative', marginRight:10 }}>
                    <Icon type={Icons.AntDesign} name="playcircleo" size={25} color={"white"} />
                    <Text style={{color:'white', fontSize:13, position:'absolute' ,top:-100}}> Watch Trailer</Text> 
                </Text> 
            </View>
        </View>
        <View style={{marginTop:15, height:"65%", width:"90%", marginLeft: "5%", borderRadius: 20}}>
                <Image
                    // resizeMode="contain"
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%', borderRadius: 20 }}
                    // source={require('../../assets/JohnWick.jpg')}
                    source={{
                        uri: `${result.image}`,
                    }}
                />
        </View>
    </View>
  )
}

export default Movie