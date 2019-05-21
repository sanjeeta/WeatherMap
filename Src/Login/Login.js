import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   
}
 handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
}
render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" value={username}/>
                        
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password}/>
                       
                    </div>
                    <div >
                        <button >Login</button>
                        
                        
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const xLoginPage = connect(mapStateToProps)(LoginPage);
export { xLoginPage as LoginPage }; 