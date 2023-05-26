/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  Pressable,
  Share,
  Alert,
  Image,
  Clipboard,
  ActivityIndicator,
  LogBox,
  Platform,
} from 'react-native';
import axios from 'axios';
import {FlatList} from 'react-native';
import Toast from 'react-native-root-toast';
import AwesomeAlert from 'react-native-awesome-alerts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validateStyle} from './Styles';

LogBox.ignoreAllLogs();
const copyToClipboard = (item: string) => {
  Clipboard.setString(item);
};
// const fetchCopiedText = async () => {
//   const text = await Clipboard.getString();
//   console.log(text);
// };
const onShare = async (item: any) => {
  try {
    const result = await Share.share({
      message: item.toString(),
    });
    if (result.action === Share.sharedAction) {
      console.log('Share');
      if (result.activityType) {
        console.log('Shared');
      } else {
        console.log('Else');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Dissmissed');
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
const displayToast = (message: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    textColor: 'white',
    position: Toast.positions.BOTTOM,
  });
};
const renderItem = ({item, index}: any) => {
  if (item != null && item !== '') {
    return (
      <View style={validateStyle.flatsubView1}>
        {index % 2 !== 0 ? (
          <Text style={validateStyle.flattxt}>{item}</Text>
        ) : (
          <Text style={[validateStyle.flattxt, {alignSelf: 'flex-end'}]}>
            {item}
          </Text>
        )}
        <View style={validateStyle.flatsubView2}>
          <>
            <Pressable
              onPress={() => {
                displayToast('Copied to clipboared');
                Alert.alert('Copied');
                copyToClipboard(item);
              }}>
              <View style={validateStyle.copyView}>
                {index % 2 !== 0 ? (
                  <Image
                    source={require('./Assets/CopyIcon.png')}
                    style={validateStyle.copyImage}
                  />
                ) : null}
              </View>
            </Pressable>
            <Pressable onPress={() => onShare(item)}>
              <View style={validateStyle.shareView}>
                {index % 2 !== 0 ? (
                  <Image
                    source={require('./Assets/ShareIcon.png')}
                    style={validateStyle.shareImage}
                  />
                ) : null}
              </View>
            </Pressable>
          </>
        </View>
      </View>
    );
  }
};
const Validate = ({navigation}: any) => {
  const [flatData, setData] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>();
  const [bool, setBool] = useState<boolean>(false);
  const [alertBool, setalertBool] = useState<boolean>(false);
  const flatlistRef = useRef<FlatList>(null);
  useEffect(() => {
    handlePress();
  }, []);

  const handlePress = async () => {
    setBool(true);
    let data = JSON.stringify({
      model: 'gpt-3.5-turbo-0301',
      messages: [
        {
          role: 'user',
          content: searchText ? `${searchText}` : 'hi',
        },
      ],
    });
    axios({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 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',
      },
      data: data,
    })
      .then(response => {
        const temp = response.data.choices[0].message.content;
        if (temp.startsWith('1')) {
          console.log(temp);
          const x = response.data.choices[0].message.content.split('.');
          setData([...flatData, searchText, x]);
        } else {
          setData([...flatData, searchText, temp]);
        }
        console.log(data);
        setSearchText('');
        setBool(false);
      })
      .catch(error => {
        setBool(false);
        console.log(error);
      });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: Platform.OS == 'android' ? null : 1}}>
      <View style={validateStyle.mainContainer}>
        <SafeAreaView />
        <View style={validateStyle.drawerView}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={require('./Assets/menu.png')}
              style={validateStyle.drawerImage}
            />
          </Pressable>
        </View>
        <AwesomeAlert
          show={alertBool}
          title="Delete chat"
          titleStyle={{color: '#323E77'}}
          messageStyle={{color: 'black'}}
          message="Are you sure, you want to delete chat?"
          confirmText="Delete"
          cancelText="Cancel"
          showCancelButton={true}
          showConfirmButton={true}
          confirmButtonColor="#323E77"
          cancelButtonColor="grey"
          confirmButtonTextStyle={{paddingHorizontal: 20}}
          cancelButtonStyle={{paddingHorizontal: 25}}
          onCancelPressed={() => setalertBool(false)}
          onConfirmPressed={() => {
            setData([]);
            setalertBool(false);
          }}
        />

        <View style={validateStyle.flatView}>
          {flatData.length > 0 && (
            <FlatList
              nestedScrollEnabled
              data={flatData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              ref={flatlistRef}
              onContentSizeChange={() => {
                flatlistRef.current?.scrollToEnd({animated: true});
              }}
            />
          )}
        </View>

        <View
          style={{
            flex: 0.8,
            justifyContent: 'flex-end',
          }}>
          <View style={validateStyle.textIn}>
            <View style={validateStyle.subcontainer1}>
              <TextInput
                style={validateStyle.textInputstyle}
                placeholderTextColor={'grey'}
                placeholder="Search"
                value={searchText}
                onChangeText={i => setSearchText(i)}
              />
            </View>
          </View>
          <View style={validateStyle.submitView}>
            <Pressable style={validateStyle.button} onPress={handlePress}>
              {bool ? (
                <ActivityIndicator />
              ) : (
                <Text style={validateStyle.txt}>Submit</Text>
              )}
            </Pressable>
            <Pressable
              style={validateStyle.deleteView}
              onPress={() => setalertBool(true)}>
              <Image source={require('./Assets/DeleteIcon.png')} />
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Validate;
