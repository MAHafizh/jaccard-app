/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SplashImage} from '../../assets';
import {mainColor} from '../../utils';

const Splash = ({navigation}) => {
  const handleButtonPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer} />
        <Image source={SplashImage} style={styles.headerImage} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Jaccard 5</Text>
        <Text style={styles.content}>
          Diagnose your sickness based on symptoms.
        </Text>
      </View>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },
  headerWrapper: {
    width: 370,
    height: 390,
    marginTop: windowHeight * 0.014,
    position: 'relative',
  },
  headerImage: {
    position: 'absolute',
    width: 360,
    height: 390,
    bottom: 0,
  },
  headerContainer: {
    position: 'absolute',
    width: 370,
    height: 337,
    backgroundColor: '#E18962',
    elevation: 5,
    borderRadius: 19,
    bottom: 0,
  },
  contentWrapper: {
    width: 374,
    height: 167,
    marginTop: 22,
    marginBottom: windowHeight * 0.18,
    marginLeft: 25
  },
  title: {
    fontFamily: 'Poppins-Black',
    color: mainColor,
    fontSize: 37,
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 5,
  },
  content: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 25,
    marginStart: 3,
    marginEnd: 25,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#E18962',
    height: 50,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 60,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
  },
});
