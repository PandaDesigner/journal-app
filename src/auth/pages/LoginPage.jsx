import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../Layout/AuthLayout';
import { Google } from '@mui/icons-material';
import { useForm } from '../../hooks';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'prfmaestre@google.com',
    password: '123456'
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn(email, password));
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item sx={{ width: '100%' }} xs={12}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="12saA****"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                sx={{ padding: '12px 12px' }}
                fullWidth
                type="submit"
              >
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                sx={{ padding: '12px 12px', spacing: '4px' }}
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography fontWeight={500} ml={1}>
                  {' '}
                  Google{' '}
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={'row'} justifyContent={'center'}>
            <Link component={RouterLink} to={'/auth/register'}>
              <Typography sx={{ cursor: 'pointer' }} color={'inherit'}>
                Crear una cuenta
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
