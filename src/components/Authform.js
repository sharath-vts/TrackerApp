import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Input, Text } from "react-native-elements";
import Spacer from '../components/Spacer'

const AuthForm = ({infoString,submitTitle, errorMessage, onSubmit} )=> {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    return (
        <>
            <Spacer>
            <Text h3> {infoString}</Text>
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
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitTitle} onPress={() => onSubmit({email,password})}/>
            </Spacer>

        </>
    )
}

const styles = StyleSheet.create({})

export default AuthForm