import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'

const Home = (props) => {

    const [ reviews, setReviews ] = React.useState([
        {title: 'Zelda', rating: 5, body: 'A great game!', key: '1'},
        {title: 'Sonic', rating: 4, body: 'A great game!', key: '2'},
        {title: 'Pacman', rating: 3, body: 'A great game!', key: '3'},
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Details', item)}
                    >
                        <Text style={globalStyles.titleText}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Home;
