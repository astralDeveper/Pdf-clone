import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// Get the screen dimensions
const { width, height } = Dimensions.get('window');

const HorizontalScrollExample = () => {
  const scrollViewRef = useRef(null);
  const [currentScreen, setCurrentScreen] = useState(0); // State to track current screen

  // Scroll functions for each screen
  const scrollToScreen1 = () => {
    scrollViewRef.current.scrollTo({ x: 0, animated: true });
    setCurrentScreen(0);
  };

  const scrollToScreen2 = () => {
    scrollViewRef.current.scrollTo({ x: width, animated: true });
    setCurrentScreen(1);
  };

  const scrollToScreen3 = () => {
    scrollViewRef.current.scrollTo({ x: 2 * width, animated: true });
    setCurrentScreen(2);
  };

  const scrollToScreen4 = () => {
    scrollViewRef.current.scrollTo({ x: 3 * width, animated: true });
    setCurrentScreen(3);
  };

  const scrollToScreen5 = () => {
    scrollViewRef.current.scrollTo({ x: 4 * width, animated: true });
    setCurrentScreen(4);
  };

  // Function to detect scroll position and update current screen
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const screenIndex = Math.round(scrollPosition / width);
    setCurrentScreen(screenIndex);
  };

  return (
    <View style={styles.container}>
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={scrollToScreen1}>
          <Text style={[styles.buttonText, currentScreen === 0 && styles.activeText]}>Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToScreen2}>
          <Text style={[styles.buttonText, currentScreen === 1 && styles.activeText]}>Screen 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToScreen3}>
          <Text style={[styles.buttonText, currentScreen === 2 && styles.activeText]}>Screen 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToScreen4}>
          <Text style={[styles.buttonText, currentScreen === 3 && styles.activeText]}>Screen 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToScreen5}>
          <Text style={[styles.buttonText, currentScreen === 4 && styles.activeText]}>Screen 5</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal ScrollView */}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll} // Detect scroll to update screen
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {/* Screen 1 */}
        <View style={[styles.screen, styles.screen1]}>
          <Text style={styles.text}>This is Screen 1</Text>
        </View>

        {/* Screen 2 */}
        <View style={[styles.screen, styles.screen2]}>
          <Text style={styles.text}>This is Screen 2</Text>
        </View>

        {/* Screen 3 */}
        <View style={[styles.screen, styles.screen3]}>
          <Text style={styles.text}>This is Screen 3</Text>
        </View>

        {/* Screen 4 */}
        <View style={[styles.screen, styles.screen4]}>
          <Text style={styles.text}>This is Screen 4</Text>
        </View>

        {/* Screen 5 */}
        <View style={[styles.screen, styles.screen5]}>
          <Text style={styles.text}>This is Screen 5</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'gray', // Default text color
  },
  activeText: {
    color: 'black', // Active screen text color
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  screen: {
    width: width, // Use dynamic width based on the screen size
    height: height * 0.8, // Adjust height dynamically, e.g., 80% of the screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen1: {
    backgroundColor: '#ADD8E6',
  },
  screen2: {
    backgroundColor: '#90EE90',
  },
  screen3: {
    backgroundColor: '#FFD700',
  },
  screen4: {
    backgroundColor: '#FF69B4',
  },
  screen5: {
    backgroundColor: '#8A2BE2',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default HorizontalScrollExample;
