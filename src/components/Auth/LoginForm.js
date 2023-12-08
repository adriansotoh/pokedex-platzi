//import liraries
import { useFormik } from "formik";
import * as Yup from "yup";

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { userDetails, user } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";

// create a component
const LoginForm = () => {
  const [error, setError] = useState("");
  const { logIn } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (data) => {
      console.log("data");
      console.log(data);
      setError("");
      const { username, password } = data;
      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correctos");
      } else {
        logIn(userDetails);
        console.log("Login correcto");
        console.log(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder={"Nombre de usuario"}
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder={"Contraseña"}
        style={styles.input}
        autoCapitalize={"none"}
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      {/* <Button title="Entrar" onPress={formik.handleSubmit} /> */}
      <Button
        text="Entrar"
        onPress={formik.handleSubmit}
        style={styles.button}
      />

      {Object.values(formik.errors).map((err, index) => (
        <Text key={index.toString()} style={styles.error}>
          {err}
        </Text>
      ))}
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

// define your styles
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
  button: {
    marginHorizontal: 12,
  },
});

//make this component available to the app
export default LoginForm;
