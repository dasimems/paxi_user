import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { bauhs93, lato } from './fonts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Providers, ScreenContainer } from './components';
import { GettingStarted, Login, Navigation, OTP } from './screens';
import { NavNames } from './data/general';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    [lato.regular.default]: require("./fonts/Lato-Regular.ttf"),
    [lato.regular.italic]: require("./fonts/Lato-Italic.ttf"),
    [lato.black.default]: require("./fonts/Lato-Black.ttf"),
    [lato.black.italic]: require("./fonts/Lato-BlackItalic.ttf"),
    [lato.bold.default]: require("./fonts/Lato-Bold.ttf"),
    [lato.bold.italic]: require("./fonts/Lato-BoldItalic.ttf"),
    [bauhs93]: require("./fonts/BAUHS93.ttf"),
  });

  return (
    <>

      {fontsLoaded && <Providers>

        <ScreenContainer>

          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group screenOptions={{
                  animation:"slide_from_right",
                  headerShown: false

                }}>

                <Stack.Screen name={NavNames.Navigation.name} component={Navigation} />
                <Stack.Screen name={NavNames.GettingStarted.name} component={GettingStarted} />
                <Stack.Screen name={NavNames.Login.name} component={Login} />
                <Stack.Screen name={NavNames.OTP.name} component={OTP} />

              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>

        </ScreenContainer>

        
        
        </Providers>}
    
    </>
  );
}

const styles = StyleSheet.create({});