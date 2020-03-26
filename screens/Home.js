import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    title: {
        fontFamily: 'sen-bold',
        fontSize: 24
    }
})

export default Home;
