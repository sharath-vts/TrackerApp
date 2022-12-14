import React, { useState } from "react";
import { View } from "react-native";
import {StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    return (
        <View style = {styles.container}>
            <Spacer>
            <Text h3> Signup for tracker</Text>
            </Spacer>
            <Spacer />
            <Input 
                label = "Email" 
                value={email} 
                onChangeText = {setEmail}
                autoCapitalize = "none"
                autoCorrect = {false}
                />
            <Input 
                label = "Password" 
                value = {password}
                autoCapitalize = 'none'
                autoCorrect = {false}
                onChangeText = { (text) => setPassword(text)}
                secureTextEntry = {true}
                />
            <Spacer>
                <Button title="Sign up" onPress={() => console.log(email, password)}/>
            </Spacer>
        </View>
   
    )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        marginTop: 100
    }
})

export default SignupScreen