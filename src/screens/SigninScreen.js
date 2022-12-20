import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/Authform";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from '../context/AuthContext'

const SigninScreen = () => {
    const {state, signin,clearErrorMessage} = useContext(AuthContext)
    console.log(state);
    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur = {clearErrorMessage} />
           <AuthForm
            infoString = 'Sign in'
            submitTitle = 'Login'
            errorMessage = {state.errorMessage}
            onSubmit = {signin}
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