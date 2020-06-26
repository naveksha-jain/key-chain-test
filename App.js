
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TouchableOpacity
} from 'react-native';
import * as Keychain from "react-native-keychain"

const App =()=> {

  const setKeyChainLoginData = (username, password) =>
  Keychain.setGenericPassword(username, password,{accessControl:Keychain.ACCESS_CONTROL.USER_PRESENCE,authenticationPrompt:{title:'secure'}}) // Generic Password, service argument optional
    .then(() => {
      return true
    })
    .catch((error) => {
      console.warn('error',error)
      return null;
    });

const getKeyChainLoginData = () =>{
  console.warn("callled78")
  Keychain.getGenericPassword({accessControl:Keychain.ACCESS_CONTROL.USER_PRESENCE,authenticationPrompt:{title:'secure'}}) // service argument optional
    .then((credentials) => {
      console.warn("cred>>>>>",credentials)
    return  credentials
    })
    .catch((error) => {
      console.log('error',error)
      return null;
    });
  }

  return (
    <>
    <TouchableOpacity style={{marginTop:50,width:100,marginLeft:20,backgroundColor:'coral'}} onPress={()=>{setKeyChainLoginData('nav','jain')}}>
     <Text>Set credentials</Text>
    </TouchableOpacity>
     <TouchableOpacity style={{marginTop:50,width:100,marginLeft:20,backgroundColor:'coral'}} onPress={()=>{getKeyChainLoginData()}}>
     <Text>Get credentials </Text>
    </TouchableOpacity>
    </>
  );
};

export default App;
