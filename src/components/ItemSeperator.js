import React from 'react'
import { View } from 'react-native'

const ItemSeperator = ({ height, width }) => <View style={{ width, height }} />


ItemSeperator.defaultProps = {
    height: 0, width: 0
}

export default ItemSeperator

