import { userConstants } from '../_Constant';

export const userActions = {
    login,
    register,
    
};

function logn(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
};

function registr(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        logn(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                   
                },
                error => {
                    dispatch(failure(error.toString()));
                   
                }
            );
};
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }


}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        registr(user)
            .then(
                user => { 
                    dispatch(success());
                   
                },
                error => {
                    dispatch(failure(error.toString()));
                   
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}