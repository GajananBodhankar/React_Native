import Toast from 'react-native-root-toast';

export const displayToast = (message: any) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    textColor: 'white',
    position: Toast.positions.BOTTOM,
  });
};
