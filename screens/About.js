import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontFamily: 'sen-bold',
        fontSize: 24
    }
})

export default About;