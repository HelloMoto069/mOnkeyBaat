import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import CustomListItem from '../components/CustomListItem';
import { Avatar } from '@rneui/themed';
import auth from '@react-native-firebase/auth';
import { Icon } from "@rneui/themed";
import LottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';




const HomeScreen = ({ navigation }) => {

  const [chats, setChats] = useState([]);

  // const { logout } = useContext(AuthContext);

  const signOutUser = async () => {
    // await firebase
    auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login")
      })
      .catch((error) => {
        alert(error)
      })

  }

  // useEffect(() => {
  //   const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
  //     setChats(snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       data: doc.data()
  //     })))
  //   ));

  //   return unsubscribe;
  // }, [])

  useEffect(() => {
    const unsubscribe =
      firestore().collection('chats').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
        setChats(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
        console.log(snapshot.docs)
      });

    return unsubscribe;
  }, [])



  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'mOnkeyBaat',
      headerStyle: {
        backgroundColor: '#2C6BED'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerLeft: () => (
        <View style={{ marginLeft: 21 }}>
          <TouchableOpacity
            onPress={signOutUser}
            activeOpacity={0.7}>
            {/* <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} /> */}
            <Avatar rounded source={{ uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' }} />
          </TouchableOpacity>
        </View>
      ),
      
      headerRight: () => (
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // width: 70,
          marginRight: 29,
        }}>
          <TouchableOpacity activeOpacity={0.4}
          onPress={() => navigation.navigate('UnderMaintenance')}
          >
            <Icon name='camera-outline' type='ionicon' color='white' size={27} />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('AddChat')}
            activeOpacity={0.4}>
            <Icon name='pencil' type='ionicon' color='white' size={27} />
          </TouchableOpacity> */}
        </View>
      )
    })
  }, [navigation])

  const enterChat = (id, chatName) => {
    navigation.navigate('ChatScreen', {
      id, chatName,
    });
  };


  return (
    <>
      <SafeAreaView>

        <ScrollView style={styles.container}>
          {chats.map(({ id, data: { chatName } }) => (
            <CustomListItem
              key={id}
              id={id}
              chatName={chatName}
              enterChat={enterChat}
            />
          ))}

        </ScrollView>

        <TouchableOpacity
          onPress={() => navigation.navigate('AddChat')}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            // backgroundColor: "#2C6BED",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 40,
            right: 40,
            alignSelf: "flex-end"
          }} >
          <LottieView
            style={{ height: 70, alignSelf: 'center' }}
            source={require('../lottie/106068-chat.json')}
            autoPlay
            speed={1}
            loop={true}
          />
          {/* <Icon name='pencil' type='ionicon' color='white' size={27} /> */}
        </TouchableOpacity>
        
      </SafeAreaView>
    </>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
})