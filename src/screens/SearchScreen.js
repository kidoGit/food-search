import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [city, setCity] = useState('');
    const [searchApi, errorMessage, results, apiCalled] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    const placeholder = {
        label: 'Select a city',
        value: null,
        color: '#9EA0A4',
    };
    const pickerValueChange = (city) => {
        setCity(city);
        searchApi(term, city);
    }
    const cityList = [
        { label: 'San Francisco', value: 'san francisco', key: '1' },
        { label: 'Chicago', value: 'chicago', key: '2' },
        { label: 'New York', value: 'new york', key: '3' },
        { label: 'Los Angeles', value: 'los angeles', key: '4' }
    ];

    return (
        // <View style={{ flex: 1 }}> // flex: 1 solves the issue of content overload. Alternatively, can also use empty element as here
        <>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                onValueChange={(value) => pickerValueChange(value)}
                placeholder={placeholder}
                items={cityList}
            />
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term, city)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            {results.length ? null : (apiCalled ? <Image style={styles.image} source={require('../../assets/noResults.png')} /> : null)}

            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </>
        // </View>
    );
};

const styles = StyleSheet.create({
    noResults: {
        marginLeft: 15,

    },
    image: {
        height: 300,
        width: 300,
        marginVertical: 40,
        alignSelf: 'center'
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        marginBottom: 10,
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        marginHorizontal: 15
    }
});

export default SearchScreen;