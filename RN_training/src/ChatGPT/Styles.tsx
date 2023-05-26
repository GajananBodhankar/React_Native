import {Dimensions, Platform, StyleSheet} from 'react-native';

export const validateStyle = StyleSheet.create({
  mainContainer: {flex: 1, paddingHorizontal: 20},
  textIn: {paddingTop: 0, justifyContent: 'flex-end'},
  textInputstyle: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
    borderColor: '#323E77',
    padding: 15,
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  button: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#323E77',
    borderRadius: 4,
    marginVertical: 10,
    padding: 10,
  },
  txt: {fontSize: 18, color: 'white', textAlign: 'center'},
  subcontainer1: {flexDirection: 'row'},
  drawerView: {paddingRight: 10, paddingTop: 10},
  drawerImage: {height: 20, width: 20},
  submitView: {
    paddingHorizontal: 90,
    flexDirection: 'row',
    paddingBottom: 5,
  },
  deleteView: {paddingRight: 20, paddingLeft: 40, alignSelf: 'center'},
  flatView: {
    paddingTop: 20,
    height: Dimensions.get('window').height - 200,
    paddingBottom: Platform.OS == 'android' ? 0 : 50,
  },
  flatsubView1: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#323E77',
    borderRadius: 4,
  },

  flattxt: {paddingLeft: 5, paddingTop: 5, paddingRight: 5, color: 'black'},
  flatsubView2: {flexDirection: 'row', alignSelf: 'flex-end'},
  copyView: {
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 3,
    alignSelf: 'flex-end',
  },
  copyImage: {height: 20, width: 20, marginRight: 5},
  shareView: {
    paddingRight: 30,
    paddingBottom: 5,
    paddingTop: 3,
    alignSelf: 'flex-end',
  },
  shareImage: {height: 20, width: 20},
});
export const loginStyle = StyleSheet.create({
  main: {
    width: '100%',

    paddingHorizontal: 40,
    paddingTop: 150,
  },
  txtIn: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
    borderColor: '#323E77',
    padding: 15,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
  },
  safeView: {flex: 1},
  button: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#323E77',
    borderRadius: 4,
    marginVertical: 10,
    padding: 15,
  },
  txt: {fontSize: 16, color: 'white', textAlign: 'center'},
  forgotPwd: {
    top: 3,
    paddingLeft: 3,
    color: '#323E77',
    textAlign: 'center',
    paddingBottom: 10,
  },
  image: {height: 200, width: 200, alignSelf: 'center'},
  txtdontaccount: {textAlign: 'center', fontSize: 14, color: 'black'},
  txtcreateacc: {top: 3, paddingLeft: 3, color: '#323E77'},
  txtforgot: {alignSelf: 'center', paddingTop: 10},
  pwdContainer: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
    borderColor: '#323E77',
    padding: 3,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  pwdTxtIn: {
    width: Dimensions.get('window').width - 150,
    paddingTop: 12,
    paddingBottom: 12,
    color: 'black',
    fontSize: 16,
  },
  pwdPressable: {alignSelf: 'center'},
  visibleImage: {height: 25, width: 25},
});

export const splashStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 100,
  },
  txtwelcome: {
    alignSelf: 'center',
    color: '#323E77',
    fontWeight: 'bold',
    fontSize: 28,
  },
  image: {height: 300, width: 200, alignSelf: 'center'},
  txtgetstart: {
    color: '#323E77',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  subContainer: {
    flex: 0.5,
    paddingRight: 50,
    justifyContent: 'flex-end',
  },
  pressable: {flexDirection: 'row', alignSelf: 'flex-end'},
});

export const customDrawerstyle = StyleSheet.create({
  mainContainer: {flex: 1},
  txtstyle: {padding: 10, textAlign: 'center', fontSize: 16},
  subContainer: {paddingTop: 30},
  dummyImage: {
    height: 80,
    width: 80,
    borderRadius: 150,
    borderColor: '#323E77',
    borderWidth: 0.7,
    alignSelf: 'center',
  },
});
export const createAccountStyle = StyleSheet.create({
  main: {
    width: '100%',
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  txtIn: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
    borderColor: '#323E77',
    padding: 15,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
  },
  backButton: {height: 25, width: 25},
  image: {height: 200, width: 200, alignSelf: 'center'},
  safeView: {flex: 1},
  button: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#323E77',
    borderRadius: 4,
    marginVertical: 10,
    padding: 15,
  },
  txt: {fontSize: 18, color: 'white', textAlign: 'center'},
  backButtonView: {paddingLeft: 20, width: 50, paddingTop: 20},
  pwdContainer: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
    borderColor: '#323E77',
    padding: 3,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  pwdTxtIn: {
    width: Dimensions.get('window').width - 150,
    paddingTop: 12,
    paddingBottom: 12,
    color: 'black',
    fontSize: 16,
  },
  pwdPressable: {alignSelf: 'center'},
  visibleImage: {height: 25, width: 25},
});
