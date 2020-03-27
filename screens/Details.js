import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global'

const Details = (props) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                {props.route.params.title}
            </Text>
            <Text style={globalStyles.bodyText}>
                {props.route.params.body}
            </Text>
            <Text style={globalStyles.bodyText}>
                Rating: {props.route.params.rating}
            </Text>
        </View>
    )
}

export default Details;