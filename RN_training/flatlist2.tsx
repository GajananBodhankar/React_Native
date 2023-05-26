import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Heart from './programs/Heart';
const Disp = ({item, action}) => (
  <View
    style={[
      {
        backgroundColor: 'white',
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        elevation: 25,
      },
    ]}>
    <View style={{alignSelf: 'flex-end'}}>
      <Heart />
    </View>

    <Image
      source={{uri: item.Image1}}
      style={{
        height: 150,
        width: 150,
        borderRadius: 90,
        alignSelf: 'center',
        bottom: 10,
      }}
    />
    <Text style={style.txt}>{item.Name}</Text>
    <Text style={style.txt}>{item.price}</Text>
  </View>
);
const Ax = () => {
  const [Arr, setArr] = useState([
    {
      id: 1,
      Image1:
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg',
      Name: 'Spicy Noodles',
      price: 'N1,500',
      isSelected: false,
    },
    {
      id: 2,
      Image1: 'https://static.toiimg.com/photo/84784534.cms',
      Name: 'Shrimp Pasta',
      price: 'N1,800',
      isSelected: false,
    },
    {
      id: 3,
      Image1:
        'https://greenbowl2soul.com/wp-content/uploads/2021/06/Indian-vegetable-curry.jpg',
      Name: 'Vegetable Curry',
      price: 'N2,500',
      isSelected: false,
    },
    {
      id: 4,
      Image1:
        'https://foolproofliving.com/wp-content/uploads/2022/03/Spring-Mix-Salad-Recipe.jpg',
      Name: 'Mix salad',
      price: 'N2,200',
      isSelected: false,
    },
    {
      id: 5,
      Image1:
        'https://cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-6.jpg',
      Name: 'Veg biryani',
      price: 'N1,800',
      isSelected: false,
    },
    {
      id: 6,
      Image1:
        'https://curlytales.com/wp-content/uploads/2017/06/Shiv-Mishthan-Bhandar.jpg',
      Name: 'Chole Bhature',
      price: 'N1,500',
      isSelected: false,
    },
    {
      id: 7,
      Image1:
        'https://images.herzindagi.info/webstories/1426/1644904807-paneer-dosa-recipe-social.jpg',
      Name: 'Paneer Dosa',
      price: 'N1,500',
      isSelected: false,
    },
    {
      id: 8,
      Image1:
        'data:image/jpeg;base64,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',
      Name: 'Butter Naan',
      price: 'N1,500',
      isSelected: false,
    },
  ]);
  const Valid = id => {
    const newdata = [...Arr];
    //if we make changes directly to Arr ie.(!item.isSelected) then the changes do no reflect in Arr,to do so we've taken Arr into newdata, made changes to newdata then coupled it to the Arr
    const index = id - 1; //coz, id starts from 1,and Arr is 0,1,2,3
    const flag = newdata[index].isSelected;
    if (flag) {
      newdata[index].isSelected = false;
    } else {
      newdata[index].isSelected = true;
    }
    {
      setArr(newdata); //******** */
    }
  };
  const Disp1 = ({item}) => {
    return (
      <Disp
        item={item}
        action={() => {
          Valid(item.id);
        }}
      />
    );
  };
  return (
    <View style={style.view1}>
      <FlatList numColumns={2} data={Arr} renderItem={Disp1} />
    </View>
  );
};
const style = StyleSheet.create({
  view1: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txt: {textAlign: 'center', fontSize: 18, color: 'black'},
});
export default Ax;
