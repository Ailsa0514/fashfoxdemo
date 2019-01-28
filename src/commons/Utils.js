import React, {Component} from 'react';
import {
  Dimensions
} from 'react-native'


module.exports = {
    Size:{
        width :Dimensions.get('window').width,
        height:Dimensions.get('window').height
    } 
}