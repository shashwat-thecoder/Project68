import * as React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import facebookScreen from './screens/fb'
import instagramScreen from './screens/in'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen : facebookScreen},
  Instagram : {screen : instagramScreen},
})

const AppContainer = createAppContainer(TabNavigator)