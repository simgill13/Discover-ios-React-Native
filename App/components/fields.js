import React, {Component} from 'react';
import {connect} from 'react-redux';
import SocialLogin from 'react-social-login';
import {StyleSheet,Linking,View,Text,Image,ScrollView} from 'react-native';
import { Button,Footer,FooterTab,Icon,Header,Item,Input,InputGroup,Content,Card,Left,CardItem,Thumbnail,logo,Body,Container,Right,Title } from 'native-base';



class Fields extends Component{

  constructor(props){
    super(props)
      this.begin=this.begin.bind(this);


  }

 begin(){
    this.props.navigator.push({
      id:"pickjob",

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
            <Title>categories</Title>
          </Body>
          <Right></Right>
        </Header> 

        <ScrollView>
       
          <Content>
                    <Card>
                        <CardItem>
                          <Body>
                            <Text onPress={() => {this.begin()}}>
                                Arts and Humanities
                            </Text>
                          </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Content>
                    <Card>
                        <CardItem>
                          <Body>
                            <Text>
                                Health and Medicine
                            </Text>
                          </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Content>
                    <Card>
                        <CardItem>
                          <Body>
                            <Text>
                                Social Sciences
                            </Text>
                          </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Content>
                    <Card>
                        <CardItem>
                          <Body>
                            <Text>
                                Business
                            </Text>
                          </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Content>
                    <Card>
                        <CardItem>
                          <Body>
                            <Text>
                                Science Math and Technology
                            </Text>
                          </Body>
                        </CardItem>
                    </Card>
                </Content>

        </ScrollView>



      </View>

    
    );
  }
}

const styles = StyleSheet.create({

  Home:{
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



export default connect(mapStateToProps)(Fields);




