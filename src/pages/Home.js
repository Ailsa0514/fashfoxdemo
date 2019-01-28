import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Headers from './../components/Headers';
import HomeSwiper from '../components/HomeSwiper'
import {Size} from '../commons/Utils'
class HomeScreen extends Component {
  constructor(){
    super()
    this.state = {
      iconDatas:[],
      clothData:[]
    }
  }
  getIcons(){
    fetch('http://192.168.2.23:3000/icon', {
      method: 'GET'
    })
    .then(response => response.json())
    .then((res)=>{
     this.setState({
       iconDatas:res.data
     })
    })
  }
  getGoods(){
    fetch('http://192.168.2.23:3000/clothes', {
      method: 'GET'
    })
    .then(response => response.json())
    .then((res)=>{
     this.setState({
      clothData:res.data
     })
    })
  }
  componentDidMount(){
    this.getIcons();
    this.getGoods();
  }
  render() {
   let data = this.state.iconDatas
   let cloth = this.state.clothData
    return (

      <ScrollView>
      
      <View style={styles.container}>
      <Headers/>
       <View style={styles.homeContainer}>
        {/**轮播图片 */}
           <HomeSwiper/>

           </View>
        {/**icons */}


           <View style={styles.iconsStyle}>

          {
            data.map((item) => {
              return (
                <View style={styles.iconStyle} key={item._id}>
                  <Image source={{uri : `http://192.168.2.23:3000${item.icon}`}} style={styles.imageStyle}/>
                    <Text>{item.price}</Text>
                    <Text>{item.title}</Text>
                </View>
              )
           })
          }
           </View>

           {/**列表详情 */}
              <FlatList
              data={cloth}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              numColumns={2}
              />
       </View>
       </ScrollView>
    );
  }
  _keyExtractor = (item, index) => item._id;
  _renderItem = ({item}) => (
  
    <TouchableOpacity
     onPress={()=>{ 
        this.props.navigation.navigate('Details', {
          itemId: item._id,
          otherParam:"no answer",
          })
        }
      } 
      style={styles.goodsItem} 
      key={item._id}>
         <Image source={{uri : `http://192.168.2.23:3000${item.images}`}} style={styles.imageGoods}/>
        <Text style={styles.price}>&yen;&nbsp;{item.price}</Text>
        <Text>{item.title}</Text>
    </TouchableOpacity>
  );

}


const styles = StyleSheet.create({

    // 头部开始
  
    container:{
        flex: 1,
    },
    text:{
        backgroundColor:"#029"
    },
    textColor:{
        color:"#fff"
    },
    homeContainer:{
     height:420
    },
    iconsStyle:{
      width:'100%',
      flexDirection:'row',
      padding:Size.width * .02,
      flexWrap: 'wrap',
      justifyContent:'center',
    },
    iconStyle:{
      width:Size.width * 0.18,
      height:Size.width * 0.18,
      margin:10,
      alignItems:'center',
    },
    imageStyle:{
      width:40,
      height:40
    },
    goodsList:{
      flexDirection:'row',
      width:"100%",
      flexWrap:'wrap',
      padding:5
    },
    goodsItem:{
      width:(Size.width-10)/2,
      alignItems:'center',
      marginTop:25
    },
    imageGoods:{
      width:220,
      height:220,
    },
    price:{
      marginTop:10
    }
  });

export default HomeScreen;