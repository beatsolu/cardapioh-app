import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'http://api.cardapioh.com.br',
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

const getMenu = async (slug) => {
    return await api.get(`/api/places/${slug}/`);
};

const searchItem = async (session, search) => {
    return await api.get(`/api/items/?session=${session}&search=${search}`);
};

export {
    getPlaces,
    getMenu,
    searchItem
}