import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native'

  import Swiper from 'react-native-swiper';

  const styles = StyleSheet.create({
    wrapper: {
      // height:320
    },

    imageStyle:{
      width:'100%',
      height:'100%'
    }
  })
  
  class HomeSwiper extends Component {
    constructor(props) {
      super(props);
      this.state = {  };
    }
    render() {
      return (
        <Swiper 
        style={styles.wrapper} 
        autoplay={true}
        loop={true} 
        dot={<View style={{           //未选中的圆点样式
          backgroundColor: 'rgba(0,0,0,.2)',
          width: 10,
          height: 10,
          borderRadius: 10,
          marginLeft: 10,
          marginRight: 9,
          marginTop: 9,
          marginBottom: 9,
         }}/>} 
         activeDot={<View style={{    //选中的圆点样式
          backgroundColor: 'rgba(0,0,0,.5)',
          width: 10,
          height: 10,
          borderRadius: 10,
          marginLeft: 10,
          marginRight: 9,
          marginTop: 9,
          marginBottom: 9,
          }}/>}>
          <View>
              <Image source = {require("../images/84.jpg")} style={styles.imageStyle}/>
          </View>
          <View>
               <Image source = {require("../images/4342.jpg")} style={styles.imageStyle}/>
          </View>
          <View>
              <Image source = {require("../images/54354.jpg")} style={styles.imageStyle}/>
          </View>

        </Swiper>

      );
    }
  }
  
  export default HomeSwiper;