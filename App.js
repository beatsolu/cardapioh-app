import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {makeServer} from "./server";
import {MenuItem, Place} from "./src/components";
import {AppLoading} from 'expo';
import {useFonts} from "expo-font";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

if (process.env.NODE_ENV === "development") {
  if (window.server) {
    window.server.shutdown();
  }
  window.server = makeServer();
}

const store = {
  id: "1",
  name: "Pão da vida",
  address: "Rua Antonio Guedes Pessoa, 280 - Padre Romualdo, Caucaia - CE",
  image: 'https://scontent-for1-1.xx.fbcdn.net/v/t1.0-9/19748849_1474855669259759_6097009864664103174_n.jpg?_nc_cat=105&ccb=2&_nc_sid=dd9801&_nc_eui2=AeGDtm15Ukz_3FRFgyIz9Vz_PXEmWk3eyf89cSZaTd7J_73Bj6vWLP7C8szKhI6adf1dOOxQ1TcHjktjkKCwaXYX&_nc_ohc=tbH3vlt3xZUAX8-Rnr1&_nc_ht=scontent-for1-1.xx&oh=0c6135cb82b32e92621fcfe47832487d&oe=5FCAB361'
}
const menuItem = {
  code: 1,
  name: 'Salada Tropical',
  description: 'Alface americana. alface roxa, cebola, azeitona, tomate, manga, molho de mostarda e mel',
  price: 21.90,
  discount: null,
  image: 'https://picsum.photos/300/200'

}

function HomeScreen() {
  return (
      <View style={styles.container}>
        <Place {...store}/>
        <MenuItem {...{...menuItem, image: null}}/>
        <MenuItem {...{...menuItem, discount: 30}}/>
      </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Sofia Pro Black': require('./assets/fonts/SofiaPro/SofiaProBlack.otf'),
    'Sofia Pro Light': require('./assets/fonts/SofiaPro/SofiaProLight.otf'),
  });

  if (!fontsLoaded) {
    console.log(fontsLoaded)
    return <AppLoading/>;
  } else {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
