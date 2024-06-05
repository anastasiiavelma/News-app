import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import { HomeScreen } from '../screens/Home';
import { FullPost } from '../screens/FullPost';
const Stack = createNativeStackNavigator();

const headerBackground = () => (
  <LinearGradient
    colors={['#3495eb', '#d582e0']} 
    style={{ flex: 1 }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
)

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
   
        <Stack.Screen name="Home" component={HomeScreen} options={{ 
            title: 'News', 
            
            headerBackground: headerBackground,
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold', 
            },
          }}  />

<Stack.Screen name="FullPost" component={FullPost} options={{  title: 'fULLpOST', 
            
            headerBackground: headerBackground,
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold', 
            },
          }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );

  const styles = StyleSheet.create({
    headerContainer: {
      flex: 1,
      overflow: 'hidden', 
      borderBottomLeftRadius: 20, 
      borderBottomRightRadius: 20,
    },
    gradient: {
      flex: 1,
    },
  });
};


