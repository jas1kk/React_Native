import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SecondScreen')}
      >
        <Text style={styles.buttonText}>Go to Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ThirdScreen')}
      >
        <Text style={styles.buttonText}>Go to Third Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.buttonText}>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1f7cff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
