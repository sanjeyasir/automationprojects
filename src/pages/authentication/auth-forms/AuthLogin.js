import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { useNavigate } from 'react-router-dom';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import axios from "axios";

// ============================|| FIREBASE - LOGIN ||============================ //
const BACKEND_URL_ML =process.env.REACT_APP_BACKEND_URL_ML;
const AuthLogin = () => {
  
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();



  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
        

            let reqbody={
              "username":values.email,
              "password":values.password
            }
            let status;

            if(values.email=="sanjeyasir@gmail.com" && values.password=="sanjey"){
              status=201;
            }else{
              status=401;
            }
            // let status;
            // let response = await axios.post(`${BACKEND_URL_ML}/api/auth/authlogin`, reqbody);

            // if(response.status==201){
            //   status=201;
            //   let token= response.data.token_gen.token
            //   localStorage.setItem("login_token",token);

            // }else{
            //   status=401;

            // }
      


            if (status==201){
              localStorage.setItem("useremail",values.email);
              localStorage.setItem("username",values.email);
              navigate('main/dashboard');
              setStatus({ success: true });
            }else{
              setErrors({ submit:"Invalid password and username." });
              setStatus({ success: false });
              setSubmitting(false);
            }

            
          } catch (err) {
            console.log(err);

          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Email Address</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              

              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}

              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </AnimateButton>
              </Grid>

            
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
