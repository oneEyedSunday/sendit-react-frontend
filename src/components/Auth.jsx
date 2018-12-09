import React, { PureComponent } from 'react'
import './forms.css';
import './auth.css';

const getText = context => {
    let textObj = {
        headerText: 'sign up',
        alternateText: 'sign in',
        alternateLink: 'signin',
        alternatePrompt: 'Have An Account?'
    }

    if (context.toLowerCase()  === '/signin') {
        textObj = {
            headerText: 'sign in',
            alternateText: 'sign up',
            alternateLink: 'signup',
            alternatePrompt: 'No Account yet?'
        }
    }

    return textObj;
}

export default class Auth extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
        };
    }

    handleChange = evt => {
        const newData = {
            ...this.state,
            [evt.target.name]: evt.target.value
        }
        this.setState(newData);
    }

    submitForm = evt => {
        evt.preventDefault();
        this.props.history.push('/parcels')
    }

    render(){
        const { headerText, alternateLink, alternatePrompt, alternateText } = getText(this.props.location.pathname);
        return (
            <div className="card my-2">
                <form action="#" className="auth form" onSubmit={this.submitForm}>
                    <h2 className="text-center">{ headerText }</h2>
                    { 
                        this.props.location.pathname.toLowerCase() === '/signup' ? 
                            (
                                <React.Fragment>
                                    <div className="form__field flex flex justify-content__center align-items__center">
                                        <input type="text"  name="firstname" placeholder="First Name"
                                        className="auth four-fifths"
                                        value={this.state.firstname}
                                        onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form__field flex flex justify-content__center align-items__center">
                                        <input type="text"  name="lastname" placeholder="Last Name"
                                        className="auth 
                                        four-fifths"
                                        value={this.state.lastname}
                                        onChange={this.handleChange}
                                        />
                                    </div>
                                </React.Fragment>   
                            ): ''
                    }
                    
                    
                    <div className="form__field flex flex justify-content__center align-items__center">
                        <input type="email"  name="email" placeholder="Email address"
                        className="auth four-fifths"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form__field flex justify-content__center align-items__center">
                        <input type="password" placeholder="Password" name="password"
                        className="auth four-fifths"
                        autoComplete="new-password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                    </div> 
                    {
                            this.props.location.pathname.toLowerCase() === '/signup' ? (
                                <div className="form__field flex justify-content__center align-items__center">
                                    <input type="password" placeholder="Confirm Password" name="confirm_password"
                                    className="auth four-fifths"
                                    autoComplete="new-password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                    />
                                </div>
                            ) : ''
                        
                    }
            
                    <div className="form__field flex justify-content__center align-items__center">
                            <button type="submit" className="auth button four-fifths">{ headerText }</button>
                    </div>
                    <p className="text-center larger--text">{ alternatePrompt } &nbsp;
                        <a href={ alternateLink } className="link">{ alternateText }</a>
                    </p>
                </form>
            </div>
        )
    }
};
