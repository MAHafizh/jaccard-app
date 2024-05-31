import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Result = ({ navigation }) => {
    const [hasil, setHasil] = useState('');
    const getHasil = async() => {
        const response = await fetch('https://example.com/api/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                key1: 'value1',
                key2: 'value2',
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to post data');
        }

        const data = await response.json();
        setHasil(data);
        console.log('Response:', data);
    }
    return (
        <View>
            <Text>Result</Text>
            <Text></Text>
        </View>
    )
}

export default Result;

const styles = StyleSheet.create({})