import {Dimensions, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  flatContainer: {
    width: Dimensions.get('window').width - 30,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    marginVertical: 5,
    alignSelf: 'center',
    borderWidth: 0.7,
    borderRadius: 3,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressableView: {paddingRight: 30},
  mainContainer: {
    flex: 1,
  },
  flatMain: {paddingBottom: 350, paddingTop: 30},
  textInput: {
    width: '100%',
    alignSelf: 'center',
    paddingLeft: 10,
    borderWidth: 0.7,
    marginVertical: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    fontSize: 18,
    color: 'black',
  },
  button: {
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: '#323E77',
    width: '100%',
    padding: 10,
    borderWidth: 0.2,
  },
  submainContainer: {
    paddingTop: 10,
  },
  buttontextstyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
  },
  flatlistButtons: {
    marginBottom: 5,
    backgroundColor: '#323E77',
    padding: 3,
    borderRadius: 3,
  },
});
