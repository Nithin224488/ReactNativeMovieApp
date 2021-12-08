import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Genre from '../components/Genre';
import ItemSeperator from '../components/ItemSeperator';
import { MOVIE_DETAILS_BASE_URL, IMAGE_BASE_URL, API_KEY, ENDPOINTS } from "../constants/urls";
import axios from '../axios/axios'
import MovieCard from '../components/MovieCard';


const genres = ["All", "Action", "Comedy", "Drama", "Sci-Fic", "Romance"]

const HomeScreen = ({ navigation }) => {
    const [activeGenre, setActiveGenre] = useState(genres[0])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [upcomingMovies, setUpComingMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])


    useEffect(() => {
        axios.get(ENDPOINTS.nowPlaying).then(res => setNowPlayingMovies(res.data.results))
        axios.get(ENDPOINTS.upcomingMovies).then(res => setUpComingMovies(res.data.results))
        axios.get(ENDPOINTS.popular).then(res => setPopularMovies(res.data.results))

    }, [])


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" translucent={false} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Now Playing</Text>
                <Text style={styles.headerSubTitle} >VIEW ALL</Text>
            </View>
            <View>
                <FlatList horizontal keyExtractor={item => item}
                    data={genres}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Genre genre={item} isActive={item === activeGenre} setActive={(active) => setActiveGenre(active)}
                    />}
                    ItemSeparatorComponent={() => <ItemSeperator width={20} />}
                    ListHeaderComponent={() => <ItemSeperator width={20} />}
                    ListFooterComponent={() => <ItemSeperator width={20} />}
                />
            </View>
            <View style={styles.movieListContainer}>
                <FlatList horizontal keyExtractor={item => item.id}
                    data={nowPlayingMovies}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <MovieCard movieDetails={item} size={1}
                        navigate={() => navigation.navigate("movie", { movieId: item.id })} />
                    }
                    ItemSeparatorComponent={() => <ItemSeperator width={20} />}
                    ListHeaderComponent={() => <ItemSeperator width={20} />}
                    ListFooterComponent={() => <ItemSeperator width={20} />}
                />
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Upcoming </Text>
                <Text style={styles.headerSubTitle} >VIEW ALL</Text>
            </View>
            <View style={styles.movieListContainer}>
                <FlatList horizontal keyExtractor={item => item.id}
                    data={upcomingMovies}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <MovieCard movieDetails={item} size={.75}
                        navigate={() => navigation.navigate("movie", { movieId: item.id })} />
                    }
                    ItemSeparatorComponent={() => <ItemSeperator width={20} />}
                    ListHeaderComponent={() => <ItemSeperator width={20} />}
                    ListFooterComponent={() => <ItemSeperator width={20} />}
                />
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Popular </Text>
                <Text style={styles.headerSubTitle} >VIEW ALL</Text>
            </View>
            <View style={styles.movieListContainer}>
                <FlatList horizontal keyExtractor={item => item.id}
                    data={popularMovies}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <MovieCard movieDetails={item} size={.5}
                        navigate={() => navigation.navigate("movie", { movieId: item.id })} />
                    }
                    ItemSeparatorComponent={() => <ItemSeperator width={20} />}
                    ListHeaderComponent={() => <ItemSeperator width={20} />}
                    ListFooterComponent={() => <ItemSeperator width={20} />}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F7',

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: "center"

    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold'

    },
    headerSubTitle: {
        fontSize: 16,
        color: "#33CAFF"

    }
    ,
    movieListContainer: {
        marginTop: 20
    }
});

export default HomeScreen