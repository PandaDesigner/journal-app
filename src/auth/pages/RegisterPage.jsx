import { Grid, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: 'inkvalledupar@gmail.com',
  password: '123456',
  displayName: 'Pedro Fernández'
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [
    (value) => value.length >= 6,
    'La contraseña debe tener mas de 6 caracteres'
  ],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
};

export const RegisterPage = () => {
  const {
    email,
    password,
    onInputChange,
    displayName,
    formState,
    emailValid,
    passwordValid,
    displayNameValid,
    isFormValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container gap={2}>
          <Grid item sx={{ width: '100%' }} xs={12}>
            <TextField
              label="Nombre Completo"
              type="name"
              placeholder="Nombre y Apellido"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={displayNameValid}
              helperText={displayNameValid}
            />
          </Grid>
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
              placeholder="****as1235"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ padding: '12px 12px' }}
                fullWidth
                type="submit"
              >
                <Typography>Crear Cuenta</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={'row'} justifyContent={'center'} gap={1}>
            <Typography fontWeight={500} ml={1}>
              {' '}
              ¿Ya tengo una cuenta?{' '}
            </Typography>
            <Link component={RouterLink} to={'/auth/login'}>
              <Typography sx={{ cursor: 'pointer' }} color={'inherit'}>
                ingresar
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
