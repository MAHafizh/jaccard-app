import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { mainColor } from '../utils';

const Option = (props) => {
    const { name, gejala, setGejala } = props;
    const [choosen, setChoosen] = useState(false);

    const handlePress = () => {
        setChoosen(!choosen);
        if (!choosen) {
            setGejala([...gejala, props.value]); // Menambahkan gejala baru
        } else {
            setGejala(gejala.filter(item => item !== props.value)); // Menghapus gejala saat tidak dipilih
        }
    };


    return (
        <View>
            <TouchableOpacity
                style={choosen ? styles.buttonChoosen : styles.button}
                onPress={handlePress}>
                <Text style={choosen ? styles.titleChoosen : styles.title}>
                    {props.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Option

const styles = StyleSheet.create({
    button: {
        backgroundColor: mainColor,
        width: 140,
        padding: 15,
        borderRadius: 13
    },
    title: {
        color: 'white',
        textAlign: 'center'
    },
    titleChoosen: {
        color: mainColor,
        textAlign: 'center'
    },
    buttonChoosen: {
        backgroundColor: 'white',
        width: 140,
        padding: 14,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: mainColor
    }
})