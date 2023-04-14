import React, { Component } from 'react';
import './Login.scss';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value);
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        // console.log(event.target.value);
    }

    handleShowAndHidePassword = () => {
        this.setState({
            isShowPassword : !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className="login-container">
            <div className="background">
                <div className="login-wrap p-l-55 p-r-55 p-t-40 p-b-54">
                <div className="login-form">
                    <div className="login-form-img"></div>
                    <div className="input-wrap validate-input m-b-23" data-validate="Username is reauired">
                    <span className="input-label">Tài khoản</span>
                    <input 
                        className="input"
                        type="text"
                        name="username"
                        placeholder="Nhập tên tài khoản"
                        value = {this.state.username}
                        onChange = {(event) => this.handleOnChangeUsername(event)}
                    />
                    <span className="input-focus" data-symbol="&#10146;" />
                    </div>
                    <div className="input-wrap validate-input" data-validate="Password is required">
                    <span className="input-label">Mật khẩu</span>
                        <input 
                            className="input" 
                            type={this.state.isShowPassword ? 'text' : 'password'}
                            name="pass" 
                            placeholder="Nhập mật khẩu"
                            value= {this.state.password}
                            onChange = {(event) => this.handleOnChangePassword(event)}
                        />
                        <span className="input-focus" data-symbol="&#10146;" />
                        <span
                            onClick={() => {this.handleShowAndHidePassword()}}
                        >
                            <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                        </span>
                    </div>
                    <div className='col-12' style={{color : 'red'}}>
                        {this.state.errMessage}    
                    </div>
                    <div className="text-right p-t-8 p-b-31">
                    {/* <a href="#">
                         Forgot password? 
                    </a> */}
                    </div>
                    <div className="login-container-form-btn">
                    <div className="login-wrap-form-btn">
                        <div className="login-form-bgbtn" />
                        <button 
                        className="login-form-btn"
                        onClick={()=>{this.handleLogin()}}
                        >
                        Đăng nhập
                        </button>
                    </div>
                    </div> 
                </div>
                </div>
                <div className="background1"></div> 
                <div className="background2"></div> 
                <div className="row content-bottom">
                    <div className="logo1"></div> 
                    <div className="text-on-bg">Công Ty Cổ Phần Thiết Lập Công Nghệ và Thiết Bị Systems</div> 

                </div>
                <div className="logo2"></div> 
                <button 
                    className="contact-btn"
                    onClick={()=>{this.handleLogin()}}
                    >
                        Liên hệ
                </button>
            </div>
        </div>
        )
    }
}

export default Login
