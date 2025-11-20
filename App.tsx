import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DailyEntryScreen } from './src/screens/DailyEntryScreen';
import { HistoryScreen } from './src/screens/HistoryScreen';
import { JournalProvider } from './src/context/JournalContext';
import { TouchableOpacity, Text } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';


export type RootStackParamList = {
  DailyEntry: undefined;
  History: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};


const App = () => {
  return (
    <JournalProvider>
      <NavigationContainer>
      <Stack.Navigator
  screenOptions={{
    headerTitleStyle: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 13,
    },
    headerBackTitleStyle: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 13,
    },
  }}
>
          <Stack.Screen
            name="DailyEntry"
            component={DailyEntryScreen}
            options={({ navigation }) => ({
              title: 'Mind Assistant',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('History')}>
                  <Text style={{ color: '#4C6FFF', fontWeight: '600' }}>Geçmiş</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="History"
            component={HistoryScreen}
            options={{
              title: 'Mind Assistant',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </JournalProvider>
  );
};

export default App;
