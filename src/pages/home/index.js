import { Button, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Option from '../../components/Option';
import { mainColor } from '../../utils';

const Home = ({navigation}) => {
  const [nama, setNama] = useState('')
  const [gejala, setGejala] = useState([]);

  const showSubmit = () => {
    setNama(nama);
    console.log('Nama anda: ', nama);
    console.log('Gejala yang anda pilih: ', gejala);
    navigation.navigate('Result');
  }

  const handleGejalaChange = (newGejala) => {
    setGejala(newGejala);
  };

  return (
    <View>
      <ScrollView
        style={styles.optionContainer}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.optionHeader}>Nama Pasien</Text>
          <TextInput
            placeholder='Masukkan nama anda...'
            style={{ borderBottomWidth: 1, borderColor: 'lightgrey', height: 38 }}
            name='nama'
            value={nama}
            onChangeText={setNama}
          />
          <Text style={styles.optionHeader}>Daftar Gejala</Text>
          <Text>Jumlah gejala yang anda pilih: {gejala.length}</Text>
        </View>

        <View>
          <View>
            <View style={styles.optionRow}>
              <Option name="Hidung Tersumbat" value='G01' gejala={gejala} setGejala={handleGejalaChange} />
              <Option name="Pilek" value='G02' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option name="Bersin-Bersin" value='G03' gejala={gejala} setGejala={handleGejalaChange} />
              <Option name="Demam" value='G04' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option name="Menggigil" value='G05' gejala={gejala} setGejala={handleGejalaChange} />
              <Option name="Sakit Kepala" value='G06' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option name="Nyeri Dada" value='G07' gejala={gejala} setGejala={handleGejalaChange} />
              <Option name="Batuk Kering" value='G08' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option name="Batuk Berdahak" value='G09' gejala={gejala} setGejala={handleGejalaChange} />
              <Option name="Nyeri Otot" value='G10' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option name="Lemas" value='G11' gejala={gejala} setGejala={handleGejalaChange} />
              <Option name="Diare" value='G12' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option name="Mual / Muntah" value='G13' gejala={gejala} setGejala={handleGejalaChange} />
              <Option name="Nyeri Tenggorokan" value='G14' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option name="Nyeri Menelan" value='G15' gejala={gejala} setGejala={handleGejalaChange} />
              <Option name="Radang tenggorokan" value='G16' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option name="Gatal Tenggorokan" value='G17' gejala={gejala} setGejala={handleGejalaChange} />
              <Option name="Suara serak" value='G18' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>


          <View>
            <View style={styles.optionRowLast}>
            <Option name="Hilang Suara" value='G19' gejala={gejala} setGejala={handleGejalaChange} />
            </View>
          </View>
        </View>
      </ScrollView >
      <View>
        <TouchableOpacity
          onPress={showSubmit}
          style={styles.footer}
        >
          <Text style={styles.fontSubmit}>
            Diagnosa
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default Home;

const styles = StyleSheet.create({
  optionRow: {
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionRowLast: {
    paddingLeft: 0,
    paddingRight: 0,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  optionContainer: {
    marginLeft: 40,
    marginRight: 40,
    margin: 20,
    marginBottom: 40,
    marginTop: 0
  },
  optionHeader: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20
  },
  
  footer: {
    position: 'absolute',
    backgroundColor: mainColor,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 40,
    justifyContent: 'center',
    borderWidth: 1
  },
  fontSubmit: {
    textAlign: 'center', 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold'
  }
});
