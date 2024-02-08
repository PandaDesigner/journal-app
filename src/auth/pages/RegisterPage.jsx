import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../Layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      
        <form>
          <Grid container gap={2}>
            <Grid item sx={{ width: "100%" }} xs={12}>
              <TextField
                label="Nombre Completo"
                type="name"
                placeholder="Nombre y Apellido"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="correo"
                type="email"
                placeholder="correo@correo.com"
                fullWidth
              />
            </Grid>
            <Grid item sx={{ width: "100%" }} xs={12}>
              <TextField
                label="contraseña"
                type="email"
                placeholder="****as1235"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{ padding: "12px 12px" }}
                  fullWidth>
                  <Typography>Crear Cuenta</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction={"row"} justifyContent={"center"} gap={1}>
              <Typography fontWeight={500} ml={1}>
                {" "}
                ¿Ya tengo una cuenta? {" "}
              </Typography>
              <Link component={RouterLink} to={"/auth/login"}>
                <Typography sx={{ cursor: "pointer" }} color={"inherit"}>
                  ingresar
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </form>

    </AuthLayout>
  );
};
