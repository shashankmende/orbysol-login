

import  { Component } from 'react'
import './index.css'
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
  render() {
    return (
      <div className='forgot-password-bg-container'>
          <form className='login-form-container' onSubmit={this.onSubmitForm}>
            <div className='top-container'>
                <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716626929/logo_svg_imlnpw.svg'
                 alt='avhita'
                 className='login-logo-image'
                 />
                 <hr className='login-horizontal-line'/>
                 <p className='login-description'>Login Using Social media to get quick access</p>
            </div>
            <div className='bottom-container'>
                <h1 className='login-heading'>ForgotPassword</h1>
                <div className='label-input-container'>
                    <label htmlFor='email'  className='email-label'>Enter mail</label>
                    <input id='email' type='text' placeholder='email' className='email-input'/>

                </div>
                <div className='label-input-container'>
                    <label htmlFor='password'  className='email-label'>Enter new password</label>
                    <div className='password-container'>
                        <input id='password' type='text' placeholder='Password' className='password-input'/>
                        {/* {showPassword ? <MdOutlineVisibilityOff size={20} onClick={this.onClickVisibleIcon}/> : <MdOutlineVisibility size={20} onClick={this.onClickVisibleIcon} />} */}
                    </div>

                </div>

            <div className='forgot-password-container'>
                <p>Have Password?</p>
                <Link to='/'>
                <button type='button' className='change-password-button'>Login</button>
                </Link>
            </div>
            
            </div>
            <div className='login-button-container'>
                <button type='submit' className='login-button'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}


export default ForgotPassword