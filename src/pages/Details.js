import React, {Component} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'


import {Size } from "../commons/Utils"


class LogoTitle extends React.Component {
    render() {
        console.log("this.props",this.props)
      return (
        <View style={styles.logoTitle}>
            <Text style={styles.logoTitleName}>详情的页面</Text>
        </View>
      );
    }
  }


// 详情页面
class DetailsScreen extends Component {


    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <LogoTitle />,
      };
    
    constructor(){
        super();
        this.state = {
            detailsData:{}
        }
    }
    getDetails=() =>{
        
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        fetch('http://192.168.2.23:3000/clothes/'+itemId, {
            method: 'GET'
        })
        .then(response => response.json())
        .then((res)=>{
            this.setState({
                detailsData:res.data
            })
            navigation.setParams()
         })
    }

    componentDidMount(){

       console.log(this.props)
       this.getDetails();
    }
    render() {
       let details = this.state.detailsData;
       return (

            <View style={styles.container}>
            <ScrollView>

              <View style={styles.details}>
                <Image source = {{uri:`http://192.168.2.23:3000${details.images}`}} style={styles.imagCon}/>
                <Text >&yen;&nbsp;{details.price}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
                <Text>{details.title}</Text>
              </View>
              </ScrollView>
               
                <View style={styles.bottom}>
                    <View style={[styles.bgWhite,styles.bottomWidth]}>
                         <Text>&yen;&nbsp;{details.price}</Text>
                    </View>
                    <View style={[styles.bgYellow,styles.bottomWidth]}>
                         <Text>Add To Cart</Text>
                    </View>
                    <TouchableOpacity style={[styles.bg,styles.bottomWidth]} activeOpacity={.7} onPress={()=>{
                            console.log("提交订单")
                         }
                    }>
                         <Text style={styles.textColor}>Go Buy</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
  }


  const styles = StyleSheet.create({
    container:{
        flex: 1,
        position:"relative",
    },
    logoTitle:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    logoTitleName:{
        fontSize:30
    },
    details:{
        alignItems:'center',

    },
    text:{
    //    justifyContent:'center'
    },
    textColor:{
       
        color:"#fff",
      
    },
    bottomWidth:{
        width:Size.width/3,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    bgYellow:{
        backgroundColor:"#8a0",
    },
    bgWhite:{
        backgroundColor:"#fff",
    },
    bg:{
        backgroundColor:"#666",
    },
    imagCon:{
        width:Size.width,
        height:Size.width
    },
    bottom:{
        flexDirection:'row',
        marginTop:30,
        backgroundColor:"#fff",
        width:Size.width,
        position:"absolute",
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        bottom:0,
        borderColor:'#eee',
        borderTopWidth:1
    }
  });

export default DetailsScreen