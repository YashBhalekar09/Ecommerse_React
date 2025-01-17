import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
const title = "Register";
const socialTitle = "Login With Social Media";
const btntext = "SignUp";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];
const SignUp = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        seterrorMessage("Please provide valid email and password!");
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    //console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    //console.log(email,password,confirmPassword)
    if (password !== confirmPassword) {
      seterrorMessage("Password doesn't match!");
    } else {
      seterrorMessage("");
      createUser( email,password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Account created successfully!!");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          toast(`${error.message}`)
        });
    }
  };
  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password*"
                required
              />
            </div>
            {/* showing message */}
            <div>
              {errorMessage && (
                <div className="error-message text-danger mb-1">
                  {errorMessage}
                </div>
              )}
            </div>

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btntext}</span>
              </button>
            </div>
          </form>
          {/* account bottom */}
          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Have An Account? <Link to="/login">Login</Link>
            </span>
            <span className="or">
              <span>or</span>
            </span>
            {/* social login */}
            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justify-content-center">
              <li>
                <button className="github" onClick={handleRegister}>
                  <i className="icofont-github"></i>
                </button>
              </li>
              <li>
                <a href="/" className="facebook">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/" className="twitter">
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/" className="instagram">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
