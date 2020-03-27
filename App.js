import React from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import 'react-native-gesture-handler';
import StackNavigator from './routes/StackNavigator';

const getFonts = () => Font.loadAsync({
  'sen-regular': require('./assets/fonts/Sen-Regular.ttf'),
  'sen-bold': require('./assets/fonts/Sen-Bold.ttf')
})

const App = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (fontsLoaded) {
    return (
      <StackNavigator />
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

export default App;