import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {signOut} from 'firebase/auth';
import {auth} from './firebase.config';
export default function Home({navigation}: any) {
  {
    return (
      <SafeAreaView>
        <Text> textInComponent </Text>
        <Button
          title="Logout"
          onPress={() => {
            signOut(auth).then(() => {
              navigation.navigate('CreateAcc');
            });
          }}
        />
      </SafeAreaView>
    );
  }
}
