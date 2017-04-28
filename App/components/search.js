import React, {Component} from 'react';
import {connect} from 'react-redux';
import SocialLogin from 'react-social-login';
import {StyleSheet,Linking,View,Text,Image} from 'react-native';
import { Button,Footer,FooterTab,Icon,Header,Item,Input,InputGroup,Content,Card,Left,CardItem,Thumbnail,logo,Body,Container,Right } from 'native-base';
import CardImageExample from './results';



class Search extends Component{

  constructor(props){
    super(props)
  

  }
  
  begin(){
    this.props.navigator.push({
      id:"job",

    })
  
}

  render(){
    return (
      <View style={styles.mainContainer}>
       <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>


                  <Content>
                    <Card>
                        <CardItem>
                          <Body>
                            <Text>
                                Arts and Humanities
                            </Text>
                            <Button onPress={() => {this.begin()}} transparent>
                                <Text>select</Text>
                            </Button>
                          </Body>
                        </CardItem>
                    </Card>
                </Content>









            </Container>
           

      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainContainer:{
    flex:1,
    height:630,
    width:380,
    backgroundColor:'white'
  },
 

});
const mapStateToProps = (state) => ({
  name:state.name,
  email:state.email,
});



export default connect(mapStateToProps)(Search);

