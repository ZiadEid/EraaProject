import './index.css';
import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from './LoginSchema';

const LoginForm = () => {
  // show password state and function
  const [visiblePassword, setVisiblePassword] = useState(false);
  const passwordInput = useRef(null);

  const showPassword = () => {
    if (!visiblePassword) {
      passwordInput.current.type = 'text';
      setVisiblePassword(!visiblePassword);
    } else {
      passwordInput.current.type = 'password';
      setVisiblePassword(!visiblePassword);
    }
  };

  // form on submit function
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  // formik hook for handling login form actions
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit
  });

  return (
    <form
      onSubmit={handleSubmit}
      className='login-form d-flex flex-wrap flex-column gap-3 gap-md-4'
    >
      <label htmlFor="email">Email</label>
      <input
        id='email'
        type="email"
        name='email'
        placeholder='Enter Your Email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className='border ps-3'
      />
      {errors.email && touched.email && <p className='error text-danger'>{errors.email}</p>}

      <label htmlFor="Password">Password</label>
      <div className="position-relative px-0 d-flex align-items-center justify-content-start">
        <input
          id='Password'
          type="password"
          name='password'
          placeholder='Enter Your Password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className='border border-end-0 ps-3 rounded-end-0'
          ref={passwordInput}
        />
        {visiblePassword ? (
          <svg
            onClick={showPassword}
            className="eyed position-absolute top-0 bottom-0 border-start-0"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
            />
          </svg>
        ) : (
          <svg
            onClick={showPassword}
            className="eyed position-absolute top-0 bottom-0 border-start-0"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z"
            />
          </svg>
        )}
      </div>
      {errors.password && touched.password && <p className='error text-danger'>{errors.password}</p>}
      <a href={'#'}>Forgot Password?</a>
      <div className="remember-me d-flex align-items-center gap-2 position-relative">
        <input type="checkbox" name="rememberMe" id="rememberMe" />
        <label htmlFor="rememberMe" className='check-mark position-absolute top-0 start-0 overflow-hidden'></label>
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <button disabled={isSubmitting} type='submit' className='text-white'>
        Login
      </button>
      <span className='or-divider position-relative text-center'>OR</span>
      <a className='text-decoration-underline mx-auto' href={'#'}>Don’t have an account? Sign Up</a>
    </form>
  );
};

export default LoginForm;
