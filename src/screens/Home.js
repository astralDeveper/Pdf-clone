import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import {Pddfss} from './Dummy'; // Ensure this is correctly importing your data

const Home = () => {
  const navigation = useNavigation(); // Initialize navigation

  const scrollViewRef = useRef(null);
  const [currentScreen, setCurrentScreen] = useState(0); // State to track current screen

  // Scroll functions for each screen
  const scrollToScreen1 = () => {
    scrollViewRef.current.scrollTo({x: 0, animated: true});
    setCurrentScreen(0);
  };

  const scrollToScreen2 = () => {
    scrollViewRef.current.scrollTo({x: width, animated: true});
    setCurrentScreen(1);
  };

  const scrollToScreen3 = () => {
    scrollViewRef.current.scrollTo({x: 2 * width, animated: true});
    setCurrentScreen(2);
  };

  const scrollToScreen4 = () => {
    scrollViewRef.current.scrollTo({x: 3 * width, animated: true});
    setCurrentScreen(3);
  };

  const scrollToScreen5 = () => {
    scrollViewRef.current.scrollTo({x: 4 * width, animated: true});
    setCurrentScreen(4);
  };

  // Function to detect scroll position and update current screen
  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const screenIndex = Math.round(scrollPosition / width);
    setCurrentScreen(screenIndex);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#141615'}}>
      <View style={{padding: 15, width}}>
        <Text style={{fontSize: 25, fontWeight: '600', color: '#FFF'}}>
          RAKHA PDF <Text style={{color: '#f20000'}}>Reader</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
          onPress={scrollToScreen1}>
          <Text
            style={[
              styles.buttonText,
              currentScreen === 0 && styles.activeText,
            ]}>
            All
          </Text>
          {currentScreen === 0 && (
            <View
              style={{
                width: 16,
                height: 3,
                backgroundColor: '#FFF',
                alignSelf: 'center',
                borderRadius: 100,
                marginTop: 5,
              }}></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToScreen2}>
          <Text
            style={[
              styles.buttonText,
              currentScreen === 1 && styles.activeText,
            ]}>
            PDF
          </Text>
          {currentScreen === 1 && (
            <View
              style={{
                width: 16,
                height: 3,
                backgroundColor: '#FFF',
                alignSelf: 'center',
                borderRadius: 100,
                marginTop: 5,
              }}></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToScreen3}>
          <Text
            style={[
              styles.buttonText,
              currentScreen === 2 && styles.activeText,
            ]}>
            Word
          </Text>
          {currentScreen === 2 && (
            <View
              style={{
                width: 16,
                height: 3,
                backgroundColor: '#FFF',
                alignSelf: 'center',
                borderRadius: 100,
                marginTop: 5,
              }}></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToScreen4}>
          <Text
            style={[
              styles.buttonText,
              currentScreen === 3 && styles.activeText,
            ]}>
            Excel
          </Text>
          {currentScreen === 3 && (
            <View
              style={{
                width: 16,
                height: 3,
                backgroundColor: '#FFF',
                alignSelf: 'center',
                borderRadius: 100,
                marginTop: 5,
              }}></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToScreen5}>
          <Text
            style={[
              styles.buttonText,
              currentScreen === 4 && styles.activeText,
            ]}>
            PPT
          </Text>
          {currentScreen === 4 && (
            <View
              style={{
                width: 16,
                height: 3,
                backgroundColor: '#FFF',
                alignSelf: 'center',
                borderRadius: 100,
                marginTop: 5,
              }}></View>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll} // Detect scroll to update screen
        scrollEventThrottle={16}
        style={styles.scrollView}>
       
        <View style={[styles.screen, styles.screen1]}>
             <ScrollView>
        <FlatList
          data={Pddfss}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('PdfViewer', { pdfUrl: item.pdfUri })} // Navigate to PdfPreview with the PDF URL
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderColor: "#8e8e8e",
                  width: width * 0.9,
                  alignSelf: "center",
                }}>
                <Image
                  source={item.img}
                  style={{
                    height: height * 0.08,
                    width: width * 0.12,
                    resizeMode: 'contain',
                  }}
                />
                <View style={{ width: width * 0.73 }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 17,
                      color: '#FFF',
                      fontWeight: '600',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                      color: '#FFF',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.dat}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id} // Use a unique key for each item
        />
      </ScrollView>
        </View>

        {/* Screen 2 */}
        <View style={[styles.screen, styles.screen2]}>
        <ScrollView>
        <FlatList
          data={Pddfss}
          renderItem={({ item }) => {
            return (
              <View >
                {item.type === "pdf" &&
              <TouchableOpacity
                onPress={() => navigation.navigate('PdfViewer', { pdfUrl: item.pdfUri })} // Navigate to PdfPreview with the PDF URL
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderColor: "#8e8e8e",
                  width: width * 0.9,
                  alignSelf: "center",
                }}>
                <Image
                  source={item.img}
                  style={{
                    height: height * 0.08,
                    width: width * 0.12,
                    resizeMode: 'contain',
                  }}
                />
                <View style={{ width: width * 0.73 }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 17,
                      color: '#FFF',
                      fontWeight: '600',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                      color: '#FFF',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.dat}
                  </Text>
                </View>
              </TouchableOpacity>
              }
              </View>
            );
          }}
          keyExtractor={(item) => item.id} // Use a unique key for each item
        />
      </ScrollView>
        </View>

        {/* Screen 3 */}
        <View style={[styles.screen, styles.screen3]}>
        <ScrollView>
        <FlatList
          data={Pddfss}
          renderItem={({ item }) => {
            return (
              <View >
                {item.type === "docx" &&
              <TouchableOpacity
                onPress={() => navigation.navigate('PdfViewer', { pdfUrl: item.pdfUri })} // Navigate to PdfPreview with the PDF URL
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderColor: "#8e8e8e",
                  width: width * 0.9,
                  alignSelf: "center",
                }}>
                <Image
                  source={item.img}
                  style={{
                    height: height * 0.08,
                    width: width * 0.12,
                    resizeMode: 'contain',
                  }}
                />
                <View style={{ width: width * 0.73 }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 17,
                      color: '#FFF',
                      fontWeight: '600',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                      color: '#FFF',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.dat}
                  </Text>
                </View>
              </TouchableOpacity>
              }
              </View>
            );
          }}
          keyExtractor={(item) => item.id} // Use a unique key for each item
        />
      </ScrollView>
        </View>

        {/* Screen 4 */}
        <View style={[styles.screen, styles.screen4]}>
        <ScrollView>
        <FlatList
          data={Pddfss}
          renderItem={({ item }) => {
            return (
              <View >
                {item.type === "xlsx" &&
              <TouchableOpacity
                onPress={() => navigation.navigate('PdfViewer', { pdfUrl: item.pdfUri })} // Navigate to PdfPreview with the PDF URL
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderColor: "#8e8e8e",
                  width: width * 0.9,
                  alignSelf: "center",
                }}>
                <Image
                  source={item.img}
                  style={{
                    height: height * 0.08,
                    width: width * 0.12,
                    resizeMode: 'contain',
                  }}
                />
                <View style={{ width: width * 0.73 }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 17,
                      color: '#FFF',
                      fontWeight: '600',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                      color: '#FFF',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.dat}
                  </Text>
                </View>
              </TouchableOpacity>
              }
              </View>
            );
          }}
          keyExtractor={(item) => item.id} // Use a unique key for each item
        />
      </ScrollView>
        </View>

        {/* Screen 5 */}
        <View style={[styles.screen, styles.screen5]}>
        <ScrollView>
        <FlatList
          data={Pddfss}
          renderItem={({ item }) => {
            return (
              <View >
                {item.type === "pptx" &&
              <TouchableOpacity
                onPress={() => navigation.navigate('PdfViewer', { pdfUrl: item.pdfUri })} // Navigate to PdfPreview with the PDF URL
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderColor: "#8e8e8e",
                  width: width * 0.9,
                  alignSelf: "center",
                }}>
                <Image
                  source={item.img}
                  style={{
                    height: height * 0.08,
                    width: width * 0.12,
                    resizeMode: 'contain',
                  }}
                />
                <View style={{ width: width * 0.73 }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 17,
                      color: '#FFF',
                      fontWeight: '600',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                      color: '#FFF',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.dat}
                  </Text>
                </View>
              </TouchableOpacity>
              }
              </View>
            );
          }}
          keyExtractor={(item) => item.id} // Use a unique key for each item
        />
      </ScrollView>
        </View>
      </ScrollView>
      {/* <ScrollView>
        <FlatList
          data={Pddfss}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('PdfViewer', { pdfUrl: item.pdfUri })} // Navigate to PdfPreview with the PDF URL
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderColor: "#8e8e8e",
                  width: width * 0.9,
                  alignSelf: "center",
                }}>
                <Image
                  source={item.img}
                  style={{
                    height: height * 0.08,
                    width: width * 0.12,
                    resizeMode: 'contain',
                  }}
                />
                <View style={{ width: width * 0.73 }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 17,
                      color: '#FFF',
                      fontWeight: '600',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                      color: '#FFF',
                      width: width * 0.7,
                      textAlign: 'justify',
                    }}>
                    {item.dat}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id} // Use a unique key for each item
        />
      </ScrollView> */}
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginBottom: 20,
    borderBottomWidth:0.5,
    borderColor:"#8e8e8e"
  },
  buttonText: {
    fontSize: 18,
    color: 'gray', // Default text color
  },
  activeText: {
    color: '#FFF', // Active screen text color
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
    backgroundColor: '#141615',
  },
  screen2: {
    backgroundColor: '#141615',
  },
  screen3: {
    backgroundColor: '#141615',
  },
  screen4: {
    backgroundColor: '#141615',
  },
  screen5: {
    backgroundColor: '#141615',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Home;
