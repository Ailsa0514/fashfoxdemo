/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation"
import Ionicons from 'react-native-vector-icons/Feather';
// 创建Tab底部组将


// 引入组件
import HomeScreen from './src/pages/Home'
import ShoppingScreen from "./src/pages/Shopping"
import DetailsScreen from "./src/pages/Details"


class CartScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CartScreen!</Text>
      </View>
    );
  }
}

class FindScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FindScreen!</Text>
      </View>
    );
  }
}

class UserScreen extends React.Component {

  render() {
    // console.log( this.props.navigation.state.routeName)
    let routeName = this.props.navigation.state.routeName
    return (
      <View>
         <View style={{width:"100%",height:50,borderBottomWidth:1,borderBottomColor:"red",justifyContent:'center',alignItems:'center'}}>
           <Text style={{fontSize:30}}>{routeName}</Text>
         </View>
        <Text>UserScreen!</Text>
      </View>
    );
  }
}



const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Shopping: ShoppingScreen,
    Cart:CartScreen,
    Find:FindScreen,
    User:UserScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        }
        if (routeName === 'Shopping') {
          iconName = "shopping-bag";
        }
        if (routeName === 'Cart') {
          iconName = "shopping-cart";
        }
        if (routeName === 'Find') {
          iconName = "file";
        }
        if (routeName === 'User') {
          iconName = "user";
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },

    }),
    tabBarOptions: {
      activeTintColor: 'rgb(4,127,116)',
      inactiveTintColor: 'gray',
    },
  }
);

const  AppStack = createStackNavigator({
  bottomTabNavigator:{
    screen : bottomTabNavigator,
    navigationOptions:{
      header :null
    }
  },
  Details:{
    screen : DetailsScreen,
  },
  initialRouteName:'bottomTabNavigator'
})


const AppStackContainer =  createAppContainer(AppStack);



export default class App extends Component{
  render() {
    return (
     <AppStackContainer />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
