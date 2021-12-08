import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, TouchableNativeFeedback } from 'react-native'
import { MOVIE_DETAILS_BASE_URL, IMAGE_BASE_URL, API_KEY, ENDPOINTS } from "../constants/urls";
import { Ionicons } from '@expo/vector-icons';

const MovieCard = props => {
    const { movieDetails, size, navigate } = props
    const { poster_path, title, vote_count } = movieDetails


    const [voteCount, setVoteCount] = useState(vote_count)
    const [like, setLike] = useState(false)

    const onPressLike = () => {
        setLike(!like)
        setVoteCount(!like ? `${parseInt(vote_count) + 1}` : vote_count)
    }

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={navigate}>
            <Image accessibilityLabel="movie" style={[styles.posterImage, { height: 340 * size, width: 230 * size }]}
                source={{ uri: `${IMAGE_BASE_URL + poster_path}` }} />
            <View style={styles.detailContainer}>
                <Text numberOfLines={2} style={[styles.title, { fontSize: 16 * size, width: 200 * size }]}>{title}</Text>
                <View>
                    <Ionicons name={like ? "heart" : "heart-outline"} size={20 * size} color={like ? "red" : "black"} onPress={onPressLike} />
                    <Text style={{ fontSize: 16 * size }}>{voteCount}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default MovieCard

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 14,
        elevation: 5,
        marginVertical: 2
    }
    ,
    posterImage: {

        borderRadius: 14,
        marginVertical: 2
    },
    title: {

        color: "#000",

    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    }
})
