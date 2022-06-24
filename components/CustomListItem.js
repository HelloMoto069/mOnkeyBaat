import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { ListItem, Avatar } from '@rneui/themed';
import { Icon } from "@rneui/themed";

const Separator = () => (
  <View style={styles.separator} />
);

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <>
      <ListItem
        onPress={() => enterChat(id, chatName)}
        key={id}
        bottomDivider

      >
        <Avatar
          size={47}
          rounded
          source={{
            uri: 'https://raw.githubusercontent.com/HelloMoto069/Clayfin_Project/main/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: '700', fontSize: 21 }}>
            {chatName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
            Hi Bro... KasBe..!!! Chat dekhega..!!
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  )
}


export default CustomListItem

const styles = StyleSheet.create({
  separator: {
    marginVertical: 1,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})