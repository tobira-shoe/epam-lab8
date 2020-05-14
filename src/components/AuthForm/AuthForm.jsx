import React, { Component } from 'react'
import v8n from 'v8n'

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCredentialsValid: false,
            login: {
                value: '',
                valid: true,
            },
            password: {
                value: '',
                valid: true,
            },
        };
    }

    handleLoginInput(e) {
        const { value } = e.target

        this.setState({
            login: {
               value,
               valid: true,
            }
        })
    }

    handlePasswordInput(e) {
        const { value } = e.target

        this.setState({
            password: {
               value,
               valid: true,
            }
        })
    }

    validate(e) {
        e.preventDefault()

        const { login, password } = this.state;

        const isCredentialsValid = login.value === 'andrev1' && password.value === 'andrev1'
        this.setState({
            isCredentialsValid,

            login: {
                value: login.value,
                valid: v8n().string().minLength(5).test(login.value),
            },

            password: {
                value: password.value,
                valid: v8n().string().minLength(5).test(password.value),
            },


        })


        if (isCredentialsValid) {
            // redirect to /dashboard
            this.props.onLogin()
        }
    }

    render() {
        const { login, password, isCredentialsValid } = this.state

        return (
            <form onSubmit={(e) => e.preventDefault()}>
                {(login.valid && password.valid && !isCredentialsValid) &&
                    <div className="invalid-feedback">
                        Credentials invalid
                    </div>
                }

                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">Login</label>
                    <input
                        type="text"
                        className={'form-control ' + (login.valid ? '' : 'is-invalid')}
                        onChange={(e) => this.handleLoginInput(e)}
                    />
                    {!login.valid &&
                        <div className="invalid-tooltip">
                            Login should be at least 5 length
                        </div>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className={'form-control ' + (password.valid ? '' : 'is-invalid')}
                        onChange={(e) => this.handlePasswordInput(e)}
                    />
                    {!password.valid &&
                        <div className="invalid-tooltip">
                            Password should be at least 5 length
                        </div>
                    }
                </div>

                <button
                    className="btn btn-primary"
                    onClick={(e) => this.validate(e)}
                >
                    Authorize
                </button>
            </form>
        )
    }
}

export default AuthForm