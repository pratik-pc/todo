import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';


const ConfirmSignUp = () => {
  const [code, setCode] = useState('');


  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.warn("Register");


    navigation.navigate('SignIn')
  }

  const onResendPress = () => {
    console.warn("Resend")
  }


  const onLoginPress = () => {
    console.warn("Sign up")


    navigation.navigate('SignIn')
  }



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        

        

        

        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Login"
          onPress={onLoginPress}
          type="TERTIARY"
        />
    
    </View>
    </ScrollView>
   );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10
  }
})

export default ConfirmSignUp