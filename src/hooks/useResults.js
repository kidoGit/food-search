import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    // let apiCalled = false;
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [apiCalled, setApiCalled] = useState(false);

    const searchApi = async (searchTerm, city) => {
        if (!city || !searchTerm) {
            return;
        }
        try {
            setApiCalled(true);
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: city
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (err) {
            setErrorMessage('Something went wrong!');
        }
    }

    // useEffect(() => {
    //     searchApi(null, null);
    // }, []);

    return [searchApi, errorMessage, results, apiCalled];
};