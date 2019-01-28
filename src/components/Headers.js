import React, {Component} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Feather';
// import { Header } from 'react-native-elements'

class Headers extends Component {
    render() {
        return (
            <View style={styles.navContainer}>
            
                <View>
                     {/*地区 */}
                    {/** 
                    <Text  style={styles.textColor}>ShangHai</Text>
                    <Text style={styles.textColor}>Scan</Text>
                    
                    */}

                    <Image source={require('../images/local.png')} style={{width:30,height:30}}></Image>
                </View>
                
                <View>
                     {/*标题 */}
                    <Text style={[styles.textColor,styles.textFont]}>FashionFox</Text>

                </View>

                <View>
                    {/*扫一扫 */}
                    <Image source={require('../images/sacn.png')} style={{width:30,height:30}}></Image>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    // 头部开始

    navContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems : "center",
        height:46,
        padding:10,
        backgroundColor:"rgb(4,127,116)",
    },
    textColor:{
        color:"#fff"
    },
    textFont:{
        fontSize:30
    }
})
export default Headers