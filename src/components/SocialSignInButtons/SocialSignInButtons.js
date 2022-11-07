import React from "react";
import { View, Text } from 'react-native';
import CustomButton from "../CustomButton/CustomButton";

const SocialSignInButtons = () => {

  const onSignInFacebook = () => {
    console.warn("Sign In Facebook")
  }

  const onSignInGoogle = () => {
    console.warn("Sign In Google")
  }

  return (
    <>
      <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />

        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
    </>
  )
};

export default SocialSignInButtons;