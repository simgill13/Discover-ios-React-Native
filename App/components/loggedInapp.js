import React, {Component} from 'react';
import {AppRegistry,Text,View,TouchableHighlight,StyleSheet,Image} from 'react-native';
import { Button,Footer,FooterTab,Icon,Badge } from 'native-base';
import Search from './search';


export default class LoggedInApp extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
      		tab: 'home',
    	}; 
    	this.renderSelectedTab=this.renderSelectedTab.bind(this);
  
    }


   
	
	renderSelectedTab() {
	    switch (this.state.tab) {
	      case 'home':
	        return (console.log('hi'));
	        break;
	      case 'search':
	        return (<Search/>);
	        break;
	  
	      default:
	    }
  	}
	

  	render(){	
	    return(
	      <View style={styles.MainContainer} >
	      		<Image style={styles.pic} source={require('../images/tes.jpg')}>
			       <View style={styles.insideimage1}>
					    <Text style={styles.title}>
					       		Hi, Simran | 0 Points 
					    </Text>    
			       </View>
			        <View style={styles.insideimage2}>  
					    <Text style={styles.content}>
					       		{this.renderSelectedTab()}
					    </Text>     
			       </View> 
			       <Footer >
                    <FooterTab>
                        <Button active={this.state.tab==='home'} onPress={() => this.setState({tab:'home'})}>
                            <Text>Home</Text>
                        </Button>
                        <Button active={this.state.tab==='search'} onPress={() => this.setState({tab:'search'})}>
                            <Text>Search</Text>
                        </Button>
                        <Button>
                            <Text>About</Text>
                        </Button>
                        <Button>
                            <Text>More</Text>
                        </Button>
                    </FooterTab>
                </Footer>   
			   </Image>	  
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
	insideimage1:{
 	flex:.4,
 	},
 	insideimage2:{
 	flex:4,

 	},
 	title:{
 		marginTop:40,
 		marginLeft:8,

 	},
 
});

