import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';

const Splash = ({navigation}) => {
  //   const theme = useColorScheme();

  //   const isAuth = async () => {
  //     try {
  //       const data = await AsyncStorage.getItem('UserTokens'); // Get stored token data
  //       const udata = JSON.parse(data); // Parse the token data
  //       console.log('Data', udata?.refresh?.token); // Log token for debugging

  //       // If token data is found, proceed with token refresh
  //       if (udata) {
  //         try {
  //           // Make an API call to refresh the token using the refresh token
  //           const response = await axios.post(API.USER.REFRESH_TOKEN, {
  //             refreshToken: udata?.refresh?.token,
  //           });

  //           // If the refresh token API call succeeds
  //           if (response?.data) {  // Ensure tokens exist in the response
  //             console.log('Refresh successful!', response?.data);

  //             // Update the stored token in AsyncStorage if tokens are present
  //             await AsyncStorage.setItem(
  //               'UserTokens',
  //               JSON.stringify(response.data),
  //             );
  //           } else {
  //             console.log('No tokens in the response.');
  //           }
  //         } catch (error) {
  //           console.log('Refresh Failed', error?.message); // Handle token refresh error
  //         }

  //         // After 2 seconds, navigate to a new screen if needed
  //         setTimeout(async () => {
  //           navigation.replace('Select_Book'); // Navigate after timeout (optional)
  //           // navigation.replace('Login');
  //         }, 2000);
  //       } else {
  //         // If no token data is found, redirect to login after timeout
  //         setTimeout(async () => {
  //           navigation.replace('Login');
  //         }, 2000);
  //       }
  //     } catch (error) {
  //       console.log(error); // Handle general error
  //       navigation.replace('Login'); // Navigate to login if error occurs (optional)
  //     }
  //   };

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomTabs');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#141615',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assets/Img.jpeg')}
        style={{
          width: width,
        }}
      />
    </View>
  );
};
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
