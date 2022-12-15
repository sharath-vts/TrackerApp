import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthForm from "../components/Authform";
import NavLink from "../components/NavLink";
import {AuthContext} from '../context/AuthContext'

const SigninScreen = () => {
    // const {state, signin} = useContext(AuthContext)
    return (
        <View style={styles.container}>
           <AuthForm
            infoString = 'Sign in'
            submitTitle = 'Login'
            errorMessage = ''//{state.errorMessage}
            onSubmit = {() => {}}
           />
           <NavLink 
            routeName = 'SignupScreen'
            linkText = "Don't have an account, Sign up.."
           />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen