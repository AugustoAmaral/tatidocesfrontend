import React from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { Formik } from "formik";
import * as Yup from "yup";

const styles = theme => ({
  formControl: {
    marginTop: theme.spacing(2)
  }
});

const Form = withStyles(styles)(
  ({ values, errors, isSubmitting, handleChange, handleBlur, handleSubmit, classes, id, ...props }) => {
    return (
      <form id={id} onSubmit={handleSubmit} noValidate>
        <TextField
          name="username"
          label="Usuário"
          variant="filled"
          value={values.username}
          helperText={errors.username}
          error={Boolean(errors.username)}
          onChange={handleChange}
          disabled={isSubmitting}
          className={classes.formControl}
          fullWidth
          required
          autoFocus
        />
        <TextField
          name="password"
          label="Senha"
          variant="filled"
          value={values.password}
          helperText={errors.password}
          error={Boolean(errors.password)}
          onChange={handleChange}
          disabled={isSubmitting}
          className={classes.formControl}
          fullWidth
          required
          type="password"
        />
      </form>
    );
  }
);

const SignInForm = ({ submitForm, id }) => {
  return (
    <Formik
      validateOnChange={false}
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Por favor, preencha o campo"),
        password: Yup.string().required("Por favor, preencha o campo")
      })}
      onSubmit={(values, { setSubmitting }) => {
        submitForm({ username: values.username, password: values.password });
        setSubmitting(false);
      }}
      render={formikProps => <Form {...formikProps} id={id} />}
    />
  );
};

SignInForm.defaultProps = {
  id: "formId"
};

export default SignInForm;
