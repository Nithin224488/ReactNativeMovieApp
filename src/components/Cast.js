import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IMAGE_BASE_URL } from '../constants/urls'


const Cast = ({ castDetails }) => {
    const { profile_path, name } = castDetails


    return (
        <View>
            <Image source={profile_path ? { uri: `${IMAGE_BASE_URL + profile_path}` } : require('../../assets/No-image-available.jpg')}
                style={styles.castImage} />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Cast

const styles = StyleSheet.create({

    castImage: {
        height: 120,
        width: 70,
        borderRadius: 5
    }, name: {
        width: 70
    }
})
