import createDataContext from "./createDataContext"
import tracker from "../api/tracker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigatioRef";

const authReducer = (state, actions) => {
    switch (actions.type){
        case 'add_error':
            return {...state, errorMessage: actions.payload}
        case 'signup':
            return { errorMessage: '', token: actions.payload}
        case 'signup':
            return { errorMessage: '', token: actions.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ""}
        default: return state
    }
}

const signin = (dispatch) => {
    return async({email, password}) => {
        try {
        console.log(email, password);
        const response = await tracker.post('/signin', {email, password})
        console.log(response.data)
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signin', payload: response.data.token})
        navigate('TrackListScreen')

        } catch (err){
            dispatch({type:'add_error', payload: 'Something went wrong'})
        }
    }
}


const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            console.log(email, password);
            const response =  await tracker.post('/signup', {email, password})
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signup', payload: response.data.token})
            navigate('TrackListScreen')
        } catch(err) {
            dispatch({type:'add_error', payload: 'Something went wrong'})
        }
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {  
        dispatch({type: 'clear_error_message'})
    }
}

const tryLocalSignin = (dispatch) => async() =>{
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({type: 'signin', payload: token})
        navigate('TrackListScreen')
    } else {
        navigate('SignupScreen')
    }
    
}
const signout = (dispatch) => {
    return ({email, password}) => {

    }
}

export const { Provider, Context} = createDataContext(authReducer, 
                                            {signin, signout, signup, clearErrorMessage, tryLocalSignin}, 
                                            {
                                                token: null,
                                                errorMessage: ''
                                            })