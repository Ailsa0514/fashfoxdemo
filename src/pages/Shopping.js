import React, {Component} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import Headers from './../components/Headers';
import {Size} from '../commons/Utils'

const scrollVieData = [

    {
        id:"rwffvd3453454354354353534",
        name: "Home"
    },
    {
        id:"fsfdsfsfdsfsdfsd53453435",
        name: "Shopping"
    },

    {
        id:"sfdfddf3243dfvcxwe345433",
        name: "Hotspot"
    },

    {
        id:"sfsdfdfvdvxvxvcvxcbbcnbc",
        name: "hello"
    },

    {
        id:"32fdfdsfsfsfsfsfsfdsfsdf",
        name: "China"
    },

    {
        id:"dvdft34543543534523432423",
        name: "123"
    },

    {
        id:"65656562323232fsdfdsfsdsd",
        name: "picth"
    },

    {
        id:"434242423423sdsgvdbgfnhgm",
        name: "curious"
    },

    {
        id:"43235345345rfsfdgdgdfsdfs",
        name: "undergo"
    },

    {
        id:"fadfsssfsdfsdfdsfsdfe3rrw",
        name: "overlook"
    },


]
class ShoppingScreen  extends React.Component {
    constructor(){
        super();
        this.state = {
            name:''
        }
    }

    render() {
      return (
        <View style={styles.container}>
   {/**头部 */}
             <View style={styles.scrollContainerView}>
                <ScrollView 
                    horizontal={true} 
                    contentContainerStyle={styles.scrollContainer}
                    showsHorizontalScrollIndicator = {false}
                    >
                {

                    scrollVieData.map((item) =>{
                        return(
                            <TouchableOpacity onPress={this.onView.bind(this,item.name)} key={item.id} >
                                <View style={styles.touchViewContainer}>
                                    <Text style={styles.textStyle}>{item.name}</Text>
                                 </View>
                            </TouchableOpacity>
                        )
                    })
                }
                </ScrollView>
            </View>
            <View>
                <Text>{this.state.name}</Text>
            </View>
        </View>
      );
    }

    onView(name){


        return(
          this.setState({
              name : name
          })
        ) 

    }
  }
  const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        // backgroundColor:'rgba(0,0,0,.2)'
    },
    scrollContainerView:{
        width:Size.width,
        // marginTop:10,
        backgroundColor:"rgb(4,127,116)",
    },
    scrollContainer : {
        padding:5,
        height:60,
        alignItems:"center"
    },
    textStyle:{
        color:"#fff",
        paddingRight:20,
    },
    touchView:{
        width:Size.width * 0.7,
        // margin:10,
        height:300,
        // backgroundColor:"#eee"
    },
    touchViewContainer:{
        // height:220,
        // margin:10
    }

    })
  export default ShoppingScreen