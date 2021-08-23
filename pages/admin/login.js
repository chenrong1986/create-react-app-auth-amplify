import * as React from 'react';
import Router from 'next/router'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePwd = this.onChangePwd.bind(this);
      }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email == '123456@qq.com' && this.state.password == '123456') {
            Router.push('/segmentFolder/segmentFolder');
        } else {
            alert('ユーザ名またはパスワードが不正です。');
        }
    }

    onChangeName(e) {
        this.setState({
            email: e.target.value
        } );
    }

    onChangePwd(e) {
        this.setState({
            password: e.target.value
        } );
    }

    render() {
        return (
            <div className="login_main">
                <form onSubmit={this.handleSubmit} className='form-inline'>
                <div className="form-group row">
                        <label className="col-sm-4 col-form-label text-md-right"><strong>E-Mail Address</strong></label>
                        <div className="col-md-6">
                            <input id="email" type="email" className="form-control{{ $errors->has('email') ? ' is-invalid' : '' }} login_input" name="email" value={this.state.email} onChange={this.onChangeName} required></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-4 col-form-label text-md-right"><strong>Password</strong></label>
                        <div className="col-md-6">
                            <input id="password" type="password" className="form-control{{ $errors->has('password') ? ' is-invalid' : '' }} login_input" name="password" value={this.state.password} onChange={this.onChangePwd} required></input>
                        </div>
                    </div>
                    <p><input type="submit" value="Submit"></input></p>
                </form>
            </div>
        )
    }
  }

  export default Login;