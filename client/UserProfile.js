import { StatusBar } from 'expo-status-bar';
import React, { cloneElement, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';

export default function Profile() {
    const img1 = require('./images/Ahsan.jpg');

    const navigation = useNavigation();

    const loginHandle = () => {

        navigation.navigate('Login')
    }
    const homeHandle = () => {

        navigation.navigate('Home')
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: '#06161C', }}>
            <View style={{ flex: 0.10, alignItems: 'center', flexDirection: 'row', marginTop: 30, backgroundColor: '#06161C', }}>
                <FontAwesome name="angle-left" size={30} style={{ color: 'white', marginLeft: 15 }}  />
                <View style={{ flex: 1, alignItems: 'center', marginRight: 25 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Profile</Text>
                </View>
            </View>

            <View style={{ flex: 0.90, borderStartStartRadius: 50, borderStartEndRadius: 50, backgroundColor: 'white' }}>
                <View style={{flex:0.3, justifyContent:'center',alignItems:'center'}}>
                    <View style={{ marginTop: 30 }}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                            source={img1}>
                        </Image>
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',textAlign:'center' }}>Ahsan Naseem</Text>
                        <Text style={{ fontSize: 15, color: '#6b6969', marginTop: 5 ,textAlign:'center'}}>abc@gmail.com</Text>
                    </View>
                </View>

                <View style={{ flex: 0.20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={loginHandle}>
                        <View style={{ backgroundColor: '#06161C', borderRadius: 5, width: 200, height: 35, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>



            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
