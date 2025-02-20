import './index.css'
import LoginForm from '../../../Components/LoginForm';
const LoginPage = () => {

  return (
    <div className='login-page min-vh-100 py-5'>
      <div className="container d-flex align-items-center justify-content-center">
      <div className="login-box bg-white">
        <div className="login-logo mx-auto mb-2">
          <h1 className='text-center mb-3'>Login</h1>
          <p className='text-center mb-4 mb-md-5'>Welcome back! Please log in to access your account.</p>
        </div>
        <LoginForm />
      </div>
      </div>
    </div>
  )
}

export default LoginPage