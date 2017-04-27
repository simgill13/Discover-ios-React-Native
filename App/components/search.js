import React, {Component} from 'react';
import SocialLogin from 'react-social-login';
import {StyleSheet,Linking,View,Text} from 'react-native';
import { Button,Footer,FooterTab,Icon,Header,Item,Input } from 'native-base';
var SearchBar = require('react-native-search-bar');



export default class Search extends Component{

  constructor(props){
    super(props)
  }

 
 

  render(){
    return (
      <View style={styles.pic}>
      <SearchBar
    ref='searchBar'
    placeholder='Search'
   
    />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({

   pic:{
  marginTop:30,
  height:100,
  width:380,
 
 }

 
});
