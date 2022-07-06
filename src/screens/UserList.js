import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import UsersList0 from '../components/UsersList0';
import HomeScreen from './HomeScreen';




const UserList = ({ navigation, route, user }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const liist = firestore().collection('users').onSnapshot(snapshot => {
            setUsers(snapshot.docs.map(doc => ({
                uid: doc.id,
                data: doc.data(),

            })))
            // console.log(snapshot.docs)
        })
        // console.log(users)
        return liist;
    }, [])


    return (
      <>
        <View style={styles.container}>
            <ScrollView style={styles.scrlvw}>
                {users.map(({ uid, data: { name, email, dp } }) => (
                    <UsersList0
                        key={uid}
                        id={uid}
                        name={name}
                        email={email}
                        dp = {dp}
                    />
                ))}
            </ScrollView>
        </View>
      </>
    )
}

export default UserList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    scrlvw: {
        backgroundColor: 'white',
        height: '100%',
    },
});