import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    

    <ImageBackground source={require('./assets/background.jpg')} style={styles.container}>
      <View style={styles.overlay}>
      <StatusBar style="auto" />
      </View>


      <Text style={styles.legato}>Legato</Text>
      
      <Text style={styles.text}>Create</Text>
        {'\n'}
      <Text style={styles.text}>Connect</Text>
      {'\n'}
      <Text style={styles.text}>Collaborate</Text>


      <TouchableOpacity onPress={() => console.log('Thanks for visiting!')} style={styles.button} accessibilityLabel="Use this to sign in to or sign up for Legato!">
        <Text style={styles.buttonText}>Sign in / Join</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  image: {
    flex: 1, 
    resizeMode: 'cover',
    justifyContent: 'center',
  }, 
  legato: {
    color: 'white', 
    fontSize: 54,
    fontWeight: 'bold',
    justifyContent: 'center',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    marginBottom: '2.2em',
    zIndex: 0
  },
  text: {
    display: 'flex',
    color: 'white',
    fontSize: 40,
    alignSelf: 'baseline',
    fontWeight: 'bold',
    marginLeft: 55,
    marginTop: 8,
    marginBottom: 8,
    fontFamily: 'Arial',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.5
  },
  button: {
    backgroundColor: "#0d0d0d",
    padding: 5,
    borderRadius: 8,
    width: 300,
    textAlign: 'center',
    position: 'absolute',
    bottom: 90,
    height: 35,

  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    textAlignVertical: 'center'
  }, 
  
});
