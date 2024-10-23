import React from  'react';
import { Image, StyleSheet, Text, View } from 'react-native';

//const ProfileImage = props => {
    const ProfileImage =(props: {size?:any, navigation?: any; }) => {
    return (

        <View style={styles.profilePhotoFrame}>
            <Image
                style={{ ...styles.profilePhoto, ...{ width: props.size, height: props.size } }}
                source={require('../assets/images/userImage.jpeg')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    profilePhoto: {
      padding: 10,
      backgroundColor: '#eee',
      borderRadius: 100,
      borderColor: '#fff',
      // borderWidth: 2,
      // alignItems: 'center',
      // justifyContent: 'center'
    },
    
  profilePhotoFrame: {
    padding: 5,
    backgroundColor: '#eee',
    borderRadius: 100,
    margin: 5,
    //alignItems: 'center',
    //justifyContent: 'center'
  }
})

export default ProfileImage;