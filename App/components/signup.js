import React, {Component} from 'react';
import {StyleSheet,Navigator} from 'react-native';
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
     Form,
     Item,
     Label,
     Input
     
 } from 'native-base';


export default class SignUp extends Component{

  constructor(props){
    super(props)
    this.formSubmit=this.formSubmit.bind(this)
  }

  back(){
    console.log(this.props.navigator)
    this.props.navigator.push({
      id:"app",

    })
  }
  
  formSubmit(e){
    console.log('hello world')

    console.log(e.target.name.value)
   

  }
   
    

  render(){
    return (


               <Container>

                   <Header>
                    <Left>
                        <Button onPress={() => {this.back()}} transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Sign Up</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            
                        </Button>
                    </Right>
                </Header>






                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Name</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input name="email" />
                            </Item>
                            <Item  floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                            <Button onPress={(e) => {this.formSubmit(e)}}>
                              <Text>Sign me up </Text>
                            </Button>
                        </Form>
                    
                    </Content>
                </Container>

    );
  }
}