import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppRegistry,Text,View,TouchableHighlight,StyleSheet,Image} from 'react-native';
import { Button,Footer,FooterTab,Icon,Badge } from 'native-base';
import Search from './search';
import Home from './home';
import Fields from './fields';



class LoggedInApp extends Component{
constructor(props) {
   super(props);
   this.state = {
      tab: 'home',
    }; 
    this.renderSelectedTab=this.renderSelectedTab.bind(this);
    }

begin(){
		console.log('i have presses begin')
		this.props.navigator.push({
			id:"fields",

		})
}
   
renderSelectedTab() {
   switch (this.state.tab) {
     case 'explore':
       return (console.log('hi'));
       break;
     case 'search':
       return (<Fields navigator={this.props.navigator}/>);
       break;
     
     default:
   }
  }
 

  render(){
  console.log(this.props.name)
    return(
     	<View style={styles.MainContainer} >
     		<Image style={styles.pic} source={require('../images/tes.jpg')}>
      			<View style={styles.insideimage2}>  
	   				<Text style={styles.content}>
	      				{this.renderSelectedTab()}
	   				</Text>
	   				<Text style={styles.name}>
                		Hi, {this.props.name} | 0 Points
              		</Text>
              		<Text style={styles.title}>
				       		DisCover<Icon name='home'/> 
				    </Text>  
              		
      			</View>
      		</Image>
      			<Footer >
                    <FooterTab>
                        <Button active={this.state.tab==='home'} onPress={() => this.setState({tab:'home'})}>
                            <Icon name='home'/><Text>Home</Text>
                        </Button>
                        <Button active={this.state.tab==='search'} onPress={() => this.setState({tab:'search'})}>
                            <Icon name="ios-search" /><Text>Discover</Text>
                        </Button>                       
                    </FooterTab>
                </Footer>   				 
     	</View>
    )
  }
}



const styles = StyleSheet.create({
MainContainer:{
flex:1
},
pic:{
flex:1,
height:null,
width:null,
},
insideimage2:{
 	flex:1,
},
content:{
},

name:{
 	marginTop:20,
 	marginLeft:10,	
},
title:{
	marginTop:200,
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



export default connect(mapStateToProps)(LoggedInApp);




