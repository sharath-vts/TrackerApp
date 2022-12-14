import createDataContext from "./createDataContext"

const authReducer = (state, actions) => {
    switch (actions.type){
        default: return state
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {

    }
}


const signup = (dispatch) => {
    return ({email, password}) => {

    }
}


const signout = (dispatch) => {
    return ({email, password}) => {

    }
}

export const { Provider, Context} = createDataContext(authReducer, 
                                            {signin, signout, signup}, 
                                            {isSignedIn: false})