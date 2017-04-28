import React, {Component} from 'react';
import {connect} from 'react-redux';
import SocialLogin from 'react-social-login';
import {StyleSheet,Linking,View,Text,Image,ScrollView} from 'react-native';
import { Button,Footer,FooterTab,Icon,Header,Item,Input,InputGroup,Content,Card,Left,CardItem,Thumbnail,logo,Body,Container,Right,Title } from 'native-base';



class Pickjob extends Component{

  constructor(props){
    super(props)
      this.begin=this.begin.bind(this);


  }

 begin(){
    this.props.navigator.push({
      id:"job",

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
            <Title>Arts & Humanities</Title>
          </Body>
          <Right></Right>
        </Header> 

        <ScrollView>
       
          <Content>
                    <Card>
                        <CardItem>
                          <Body>
                            <Text onPress={() => {this.begin()}}>
                                Art Directors
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
                                Fashion Designers
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
                                Interior Designers
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
                                Industrial Designers
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
                                Multi-Media Arists and Animators
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


});
const mapStateToProps = (state) => ({
  name:state.name,
  email:state.email,
});



export default connect(mapStateToProps)(Pickjob);




