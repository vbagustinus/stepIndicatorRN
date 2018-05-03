/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import { ViewPager } from 'rn-viewpager';

import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const PAGES = ['Page 1','Page 2','Page 3','Page 4','Page 5'];

const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#7eaec4',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#7eaec4',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#7eaec4',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#7eaec4',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#7eaec4'
}

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      currentPage:0,
      types3: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},{label: 'param4', value: 3}],
      value3: 0,
      value3Index: 0,
    }
  }

  componentWillReceiveProps(nextProps,nextState) {
    if(nextState.currentPage != this.state.currentPage) {
      if(this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
  }

  render() {
    console.log(this.state);
    
    return (
      <View style={styles.container}>
        <View style={styles.component}>
            <RadioForm formHorizontal={true} animation={true} >
              {this.state.types3.map((obj, i) => {
                var onPress = (value, index) => {
                    this.setState({
                      value3: value,
                      value3Index: index
                    })
                  }
                return (
                  <RadioButton labelHorizontal={true} key={i} >
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={i <= this.state.value3Index}
                      onPress={onPress}
                      buttonInnerColor={i <= this.state.value3 ? '#f39c12' :'black'}
                      buttonOuterColor={i <= this.state.value3Index ? '#2196f3' : '#000'}
                      buttonSize={15}
                      buttonStyle={{}}
                      buttonWrapStyle={{marginLeft: 0}}
                    />
                    {i < 3 ?
                      <View
                        style={{
                          backgroundColor: i < this.state.value3 ? '#2196f3' :'black',
                          height: 3,
                          width: 50,
                          // marginRight: 10,
                        }}
                      ></View>: null
                    }
                  </RadioButton>
                )
              })}
            </RadioForm>
            <Text>selected: {this.state.types3[this.state.value3Index].label}</Text>
          </View>
        {/* <View style={styles.stepIndicator}>
          <StepIndicator 
            stepCount={4} 
            customStyles={thirdIndicatorStyles} 
            currentPosition={this.state.currentPage} 
            labels={[1,2,3,4]}
            onPress={
              ()=> {
                console.log(this);
                
              }
            }
            renderStepIndicator={
              ()=> {
                ()=> {
                  console.log('STEP', this);
                  
                }
              }
            }
          />
        </View>
        <ViewPager
          style={{flexGrow:1}}
          ref={(viewPager) => {this.viewPager = viewPager}}
          onPageSelected={(page) => {this.setState({currentPage:page.position})}}
          >
            {PAGES.map((page) => this.renderViewPagerPage(page))}
          </ViewPager>
      </View> */}
      </View>
    );
  }

  renderViewPagerPage = (data) => {
    return(
      <View style={styles.page}>
        <Text>{data}</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical:50,
  },
  page: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
