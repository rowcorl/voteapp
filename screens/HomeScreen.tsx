import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Image, ScrollView, TextInput } from 'react-native';
import { objcolors, txtcolors } from '../components/colors';

import Container from '../components/Container';
import ProfileImage from '../components/ProfileImage';

//const isWeb = Platform.OS.w


const HomeScreen = (props: { navigation: any; }) => {

  const [vote, setVote] = useState('');

  return (
    <Container>
      <View style={styles.LocalContainer}>
        <ScrollView style={styles.itemContainerA}>
          {/*  ========== */}
          <View style={styles.itemContainerB}>
            <View style={styles.itemContainer}>
              
                <ProfileImage size={60}/>
              
              <View style={styles.totalVotesWrapper}>
                <View style={styles.profileTextInner}>

                  <Text style={styles.totalVotesValue}>3,445</Text>
                  <Text style={styles.totalVotesLable}> Votes</Text>
                </View>
                <View style={styles.profileTextInner}>
                  <Text style={styles.addedVoteLable}>Added:</Text>
                  <Text style={styles.addedVoteValue}> 98</Text>
                </View>

                <View style={styles.starsContainer}>
                  <Text style={styles.star}>{'\u2B50'}</Text>
                  <Text style={styles.star}>{'\u2B50'}</Text>
                  <Text style={styles.star}>{'\u2B50'}</Text>
                  <Text style={styles.star}>{'\u2B50'}</Text>
                  <Text style={styles.star}>{'\u2B50'}</Text>
                </View>

              </View>
            </View>

            <View style={styles.userProfileDetailView}>
              <View style={styles.userDetailView}>
                <Text style={styles.userDetailLableTxt}>Name : </Text>
                <Text style={styles.userDetailValueTxt}>Ibrahim Sechillop</Text>
              </View>

              <View style={styles.userDetailView}>
                <Text style={styles.userDetailLableTxt}>Course Title : </Text>
                <Text style={styles.userDetailValueTxt}>Computer science</Text>
              </View>
            </View>

            <View style={styles.voteBarView}>
              <TextInput
                maxLength={3}
                style={{ borderWidth: 1, borderColor: objcolors.ddd_333, width: 50, justifyContent: 'center', alignItems: "center", fontSize: 15, paddingHorizontal: 10, paddingVertical: 1, borderRadius: 20, color: '#ccc' }}
                placeholderTextColor={txtcolors.$999_eee_txt}
                placeholder="100"
                value={vote}
                onChangeText={(text) => setVote(text)}
              />
              <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: objcolors.green_555, borderRadius: 20 }}><Text style={styles.voteBarTxt}> Vote</Text></TouchableOpacity>
            </View>
          </View>
          {/*  ========== */}
        </ScrollView>

        <View style={styles.bottomButtonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={[styles.button, styles.homeButton]}
              onPress={() => console.log('Button 1 pressed')}>
              <Feather name="home" size={22} color={objcolors.$000_eee} />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}
              onPress={() => console.log('Button 1 pressed')}>
              <Feather name="message-circle" size={22} color={objcolors.$000_eee} />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}
              onPress={() => console.log('Button 1 pressed')}>
              <Feather name="file" size={22} color={objcolors.$000_eee} />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}
              // onPress={() => console.log('Button 1 pressed')}
              onPress={() => props.navigation.navigate("settings")}
            >
              <Feather name="settings" size={22} color={objcolors.$000_eee} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Container >
  );
};

const styles = StyleSheet.create({

  LocalContainer: {
    flex: 1,
    // alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 3,
    backgroundColor: objcolors.eee_000,
  }
  ,

  bottomButtonContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: objcolors.ddd_333,
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    paddingTop: 5,
    backgroundColor: objcolors.white_back,
    //elevation: 2,
  }
  ,

  buttonWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    // paddingHorizontal: 20,
  }
  ,

  button: {
    marginBottom: 10,
    marginTop: 8,
    paddingHorizontal: 22,
    borderRadius: 30,
    paddingVertical: 5,
  }
  ,

  homeButton: {
    backgroundColor: objcolors.ddd_333,
  }
  ,

  buttonText: {
    color: txtcolors.black_eee_txt,
    fontSize: 15,
    fontWeight: '600',
    display: 'flex'
  }

  
  ,
  profilePhoto: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 100,
    borderColor: '#fff',
    // borderWidth: 2,
    // alignItems: 'center',
    // justifyContent: 'center'
  },


  totalVotesWrapper: {
    //backgroundColor: 'red',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: 10,
  }
  ,

  profileTextInner: {
    flexDirection: 'row',
    alignItems: 'baseline',
    //justifyContent: 'center',
  }
  ,

  totalVotesLable: {
    color: txtcolors.black_eee_txt,
    fontWeight: '500',
    fontSize: 17,
  }

  ,

  totalVotesValue: {
    color: txtcolors.black_eee_txt,
    fontWeight: '900',
    fontSize: 20,
  }

  ,

  addedVoteLable: {
    color: txtcolors.$999_eee_txt,
    fontWeight: '600',
    fontSize: 17,
  }

  ,

  addedVoteValue: {
    color: txtcolors.$999_eee_txt,
    fontWeight: '600',
    fontSize: 17,
  }
  ,

  itemContainerA: {
    // alignItems: 'center',
    flexDirection: 'column',
    // backgroundColor: '#fff',
    // width: '100%',
    /*   paddingHorizontal: 12,
      paddingVertical: 5,
      marginHorizontal: 5, */
    marginBottom: 55,
  }
  ,
  itemContainerB: {
    // alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: objcolors.fff_222,
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    //shadowColor: '#ccc',
    borderColor: objcolors.ddd_333,
    borderWidth: 1,
    /*  shadowOffset: { width: 0, height: 1 },
     shadowOpacity: 0.1,
     shadowRadius: 3, */
    borderRadius: 10,
    // elevation: 4,

  }
  ,
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // borderBottomWidth: 1,
    ///borderColor: '#eee',
    // width: '100%',
    borderRadius: 10
  }
  ,
  starsContainer: {
    flexDirection: 'row',
  },

  star: {
    fontSize: 13,
    color: '#FFD700', // Gold color
    // marginRight: 2,
  }
  ,
  numberingView: {
    height: '100%',
    //paddingVertical: 30,
    padding: 5,
    backgroundColor: 'red'
  }, numberingText: {
    position: 'relative',
    backgroundColor: 'yellow',
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
    padding: 5,

  }
  ,
  voteBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: objcolors.eee_333,
    borderWidth: 1,
    borderColor: objcolors.ddd_333,
    //width: '100%',
    marginVertical: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 30,
  }
  ,
  userProfileDetailView: {
    flexDirection: 'column',
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  }
  ,
  userDetailView: {
    flexDirection: 'row',
    alignItems: 'baseline',
  }
  ,

  userDetailLableTxt: {
    color: txtcolors.black_ccc_txt,
    fontWeight: '900',
    fontSize: 16,
  },

  userDetailValueTxt: {
    color: txtcolors.$999_eee_txt,
    fontWeight: '600',
    fontSize: 16,
  }
  ,

  voteBarTxt: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  }
});

export default HomeScreen;