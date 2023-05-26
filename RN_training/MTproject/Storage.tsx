import React, {useContext, useEffect} from 'react';
import {storage} from '../FireBaseAuth/firebase.config';
import {deleteObject, ref, uploadBytesResumable} from 'firebase/storage';
import {Alert} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Toast from 'react-native-root-toast';
const FirebaseUpload = async (image: string | any, EmpId: any) => {
  const storageRef: any = ref(storage, `${EmpId}/${image.assets[0].fileName}`);
  const file = image.assets[0].uri;
  const blobImage: any = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', file, true);
    xhr.send(null);
  });
  const metadata = {
    contentType: 'image/jpeg',
  };
  const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);
  uploadTask
    .then(() => {
      Toast.show('Image uploaded successfully', {
        duration: Toast.durations.SHORT,
        backgroundColor: '#323E77',
        textColor: 'white',
        position:Toast.positions.BOTTOM,
      });
    })
    .catch(() => {
      Alert.alert('Image upload failed');
    });
  if ((await uploadTask).state == 'success') {
    return true;
  } else if ((await uploadTask).state == 'running') {
    return true;
  } else if ((await uploadTask).state == 'canceled') {
    return false;
  }
};
export const DeleteImage = async (image: any, EmpId: any) => {
  const desertRef = ref(storage, `${EmpId}/${image.assets[0].fileName}`);
  deleteObject(desertRef)
    .then(() => {
      Alert.alert('Image cleared successfully');
    })
    .catch(() => {
      Alert.alert('Image clear failed');
    });
};
export default FirebaseUpload;
