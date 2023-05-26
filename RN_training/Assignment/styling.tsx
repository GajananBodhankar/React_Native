import { StyleSheet } from 'react-native';
export const style = StyleSheet.create({
  txt: {
    fontSize: 18,
    color: 'black',
  },
  txt1: { fontSize: 22, color: 'red' },
  back: {
    marginTop: 3,
    fontSize: 18,
    color: 'black',
  },
  viewAllTouchable: { alignSelf: 'flex-end', paddingRight: 10 },
  deleteButtonStyle: { alignSelf: 'flex-end', width: 110 },
  listView: {
    borderBottomWidth: 3,
    borderColor: 'grey',
    paddingLeft: 10,
    paddingRight: 100,

    marginVertical: 5,
    marginHorizontal: 5,
  },
  finalAmountView: {
    fontSize: 24,
    color: 'red',
    paddingLeft: 10,
  },
  container1: { flexDirection: 'column', margin: 10 },
  text1: { fontSize: 20, color: 'red' },
  totalPriceContainer: { fontSize: 24, color: 'black' },
  searchIcon: {
    height: 20,
    width: 20,
    marginTop: 15,
  },
  deleteItemView: { margin: 10, width: 120 },
  flatImage: {
    height: 100,
    width: 150,
    alignSelf: 'center',
  },
  addToCartButton: {
    width: 120,
    alignSelf: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  countTxt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    marginHorizontal: 20,
  },
  mainView: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 30,
  },
  countContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  viewAll: {
    color: 'red',
    paddingRight: 10,
    fontSize: 16,
  },
  DispView: {
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
    width: 200,
  },
  imageStyle: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 10,
  },
  productDisp: {
    marginHorizontal: 8,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    width: 180,
    elevation: 10,
  },
  cartMainView: { flex: 1, paddingTop: 10, paddingBottom: 70 },
  touchable: {
    marginBottom: 10,
    flexDirection: 'row',
    width: 90,
    paddingLeft: 5,
    borderRadius: 10,
    borderColor: 'black',
  },
  HomeSubView: {
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 20,
  },
  flatViewAll: {
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    width: 180,
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: 'grey',
    marginTop: 10,
  },
  categoryView: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
  },
  logoutMainView: { flex: 1, justifyContent: 'center' },
  logoutSubView: { width: 100, alignSelf: 'center' },
});