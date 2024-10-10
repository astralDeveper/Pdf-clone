import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';




import Home from '../screens/Home';
import Recents from '../screens/Recents';
import Home_Icon, { Recent_Icon, Tools_Icon } from '../assets';
import Tools from '../screens/Tools';


export const BottomTabsIcons = Color => [
    <Home_Icon Color={Color} />,
    <Recent_Icon Color={Color} />,
    <Tools_Icon Color={Color} />,
  ];


function MyTabBar({state, descriptors, navigation}) {




    
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#242529',
        width: '100%',
        justifyContent: 'space-around',
        padding: 6,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key} // Added key prop for each TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{alignItems: 'center'}} // Center align the icon and text
          >
            {BottomTabsIcons(isFocused ? '#e73b44' : '#f4f5f6')[index]}
            <Text
              style={{color: isFocused ? '#e73b44' : '#f4f5f6', marginTop: 2,fontSize:12}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="All files">
      <Tab.Screen name="All files" component={Home} />
      <Tab.Screen name="Recent" component={Recents} />
      <Tab.Screen name="Tools" component={Tools} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
