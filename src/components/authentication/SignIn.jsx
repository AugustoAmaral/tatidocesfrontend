import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import SignInForm from "./SignInForm";
import Logo from "../../images/logo sem fundo.png";

const useStyles = makeStyles(theme => ({
  submit: {
    marginTop: theme.spacing(3)
  },
  secondaryButtons: {
    marginTop: theme.spacing(1)
  },
  logo: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  fieldsMargin: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <img className={classes.logo} alt="Tizir" src={Logo} height="250px" />
        </Grid>
        <Grid item className={classes.fieldsMargin}>
          <SignInForm id="signIn" onSubmit={formData => console.log(formData)} />
          <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary" form="signIn">
            Entrar
          </Button>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Button size="small" className={classes.secondaryButtons} onClick={() => console.log("lostPassword")}>
              Perdi a senha
            </Button>
            <Button size="small" className={classes.secondaryButtons} onClick={() => console.log("signUp")}>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
