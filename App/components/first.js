import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container,
    Header,
    Content, 
    Left, 
    Right,
    Button,
    Icon,
    Body,
    Title,
    View,
    ListItem,
     Text, 
     CheckBox,
     Footer,
     FooterTab,
     CardItem,
     Card,
     
 } from 'native-base';


export default class First extends Component{

	constructor(props){
		super(props)
	}
	
  Back(){
    console.log('back button was clicked')
    this.props.navigator.push({
      id:"app",

    })
  }
	  

  render(){
  return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={() => {this.Back()}} transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Field</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                  <Card>
                        <CardItem header>
                            <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem header>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                   </Card>
                </Content>
               
            </Container>
        );
  }
}


