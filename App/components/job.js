import React, {Component} from 'react';
import {connect} from 'react-redux';
import Expo from 'expo';
import SocialLogin from 'react-social-login';
import {StyleSheet,Linking,View,Text,Image,ScrollView} from 'react-native';
import { Button,Footer,FooterTab,Icon,Header,Item,Input,InputGroup,Content,Card,Left,CardItem,Thumbnail,logo,Body,Container,Right,Title } from 'native-base';



class Job extends Component{

  constructor(props){
    super(props)


  }

 begin(){
    this.props.navigator.push({
      id:"loggedinapp",

    })
  
}

  render(){
    return (
      <View style={styles.Home}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Art Director</Title>
          </Body>
          <Right>
             <Icon onPress={() => {this.begin()}} name='home' />
          </Right>
        </Header> 

     
        <View style={styles.container}>
          <Expo.Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            muted={true}
            resizeMode="cover"
            repeat
            style={{ width: 380, height: 300 }}
          />
        </View>
        <Text style={styles.text}>
        Art directors are responsible for the visual style and images in magazines,
         newspapers, product packaging, and movie and television productions. 
         They create the overall design of a project and direct others who develop artwork and layouts.
        </Text>

      </View>

    
    );
  }
}

const styles = StyleSheet.create({
container: {
    
    alignItems: 'center',
    justifyContent: 'center',
   
    backgroundColor: '#rgba(0,0,0,0.9)',
  },
  text:{
    padding:20
  }

});
const mapStateToProps = (state) => ({
  name:state.name,
  email:state.email,
});



export default connect(mapStateToProps)(Job);




