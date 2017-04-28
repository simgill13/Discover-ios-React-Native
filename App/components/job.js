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
            <Title>job</Title>
          </Body>
          <Right>
             <Icon onPress={() => {this.begin()}} name='home' />
          </Right>
        </Header> 

     

<Expo.Video
          source={{ uri: "https://youtu.be/oYAQ6p6brrY" }}
          rate={1.0}
         
          volume={1.0}
          muted={false}
          resizeMode="cover"
          repeat
          style={{ width: 300, height: 300 }}
        />

      </View>

    
    );
  }
}

const styles = StyleSheet.create({


});
const mapStateToProps = (state) => ({
  name:state.name,
  email:state.email,
});



export default connect(mapStateToProps)(Job);




