import { Component } from 'react';
import FormInput from '../form-input/form-input.component'
import { auth, signInWithGoogle }  from '../../firebase/firebase.utlis'
import './sign-in.styles.scss';
import './custom-button.styles.scss';

class SignIn extends Component {
    constructor(){
        super();

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email : '', password : ''})
        } catch(error) {
            console.log(error.message, "sign in message");
        }
        
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name] : value});
       }
    render(){
        return(
            <div className="sign-in">
                <h1>Already have an account?</h1>
                <span className="span">Sign in using your E-mail and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        />
                    <FormInput
                        name="password" 
                        type="password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        />
                    <div className="button">
                        <button className="custom-button" type="submit">SIGN IN</button>
                        <button className="google-signin custom-button" onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                    </div>
                    
                </form>
    
            </div>
        )
    }
}

export default SignIn;