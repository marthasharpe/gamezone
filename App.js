import React from 'react';
import Home from './screens/Home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'sen-regular': require('./assets/fonts/Sen-Regular.ttf'),
  'sen-bold': require('./assets/fonts/Sen-Bold.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
  
}