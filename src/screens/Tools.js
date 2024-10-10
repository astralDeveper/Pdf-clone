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

const Tools = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#141615'}}>
      <View style={{padding: 15, width}}>
        <Text style={{fontSize: 25, fontWeight: '600', color: '#FFF'}}>
          RAKHA PDF <Text style={{color: '#f20000'}}>Reader</Text>
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#FFF',
            margin: 15,
            marginVertical: 5,
          }}>
          Convert
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: width * 0.2,height:height*0.13
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#242529',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/unnamed.webp')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <Text
            style={{
              color: '#616266',
              fontSize: 12,
              marginTop: 5,textAlign:"center"
            }}>
            Image to PDF
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: width * 0.2,height:height*0.13
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#242529',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/scan.png')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <Text
            style={{
              color: '#616266',
              fontSize: 12,
              marginTop: 5,textAlign:"center"
            }}>
            Scan to PDF
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: width * 0.2,height:height*0.13
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#242529',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/tow.png')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <Text
            style={{
              color: '#616266',
              fontSize: 12,
              marginTop: 5,textAlign:"center"
            }}>
            Word to PDF
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: width * 0.2,height:height*0.13
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#242529',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/imgto.png')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <Text
            style={{
              color: '#616266',
              fontSize: 12,
              marginTop: 5,textAlign:"center"
            }}>
            Image to Text
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#FFF',
            margin: 15,
            marginVertical: 5,
          }}>
          Edit
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginVertical: 10,flexWrap:"wrap"
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: width * 0.2,height:height*0.13
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#242529',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/anno.png')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <Text
            style={{
              color: '#616266',
              fontSize: 12,
              marginTop: 5,textAlign:"center"
            }}>
            Annotate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: width * 0.2,height:height*0.13
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#242529',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/sig.png')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <Text
            style={{
              color: '#616266',
              fontSize: 12,
              marginTop: 5,textAlign:"center"
            }}>
            Sign
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: width * 0.2,height:height*0.13
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#242529',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/mer.png')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <Text
            style={{
              color: '#616266',
              fontSize: 12,
              marginTop: 5,textAlign:"center"
            }}>
            Merge PDF
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: width * 0.2,height:height*0.13
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#242529',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/sp.png')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <Text
            style={{
              color: '#616266',
              fontSize: 12,
              marginTop: 5,textAlign:"center"
            }}>
            Split PDF
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: width * 0.2,height:height*0.13
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#242529',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/adt.png')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <Text
            style={{
              color: '#616266',
              fontSize: 12,
              marginTop: 5,textAlign:"center"
            }}>
            Add Text
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

export default Tools;
