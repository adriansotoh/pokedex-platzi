import React from "react";
import { View, Text } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

const Account = () => {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

export default Account;
