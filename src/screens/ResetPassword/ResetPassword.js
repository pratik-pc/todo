import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';


const ResetPassword = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    console.warn("Send");

    navigation.navigate('NewPassword')  
  }




  const onLoginPress = () => {
    console.warn("Sign up")


    navigation.navigate('SignIn')
  }



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Enter your username"
          value={username}
          setValue={setUsername}
        />

        

        <CustomButton text="Send" onPress={onSendPressed} />
        

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

export default ResetPassword