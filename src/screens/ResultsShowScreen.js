import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet , FlatList, Image, Dimensions} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const id = navigation.getParam('id');
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
            setErrorMessage('');
        } catch (err) {
            setErrorMessage('Something went wrong!');
        }

    };

    const imageStyle = () => {
        return {
            height: imageHeight,
            width: imageWidth,
            marginBottom: 10
        };
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={imageStyle()} source={{ uri: item }} />
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        alignSelf: 'center'
    }
});

export default ResultsShowScreen;