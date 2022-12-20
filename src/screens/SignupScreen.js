import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/Authform";
import NavLink from "../components/NavLink";
import Spacer from '../components/Spacer'
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext)
   
    // useEffect(() => {
    //     tryLocalSignin()
    // }, [])

    return (
        <View style = {styles.container}>
            <NavigationEvents onWillBlur = {clearErrorMessage} />

            <AuthForm 
                infoString = 'Signup for tracker'
                submitTitle = 'Signup'
                errorMessage={state.errorMessage}
                onSubmit = {signup}
            />

            <NavLink 
            routeName = 'SigninScreen'
            linkText = 'Already have an account?? Sign in '
            />
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
        marginTop: 100
    },
    link: {
        color: 'blue'
    }

})

export default SignupScreen