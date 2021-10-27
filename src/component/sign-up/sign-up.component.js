import { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import '../sign-in/custom-button.styles.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utlis';

class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const{ displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("Passwords don't Match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
        
            await createUserProfileDocument(user, { displayName });
            
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : '',
            });
        } catch(error){
            console.log(error.message, "sign up error");
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name] : value })
    }

    render(){
        const{ displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h1 className="title">Don't have an account?</h1>
                <span className="span">Register with your E-mail and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <button className="custom-button" type="submit">SIGN UP</button>
                </form>
            </div>
        )
    }
}

export default SignUp;