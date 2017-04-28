import React, {Component} from 'react';
import {AppRegistry,Text,View,Navigator} from 'react-native';
import store from './App/store';
import {Provider} from 'react-redux';


import App from './App/components/app';
import First from './App/components/first';
import Login from './App/components/login';
import SignUp from './App/components/signup';
import LoggedInApp from './App/components/loggedInapp';
import Search from './App/components/search';
import CardImageExample from './App/components/results';
import Fields from './App/components/fields';
import Pickjob from './App/components/pickjob';
import Job from './App/components/job';


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
      case 'loggedinapp':
        return(<LoggedInApp navigator={navigator} title="loggedinapp"/>)
      case 'search':
        return(<Search navigator={navigator} title="search"/>)
      case 'CardImageExample':
        return(<CardImageExample navigator={navigator} title="CardImageExample"/>)
      case 'fields':
        return(<Fields navigator={navigator} title="fields"/>)
      case 'pickjob':
        return(<Pickjob navigator={navigator} title="pickjob"/>)
      case 'job':
        return(<Job navigator={navigator} title="job"/>)
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