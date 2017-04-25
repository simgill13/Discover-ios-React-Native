import React, {Component} from 'react';
import {AppRegistry,Text,View,Navigator} from 'react-native';
import store from './App/store';
import {Provider} from 'react-redux';


import App from './App/components/app';
import First from './App/components/first';
import Login from './App/components/login';
import SignUp from './App/components/signup';


export default class iosAppProject extends Component{

  renderScene(route, navigator){
    switch(route.id){
      case 'app':
        return(<App navigator={navigator} title="app"/>)
      case 'first':
        return(<First navigator={navigator} title="first"/>)
      case 'login':
        return(<Login navigator={navigator} title="login"/>)
      case 'signup':
        return(<SignUp navigator={navigator} title="signup"/>)
    }
  }
  render(){
    return(
      <Provider store={store}>
        <Navigator
          initialRoute={{id: 'app'}}
          renderScene= {this.renderScene}//method used for switching screens?
          // configureScreen={(route,routeStack) => Navigator.SceneConfigs.FloatFromRight}//sets some options for the screen
        />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('iosAppProject', () => iosAppProject);