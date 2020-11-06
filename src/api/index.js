import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'https://api.zecardapio.com.br',
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

const getStores = async () => {
    return await api.get('/api/stores/');
};

export {
    getStores
}