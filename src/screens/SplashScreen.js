import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({onAnimationFinish}) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                maxWidth: '70%',
                marginLeft: '14%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <LottieView
                source={require('../../assets/lottie/data.json')}
                autoPlay
                loop={false}
                speed={1.2}
                onAnimationFinish={onAnimationFinish}
            />
        </View>
    );
};

export default SplashScreen;