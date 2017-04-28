import React, {Component} from 'react';
import {connect} from 'react-redux';
import SocialLogin from 'react-social-login';
import {StyleSheet,Linking,View,Text,Image} from 'react-native';
import { Button,Footer,FooterTab,Icon,Header,Item,Input,InputGroup,Content,Card,Left,CardItem,Thumbnail,logo,Body,Container,Right } from 'native-base';



class Home extends Component{

  constructor(props){
    super(props)
  

  }

 

  render(){
    return (
      <View style={styles.Home}>
        <Image style={styles.pic} source={require('../images/tes.jpg')}>
          <View style={styles.name} >
              <Text >
                Hi, {this.props.name} | 0 Points
              </Text>
          </View>
          <View style={styles.backgroundText}>
              <Text style={styles.nameText}>
                    DisCover<Icon name='home'/> 
              </Text>     
          </View>
        </Image>
      </View>

    
    );
  }
}

const styles = StyleSheet.create({
Home:{
  flex:1,
  height:640,
    width:380,
},
pic:{
    flex:1,
    height:null,
    width:null,
  },
name:{
  marginLeft:10,
  marginTop:40
},
backgroundText:{

  marginTop:160,
  flexDirection:'column',
  justifyContent:'center',

 },
 nameText:{
  marginLeft:80,
  fontSize:50,
  fontWeight:'normal',
  fontFamily:'ArialHebrew-Light'
 }
 

});
const mapStateToProps = (state) => ({
  name:state.name,
  email:state.email,
});



export default connect(mapStateToProps)(Home);




