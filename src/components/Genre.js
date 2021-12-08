import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')



const styles = StyleSheet.create({
    genreContainer: {
        justifyContent: "center",
        borderRadius: 5,
        elevation: 3,
        padding: 10,
        width: .25 * width,
    },
    genre: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
})


const Genre = ({ genre, isActive, setActive }) => {
    return (
        <TouchableOpacity style={[styles.genreContainer, { backgroundColor: isActive ? "tomato" : '#fff' }]}
            onPress={() => setActive(genre)}
            activeOpacity={.5}>
            <Text style={[styles.genre, { color: isActive ? "#fff" : '#000' }]}>{genre}</Text>
        </TouchableOpacity >
    );
};




export default Genre
