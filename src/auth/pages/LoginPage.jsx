import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../Layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container gap={2}>
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
              placeholder="correo@correo.com"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                sx={{ padding: "12px 12px" }}
                fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                sx={{ padding: "12px 12px", spacing: "4px" }}
                fullWidth>
                <Google />
                <Typography fontWeight={500} ml={1}>
                  {" "}
                  Google{" "}
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent={"center"}>
            <Link component={RouterLink} to={"/auth/register"}>
              <Typography sx={{ cursor: "pointer" }} color={"inherit"}>
                Crear una cuenta
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  );
};
