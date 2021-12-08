import axios from '../axios/axios'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, FlatList, ImageBackground, Linking } from 'react-native';
import { ENDPOINTS, IMAGE_BASE_URL, YOUTUBE_BASE_URL } from '../constants/urls';
import { Ionicons } from '@expo/vector-icons';
import MovieCard from '../components/MovieCard';
import ItemSeperator from '../components/ItemSeperator';
import Cast from '../components/Cast';



const { height, width } = Dimensions.get("screen")
const setHeight = h => (height * (h / 100))

const getDuration = time => (time > 60 ? parseInt(time / 60) + "h " + time % 60 + "min" : time + "min")

const MovieScreen = ({ route, navigation }) => {
  const { movieId } = route.params
  console.log(route.params)
  const [movieDetails, setMovieDetails] = useState()

  useEffect(() => {
    axios.get(ENDPOINTS.movie + `${movieId}`, { params: { append_to_response: "videos,credits,recommendations,similar" } }).then(res => setMovieDetails(res.data))
  }, [])

  console.log(movieDetails)



  return (
    movieDetails ? (<ScrollView contentContainerStyle={styles.container}>
      < ImageBackground source={{ uri: `${IMAGE_BASE_URL + movieDetails.backdrop_path}` }
      } style={styles.movieImage} imageStyle={{ borderBottomLeftRadius: 230, borderBottomRightRadius: 230 }} resizeMode="cover">
        <Ionicons name="chevron-back" size={32} color="white" style={styles.back} onPress={() => navigation.navigate("home")} />
        <Ionicons name="play-circle-outline" size={44} color="white"
          onPress={() => { Linking.openURL(`${YOUTUBE_BASE_URL + movieDetails.videos.results.find(video => video.type === "Trailer").key}`) }} />

      </ImageBackground>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainText}>{movieDetails.title}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="heart" size={25} color="red" />
            <Text style={[styles.mainText, { marginLeft: 10 }]}>{movieDetails.vote_average}</Text>
          </View>

        </View>
        <Text style={styles.text}>{movieDetails.genres.map((genre, index) => index !== movieDetails.genres.length - 1 ? genre.name + ", " : genre.name + " | ")}<Text>{getDuration(parseInt(movieDetails.runtime))}</Text></Text>
        < Text style={styles.text} >{movieDetails.original_language.toUpperCase()}</Text >
        <View style={styles.overViewContainer}>
          <Text style={styles.mainText}>OverView</Text>
          <Text style={styles.text}>{movieDetails.overview}</Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            Cast
          </Text>
          <FlatList
            data={movieDetails.credits.cast}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Cast castDetails={item} />}
            ItemSeparatorComponent={() => <ItemSeperator width={20} />}

          />
        </View>
        <View style={styles.otherMoviesContainer}>
          <Text style={styles.mainText}>Recommended Movies</Text>
          <FlatList
            data={movieDetails.recommendations.results}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <MovieCard movieDetails={item} size={.75} />}
            ItemSeparatorComponent={() => <ItemSeperator width={20} />}

          />
        </View>
        <View style={styles.otherMoviesContainer}>
          <Text style={styles.mainText}>Similar Movies</Text>
          <FlatList
            data={movieDetails.recommendations.results}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <MovieCard movieDetails={item} size={.5}
              navigate={() => navigation.navigate("movie", { movieId: item.id })} />}
            ItemSeparatorComponent={() => <ItemSeperator width={20} />}
          />
        </View>
      </View>


      <StatusBar style="auto" />
    </ScrollView >) : null


  );
}
export default MovieScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  detailContainer: {
    padding: 20
  },
  movieImage: {
    height: setHeight(35),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center'
  }
  ,
  back: {

    position: "absolute",
    top: 20,
    left: 20
  },
  titleContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    color: "grey",
    marginTop: 10
  },
  overViewContainer: {
    backgroundColor: "#e3e5e6",
    padding: 10, marginTop: 20, marginBottom: 20
  },
  otherMoviesContainer: {
    marginTop: 10
  }
});