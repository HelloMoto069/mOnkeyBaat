import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState, useContext } from 'react';
import { Icon, ListItem, Avatar } from "@rneui/themed";
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { AuthContext } from '../navigation/AuthProvider';




const SettingScreen = ({ navigation }) => {

  const { logout } = useContext(AuthContext);

  const [expanded, setExpanded] = useState(false);
  const [check, setCheck] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View >
          <TouchableOpacity style={{
            marginLeft: 11, flexDirection: 'row',
            justifyContent: 'space-between', marginTop: 7,
          }}
            activeOpacity={0.4}
            onPress={() => { navigation.goBack(); }}
          >
            <Icon
              name='chevron-left'
              type='font-awesome'
              color='white'
            />
            <Text style={{ color: 'white', marginLeft: 7, fontWeight: '700' }}>Back</Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])


  return (
    <>

      <ListItem
      onPress={() => navigation.navigate('Imgpck')}
        bottomDivider
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        ViewComponent={LinearGradient}
      >
        <Avatar rounded source={{ uri: 'https://img.freepik.com/free-vector/terms-conditions-concept-illustration_108061-451.jpg' }} />
        <ListItem.Content>
          <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
            <Text>Terms and Conditions</Text>
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>







      <ListItem
        bottomDivider
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ['#ffd89b', '#19547b'],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        ViewComponent={LinearGradient}
      >
        <Avatar rounded source={{ uri: 'https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7698.jpg' }} />
        <ListItem.Content>
          <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
            <Text>Do Not Disturb</Text>
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.CheckBox color="white" />
      </ListItem>



      <ListItem
        bottomDivider
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ['#614385', '#516395'],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        ViewComponent={LinearGradient}
      >
        <Avatar rounded source={{ uri: 'https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7698.jpg' }} />
        <ListItem.Content>
          <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
            <Text>Notification</Text>
          </ListItem.Title>
        </ListItem.Content>

        <ListItem.CheckBox checked={check}
          onPress={() => {
            setCheck(!check);
          }} />


      </ListItem>




      <ListItem.Accordion
        content={
          <>
            <Avatar rounded source={{ uri: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-customer-service-staff-contact-us-png-image_5410602.jpg' }} />
            <ListItem.Content>
              <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                <Text>Contact Us</Text>
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
        bottomDivider
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ['#56ab2f', '#a8e063'],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        ViewComponent={LinearGradient}
      >
        <ListItem bottomDivider>
          <Avatar source={{ uri: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-customer-service-staff-contact-us-png-image_5410602.jpg' }} />
          <ListItem.Content>
            <ListItem.Title><Text>Name</Text></ListItem.Title>
            <ListItem.Subtitle><Text>Phn no.</Text></ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </ListItem.Accordion>


      <ListItem
      onPress={() => navigation.navigate('UnderMaintenance')}
        bottomDivider
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ['#bdc3c7', '#2c3e50'],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        ViewComponent={LinearGradient}
      >
        <Avatar rounded source={{ uri: 'https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7698.jpg' }} />
        <ListItem.Content>
          <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
            <Text>Change Language</Text>
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>



      <ListItem
        onPress={() => logout()}
        bottomDivider
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ['#cc2b5e', '#753a88'],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        ViewComponent={LinearGradient}
      >
        <Avatar rounded source={{ uri: 'https://png.pngtree.com/element_our/png_detail/20181226/logout-vector-icon-png_276837.jpg' }} />
        <ListItem.Content>
          <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
            <Text>LogOut</Text>
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>



    </>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})