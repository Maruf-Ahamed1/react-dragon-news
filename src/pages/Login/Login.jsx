import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link,useLocation, useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";


const Login = () => {

 const {signIn} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  console.log('location i n the login page',location)



    const handleLogin = e =>{
        e.preventDefault ();
        // const email = e.target.email.value
        // const password = e.target.password.value
        // console.log(email,password)

        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        //_______create singIn_______-//
        signIn(email,password)
        .then(result=>{
          console.log(result.user)
          //______Navigate after login_____//
          navigate(location ?.state ? location.state : '/' );

        })
        .catch(error=>{
          console.error(error)
        })

    }

  return (
    <div>
      <Navbar></Navbar>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
  
          </div>
          <div className="card shrink-0 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mx-auto mb-5"> Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
