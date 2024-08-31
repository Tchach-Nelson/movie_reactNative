import React from "react";
import { FlatList, Image, Platform, ScrollView, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View, TextInput } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { Icon, Icons } from '../components';
import { useThemeContext } from '../themes';
import { ApiConfig, ApiServices } from "../api";

const HomeScreen = () => {
    const theme = useTheme();
    const themeContext = useThemeContext();
    const [movies, setMovies] = React.useState([]);
    const [texte, setTexte] = React.useState('');
    const [search, setSearch] = React.useState([]);
    const [showSearch, setShowSearch] = React.useState(false);
    const [terme, setTerme] = React.useState([]);

    React.useEffect(() => {
        const getUpcomingMovie = async () => {
            let movies = await ApiServices(`${ApiConfig.baseUrl}/movie/upcoming?language=fr`, 'GET', '', ApiConfig.apiToken);
            // console.log(movies);
            if (movies.status == 200) {
                setMovies(movies.response)

                // setRefreshing(false);
            }
            else {
                Alert.alert('Movies News', 'Erreur survenue.', [
                    {
                        text: 'OK'
                    }
                ]);
            }
        }
        getUpcomingMovie()
    }, []);

    handleClick = async () => {

        if(texte == ''){
            Alert.alert('Champ requis', 'Veuillez remplir le champ texte');
            return false ;
        } else{

            console.log('Recheche :', texte);
            let query = texte ;
            let responses = await ApiServices(`${ApiConfig.baseUrl}/search/movie?include_adult=false&language=fr&page=1&query=${query}`, 'GET', '', ApiConfig.apiToken);
            setTerme(texte)
            setSearch(responses);
    
            if (responses.status == 200) {
                setShowSearch(true) ;
                setSearch(responses.response)
                // console.log(responses.response) ;
            }
            else {
                Alert.alert('Movies News', 'Erreur survenue.', [{text: 'OK'}]);
            }
            // setTexte("") ;
        }
    };    

    return (
        <View style={{backgroundColor: theme.colors.background, marginTop: 0, }}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} hidden={false} />
            {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor={'#0000ff75'} hidden={false} /> */}

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{padding: 20, background:theme.colors.background}}>
                {/* <View style={{backgroundColor: '#0000ff75', padding: 20}}> */}
                    <View style={{marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Icon type={Icons.Feather} name="film" size={28} color={theme.colors.text1}  style={{backgroundColor:'#00000018', padding:10, borderRadius: 20, borderWidth: 0, borderColor: 'gray'}}/>
                        <Text style={{color: theme.colors.text1, fontSize: 20, fontWeight: "bold"}}>Movies News</Text>
                        <Switch
                            value={themeContext.mode === 'dark'}
                            onValueChange={(value) => {
                                themeContext.setMode(value ? 'dark' : 'light')
                            }}
                        />
                    </View>
                    <View style={{marginTop: 10, display:'flex', flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                        <View style={{marginTop: 15, display:'flex', flexDirection:"row" , justifyContent:"center", alignItems: 'center' ,  width: "90%", borderRadius: 100, borderColor: 'gray', borderWidth: .5,}}>
                            <TextInput
                                placeholder="Rechercher un film"
                                // required 
                                placeholderTextColor="black"
                                onChangeText={setTexte}
                                value={texte}
                                style={{padding: 10, marginRight: 10, width: 180, color:'black' }}                        
                            />
                             <TouchableOpacity onPress={this.handleClick} style={{backgroundColor:'#00000018',display: 'flex', alignItems:'center', justifyContent: 'center', width: 45, height: 45, borderRadius:100, marginLeft: 50}}>
                                <Icon type={Icons.AntDesign} name="search1" size={20} color={theme.colors.text1}  />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
                <View style={{display: showSearch && texte != '' ? "block": "none"}}>
                        <Text style={{marginBottom: 20, marginLeft: 20, fontSize: 12}}>
                            Terme: <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize:14, backgroundColor: '#00000018'}}> {terme } </Text> 
                            avec <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize:14, backgroundColor: '#00000018'}}> {search.total_results}</Text> résultats
                        </Text>
                        <FlatList 
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={search.results}
                            style={{paddingBottom: 5, marginTop: 0}}
                            renderItem={({item, index}) => {
                                return (
                                    <View key={index} style={{marginRight: 10, width: 200}}>
                                        <View style={{height: 250 , width: 170 , borderWidth: 0.5, borderRadius: 10,borderColor:'gray', marginLeft:10 }}>
                                            <Image
                                                resizeMode="contain"
                                                style={{width: "100%", height: "100%", borderRadius: 10 }}
                                                source={{
                                                    uri: `${ApiConfig.w500ImageUrl}${item.poster_path}`,
                                                }}
                                            />
                                        </View>
                                        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>{ item.title }</Text>
                                        <Text style={{ color: theme.colors.grey }}>
                                            <Icon type={Icons.FontAwesome} name="star" size={13} color={theme.colors.yellow} /> { item.vote_average }/10
                                        </Text>
                                    </View>
                                )
                            }}
                        />
                        
                    </View>
                

                <View style={{marginTop: 25, padding: 18}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{fontSize: 22, fontWeight: "bold", color: theme.colors.text1}}>A Venir</Text>
                        <TouchableOpacity style={{borderColor: theme.colors.grey, borderWidth: 1, padding: 3, paddingHorizontal: 5, borderRadius: 50}}>
                            <Text style={{color: theme.colors.grey, fontSize: 12}}>Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 5}}>
                        <FlatList 
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={movies.results}
                            style={{paddingBottom: 5, marginTop: 0}}
                            renderItem={({item, index}) => {
                                return (
                                    <View key={index} style={{marginRight: 10, width: 200}}>
                                        <View style={{height: 250 }}>
                                            <Image
                                                resizeMode="contain"
                                                style={{width: "100%", height: "100%"}}
                                                source={{
                                                    uri: `${ApiConfig.w500ImageUrl}${item.poster_path}`,
                                                }}
                                            />
                                        </View>
                                        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>{ item.title }</Text>
                                        <Text style={{ color: theme.colors.grey }}>
                                            <Icon type={Icons.FontAwesome} name="star" size={13} color={theme.colors.yellow} /> { item.vote_average }/10
                                        </Text>
                                    </View>
                                )
                            }}
                        />
                        
                    </View>
                    <Text>CC: ici le formulaire de recherche</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;