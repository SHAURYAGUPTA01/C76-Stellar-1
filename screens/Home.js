import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <Text style={styles.titleText}>STELLAR APP</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'red',
        textAlign: "center"
    }
})