import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'https://api.cardapioh.com.br',
});

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (token != null) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});

const getPlaces = async () => {
    return await api.get('/api/places/');
};

export {
    getPlaces
}