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
        default: return state
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {

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


const signout = (dispatch) => {
    return ({email, password}) => {

    }
}

export const { Provider, Context} = createDataContext(authReducer, 
                                            {signin, signout, signup}, 
                                            {
                                                token: null,
                                                errorMessage: ''
                                            })