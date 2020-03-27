import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global'

const Home = (props) => {

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home</Text>
            <Button
                title="Go To Details"
                onPress={() => props.navigation.push('Details')}
            />
        </View>
    )
}

export default Home;
