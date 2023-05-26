// import {useState} from 'react';
// import {
//   View,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   SafeAreaView,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';
// import {useCamera} from 'react-native-camera-hooks';
// import {Button} from 'react-native-paper';
// const Camera = () => {
//   const [{cameraRef}, {takePicture}] = useCamera();
//   const [bool, setBool] = useState(false);
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {bool ? (
//         <RNCamera
//           ref={cameraRef}
//           type={RNCamera.Constants.Type.back}
//           style={{flex: 1}}
//         />
//       ) : null}
//       <Button icon="camera" onPress={() => setBool(true)}>
//         Press me
//       </Button>
//       <Button
//         onPress={async () => {
//           try {
//             const d = await takePicture();
//             console.log(d.uri);
//             setBool(false)
//           } catch (e) {
//             console.log(e);
//           }
//         }}>
//         Capture
//       </Button>
//     </SafeAreaView>
//   );
// };
// export default Camera;
import {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {Button} from 'react-native-paper';
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
const Camera = () => {
  const [{cameraRef}, {takePicture}] = useCamera();
  const [bool, setBool] = useState(false);
  const openLib = async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
    });
    console.log(response.assets[0].uri);
  };
  const openCamera = async () => {
    const response = await launchCamera({
      mediaType: 'photo',
    });
    console.log(response.assets[0].uri);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button onPress={openLib}> select image</Button>
      <Button onPress={openCamera}> open camer</Button>
    </SafeAreaView>
  );
};
export default Camera;
