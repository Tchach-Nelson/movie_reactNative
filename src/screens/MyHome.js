import React, { useEffect, useRef, useState } from 'react';
import { Image, StatusBar, Text, View, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { Icon, Icons } from '../components';
import Movie from './Movie';
import NavBar from './NavBar';
import { ApiConfig, ApiServices } from "../api";

function MyHome({ navigation }) {
  const route = useRoute();
  const [movies, setMovies] = React.useState([]);
  const [moviesInfo, setMoviesInfo] = React.useState([]);
  const [results, setResults] = React.useState([]); 
  const [currentPage, setCurrentPage] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const swiperRef = useRef(null);

  useEffect(() => {
    const getUpcomingMovie = async () => {
      try {
      

        const movies = await ApiServices(`${ApiConfig.baseUrl}/movie/upcoming?language=fr`, 'GET', '', ApiConfig.apiToken);
        
        const movieInfos = await Promise.all(
            movies.response.results.map(async (movie) => {
                const movieInfo  = await  ApiServices(`${ApiConfig.baseUrl}/movie/${movie.id}?language=fr`, 'GET','',ApiConfig.apiToken); 
                return movieInfo.response;
            })
        ) 

        console.log(movieInfos[1].genres);
        if (movies.status === 200) {

          setMovies(movies.response);

            setResults(
                movieInfos.map((movie) => (
                {
                    id: movie.id,
                    nom: movie.original_title,
                    saison: "Saison 0",
                    heures:`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`,
                    genre1: movie.genres[0].name,
                    genre2: movie.release_date,
                    langue: movie.original_language,
                    pays: movie.origin_country,
                    note: movie.vote_average,
                    nbreVote: `${movie.vote_count} votes`,
                    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }))
            );
        } else {
          Alert.alert('Movies News', 'Une erreur est survenue.', [{ text: 'OK' }]);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des films à venir :', error);
        Alert.alert('Movies News', 'Une erreur est survenue.', [{ text: 'OK' }]);
      }
    };
    getUpcomingMovie();
  }, []);

//   console.log(movies)

  const onIndexChanged = (index) => {
    setCurrentPage(index);
  };
  
//   ApiServices(`${ApiConfig.baseUrl}/movie/top_rated?language=fr&page=1`, 'GET', '', ApiConfig.apiToken);
  


  return (
    <View backgroundColor='rgba(17, 52, 61, 0.7)' height="100%">
      <View style={{ flex: 1 }}>
        <Swiper
          ref={swiperRef}
          loop={false}
          index={currentPage}
          onIndexChanged={onIndexChanged}
          showsPagination={false}
        >
          {results.map((result) => (
            <Movie key={result.id} result={result} />
          ))}
        </Swiper>
      </View>
      <View style={{
        marginLeft: "8%", width: "85%", marginBottom: 20, backgroundColor: 'rgba(0, 0, 0, 0.4)', height: "10%", borderRadius: 20, padding: 20, paddingLeft: 40, paddingRight: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <Text onPress={() => navigation.navigate("MyHome")} style={{ height: "200%", width: 40, paddingTop: 20, textAlign: 'center' }}>
          <Icon type={Icons.Fontisto} name="film" size={22} color={"#d8a037"} />
        </Text>
        <Text onPress={() => navigation.navigate("Recherche")} style={{ height: "200%", width: 40, paddingTop: 20, textAlign: 'center' }}>
          <Icon type={Icons.AntDesign} name="search1" size={22} color={"rgba(255, 255, 255, 0.4)"} />
        </Text>
        <Text style={{ height: "200%", width: 40, paddingTop: 20, textAlign: 'center' }}>
          <Icon type={Icons.Ionicons} name="ticket-outline" size={22} color={"rgba(255, 255, 255, 0.4)"} />
        </Text>
        <Text onPress={() => navigation.navigate("Notification")} style={{ height: "200%", width: 40, paddingTop: 20, textAlign: 'center' }}>
          <Icon type={Icons.Ionicons} name="notifications-outline" size={22} color={"rgba(255, 255, 255, 0.4)"} />
        </Text>
        <Text style={{ height: "200%", width: 40, paddingTop: 20, textAlign: 'center' }}>
          <Icon type={Icons.Feather} name="user" size={22} color={"rgba(255, 255, 255, 0.4)"} />
        </Text>
      </View>
    </View>
  );
}

export default MyHome;