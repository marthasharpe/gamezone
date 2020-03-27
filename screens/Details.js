import React from 'react';
import { View, Button, Text } from 'react-native';
import { globalStyles } from '../styles/global'

const Details = (props) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Details</Text>
            <Button
                title="Go To Details"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    )
}

export default Details;