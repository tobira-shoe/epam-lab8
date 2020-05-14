import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AuthForm from '../../components/AuthForm/AuthForm'

class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authed: false
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.authed && <Redirect to="/dashboard" />}

                <AuthForm onLogin={() => {
                    this.setState({ authed: true, })
                }}/>
            </div>
        )
    }
}

export default Auth