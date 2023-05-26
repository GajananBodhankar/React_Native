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
    backgroundColor: 'white',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressableView: {paddingRight: 30},
  mainContainer: {
    flex: 1,
    backgroundColor: '#3b5999',
  },
  flatMain: {paddingBottom: 350, paddingTop: 30},
  textInput: {
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    paddingLeft: 10,
    borderWidth: 0.7,
    marginVertical: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    backgroundColor: 'white',
    fontSize: 18,
  },
  button: {
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#587ebc',
    width: Dimensions.get('window').width - 30,
    padding: 10,
    borderWidth: 0.2,
  },
  submainContainer: {
    paddingTop: 30,
  },
  buttontextstyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
  },
  flatlistButtons: {
    marginBottom: 5,
    backgroundColor: '#587ebc',
    padding: 3,
    borderRadius: 3,
  },
});
