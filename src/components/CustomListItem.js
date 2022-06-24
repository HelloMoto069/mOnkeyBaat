import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ListItem, Avatar } from '@rneui/themed';


const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <>
    <ListItem>
        <Avatar
        size={47}
        rounded
        source={{
            uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
        }}
        />
        <ListItem.Content>
            <ListItem.Title style={{fontWeight:'700', fontSize: 21}}>
                Anurudh Singh
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                Hi Bro... KasBe..!!!
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
    </>
  )
}


export default CustomListItem

const styles = StyleSheet.create({})