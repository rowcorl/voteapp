import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { objcolors, txtcolors } from '../components/colors'
import Container from '../components/Container'
import ProfileImage from '../components/ProfileImage'

export default function Settings(props: { navigation?: any,myFunction?:any; }) {
    return (
        <Container>
            <View style={styles.LocalContainer}>
                <ScrollView style={styles.itemContainerA}>
                    <View style={styles.itemContainerB}>
                        <View style={styles.itemContainer}>
                            <View>

                                <ProfileImage size={60} />
                                <View style={styles.editProfileImageIcon}>
                                    <FontAwesome name='pencil' size={15} color={objcolors.$444_fff} />
                                </View>
                            </View>

                            <View style={styles.totalVotesWrapper}>
                                <View style={styles.profileTextInner}>

                                    <Text style={styles.totalVotesValue}>Stanley Afon</Text>
                                </View>
                                <View style={styles.profileTextInner}>
                                    <Text style={styles.userEmail}>info.transvoteapp.com</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={styles.settingsList}>
                        <View style={styles.settingsLabel}>
                            <FontAwesome name='bell-o' size={25} color={objcolors.$444_fff} />
                        </View>
                        <View>
                            <Text style={styles.settingsValue}>FAQ</Text>
                        </View>
                    </View>

                    
                    <View style={styles.settingsList}>
                        <View style={styles.settingsLabel}>
                            <FontAwesome name='share-square-o' size={25} color={objcolors.$444_fff} />
                        </View>
                        <View>
                            <Text style={styles.settingsValue}>Tell a friend</Text>
                        </View>
                    </View>

                    <View style={styles.settingsList}>
                        <View style={styles.settingsLabel}>
                            <FontAwesome name='bullhorn' size={25} color={objcolors.$444_fff} />
                        </View>
                        <View>
                            <Text style={styles.settingsValue}>Contact us</Text>
                        </View>
                    </View>

                    <View style={styles.settingsList}>
                        <View style={styles.settingsLabel}>
                            <FontAwesome name='question-circle-o' size={25} color={objcolors.$444_fff} />
                        </View>
                        <View>
                            <Text style={styles.settingsValue}>About</Text>
                        </View>
                    </View>

                    <View style={styles.settingsList}>
                        <View style={styles.settingsLabel}>
                            <FontAwesome name='archive' size={25} color={objcolors.$444_fff} />
                        </View>
                        <View>
                            <Text style={styles.settingsValue}>Avatar</Text>
                        </View>
                    </View>

                    <TouchableOpacity  onPress={() => props.myFunction()} style={styles.settingsList}>
                        <View style={styles.settingsLabel}>
                            <FontAwesome name='moon-o' size={25} color={objcolors.$444_fff} />
                        </View>
                        <View>
                            <Text style={styles.settingsValue}>Dark mode</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.settingsList}>
                        <View style={styles.settingsLabel}>
                            <FontAwesome name='angellist' size={25} color={objcolors.$444_fff} />
                        </View>
                        <View>
                            <Text style={styles.settingsValue}>Update</Text>
                        </View>
                    </View>

                    <View style={styles.settingsList}>
                        <View style={styles.settingsLabel}>
                            <FontAwesome name='header' size={25} color={objcolors.$444_fff} />
                        </View>
                        <View>
                            <Text style={styles.settingsValue}>Help</Text>
                        </View>
                    </View>
                    <View style={styles.settingsList}>
                        <View style={styles.settingsLabel}>
                            <FontAwesome name='lightbulb-o' size={25} color={objcolors.$444_fff} />
                        </View>
                        <View>
                            <Text style={styles.settingsValue}>Logout</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>

        </Container>
    )
}
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
    styleFont: {
        backgroundColor: '#ddd',
        width: 50,
        alignItems: 'center',
        paddingHorizontal: 50

    },
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

    userEmail: {
        color: txtcolors.black_eee_txt,
        // fontWeight: '300',
        fontSize: 15,
    }

    ,
    addedVoteValue: {
        color: txtcolors.black_eee_txt,
        fontWeight: '600',
        fontSize: 17,
    },
    profileTextInner: {
        flexDirection: 'row',
        alignItems: 'baseline',
        //justifyContent: 'center',
    },
    totalVotesWrapper: {
        //backgroundColor: 'red',
        //alignItems: 'center',
        //justifyContent: 'flex-start',
        flexDirection: 'column',
        marginLeft: 10,
    }
    ,
    profilePhoto: {
        width: 60,
        height: 60,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 100,
        borderColor: '#fff',
        // borderWidth: 2,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    itemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        // borderBottomWidth: 1,
        ///borderColor: '#eee',
        // width: '100%',
        borderRadius: 10
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

    settingsList: {
        // alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: objcolors.fff_222,
        marginBottom: 10,
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingVertical: 5,
        marginHorizontal: 20,
        alignItems: 'baseline'
    }
    ,
    settingsValue: {
        color: txtcolors.black_eee_txt,
        fontWeight: '400',
        fontSize: 16,
    }
    ,
    settingsLabel: {
        padding: 10,
        backgroundColor: objcolors.ddd_333,
        borderRadius: 50,
        marginRight: 15
    }

    ,
    itemContainerA: {
        // alignItems: 'center',
        flexDirection: 'column',
       // marginBottom: 10,
    }
    ,
    editProfileImageIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: objcolors.fff_444,
        borderRadius: 20,
        padding: 5,
        borderWidth: 2,
        borderColor: '#eee'
        // width:1
    }
});