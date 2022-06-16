import React from "react"
import './style.css';
function Middle(){
    return(
        <>
        <div className="divide"></div>
        <div className="easy_login">
          <h2 className="h2">Easy Social Login</h2>
             
          <div className="signupIcon box">
          <img className="googleicon" src="./images/google.png" alt=""></img>
    
          <span className="googleiconText">
              <div className="golgle">
            Sign Up with <strong>Google</strong>
              </div>
          </span>
          </div>
             
          <div id="my-signin2"></div>
        </div><hr/>
        <div className="divide">
    <div className="account">
      <h2 className="h2">Don't have an account?</h2>
      <button type="button" className="number_btn button">
        Creat an Account
      </button>
      </div>
    </div> 
        </>
    )
}
export default Middle;