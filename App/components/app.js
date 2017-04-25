import React, {Component} from 'react';
import {AppRegistry,Text,View,TouchableHighlight,StyleSheet,Image} from 'react-native';
import { Button,Footer,FooterTab,Icon } from 'native-base';


export default class App extends Component{
	constructor(props) {
    super(props);
    this.onPress=this.onPress.bind(this)
    this.signup=this.signup.bind(this)
    }

	onPress(){
		console.log(this.props.navigator)
		this.props.navigator.push({
			id:"login",

		})
	}
	signup(){
		console.log('sign in with google was pressed')
		this.props.navigator.push({
			id:"signup",

		})
	}

  render(){
    return(
     
    
      <View style={styles.MainContainer} >
      		<Image style={styles.pic} source={require('../images/tes.jpg')}>
		       <View style={styles.backgroundText}>
				    <Text style={styles.title}>
				       		DisCover<Icon name='home'/> 

				    </Text>     
		       </View>
		       <View style={styles.buttons} >
				   <Button onPress={() => {this.signup()}} style={{ marginTop: -20,width:230 }} light rounded>
                       <Text><Icon name='home'/>          Sign Up  </Text>
                    </Button>

		       </View>
		        <View style={styles.buttons} >
				   <Button  onPress={() => {this.onPress()}} style={{ marginBottom: 80,width:230,opacity:3  }}light rounded>
                        <Text><Icon name='home'/>          Log In  </Text>
                    </Button>
                    
		       </View>
		      
		       
		   </Image>
		  

      </View>
    )
  }
}





 // <Footer >
 //                    <FooterTab>
 //                        <Button onPress={() => {this.onPress()}}>
 //                            <Text>Search</Text>
 //                        </Button>
 //                        <Button>
 //                            <Text>Carrers</Text>
 //                        </Button>
 //                        <Button active>
 //                            <Text>Account</Text>
 //                        </Button>
 //                        <Button >
 //                            <Text>More</Text>
 //                        </Button>
 //                    </FooterTab>
 //  </Footer>


const styles = StyleSheet.create({
 MainContainer:{
 	flex:1
 },
 pic:{
 	flex:1,
 	height:null,
 	width:null,
 
 },
 backgroundText:{
 	flex:2,
 	flexDirection:'column',
 	justifyContent:'center',

 },
 buttons:{
 	flex:.4,
 	flexDirection:'column',
 	justifyContent:'center',
 	marginLeft: 80
 	
 	
 },
 title:{
 	marginLeft:80,
 	fontSize:50,
 	fontWeight:'normal',
 	fontFamily:'ArialHebrew-Light'
 }


 
});

