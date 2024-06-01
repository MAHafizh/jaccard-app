/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Option from '../../components/Option';
import {mainColor} from '../../utils';
import {ResultImage} from '../../assets';

const Home = ({navigation}) => {
  const [nama, setNama] = useState('');
  const [gejala, setGejala] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [resPenyakit, setResPenyakit] = useState();
  const [resSimilarity, setResSimilarity] = useState();
  const [reset, setReset] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const showSubmit = async () => {
    try {
      setIsLoading(true);
      if (!nama.trim()) {
        setErrorMessage('Nama Harus Diisi.');
        setModalVisible(true);
        return;
      }
      setErrorMessage('');
      setNama(nama);
      console.log(nama);
      const response = await fetch('https://jaccard.onrender.com/diagnosa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nama,
          gejala: gejala,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setResPenyakit(data.penyakit);
        setResSimilarity(data.similarity);
        setErrorMessage('');
      } else {
        setErrorMessage(data.msg);
      }
      setModalVisible(true);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Gagal terhubung ke server. Silakan coba lagi.');
      console.log('Error message:', errorMessage); // Tambahkan ini
      setModalVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGejalaChange = newGejala => {
    setGejala(newGejala);
  };

  const closeModal = () => {
    setModalVisible(false);
    setGejala([]);
    setNama('');
    setErrorMessage('');
    setReset(prev => !prev);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={styles.optionContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        <View>
          <Text style={styles.optionHeader}>Nama Pasien</Text>
          <TextInput
            placeholder="Masukkan nama anda..."
            style={{borderBottomWidth: 1, borderColor: 'lightgrey', height: 38}}
            name="nama"
            value={nama}
            onChangeText={setNama}
          />
          <Text style={styles.optionHeader}>Daftar Gejala</Text>
          <Text>Jumlah gejala yang anda pilih: {gejala.length}</Text>
        </View>

        <View>
          <View>
            <View style={styles.optionRow}>
              <Option
                name="Hidung Tersumbat"
                value="G01"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
              <Option
                name="Pilek"
                value="G02"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option
                name="Bersin-Bersin"
                value="G03"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
              <Option
                name="Demam"
                value="G04"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option
                name="Menggigil"
                value="G05"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
              <Option
                name="Sakit Kepala"
                value="G06"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option
                name="Nyeri Dada"
                value="G07"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
              <Option
                name="Batuk Kering"
                value="G08"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option
                name="Batuk Berdahak"
                value="G09"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
              <Option
                name="Nyeri Otot"
                value="G10"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option
                name="Lemas"
                value="G11"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
              <Option
                name="Diare"
                value="G12"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option
                name="Mual / Muntah"
                value="G13"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
              <Option
                name="Nyeri Tenggorokan"
                value="G14"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option
                name="Nyeri Menelan"
                value="G15"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
              <Option
                name="Radang tenggorokan"
                value="G16"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>

          <View>
            <View style={styles.optionRow}>
              <Option
                name="Gatal Tenggorokan"
                value="G17"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
              <Option
                name="Suara serak"
                value="G18"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>

          <View>
            <View style={styles.optionRowLast}>
              <Option
                name="Hilang Suara"
                value="G19"
                gejala={gejala}
                setGejala={handleGejalaChange}
                reset={reset}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity onPress={showSubmit} style={styles.footer}>
          <Text style={styles.fontSubmit}>Diagnosa</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {errorMessage ? (
              <View style={styles.errorContent}>
                <Text style={styles.errorHeader}>Error</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              </View>
            ) : (
              <View>
                <Text style={styles.modalHeader}>Hasil Diagnosis</Text>
                <View style={styles.headerCircle}>
                  <View style={styles.circle} />
                  <Image source={ResultImage} style={styles.headerImage} />
                </View>
                <View style={styles.content}>
                  <Text style={styles.contentText}>{resPenyakit}</Text>
                  <Text
                    style={
                      styles.contentText
                    }>{`Similaritas: ${resSimilarity}`}</Text>
                </View>
              </View>
            )}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={mainColor} />
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  optionRow: {
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginTop: 0,
  },
  optionHeader: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  footer: {
    position: 'absolute',
    backgroundColor: mainColor,
    left: 20,
    right: 20,
    bottom: 15,
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  fontSubmit: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    height: '90%',
    position: 'relative',
  },
  headerCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 35,
    width: 330,
    height: 335,
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 200,
    backgroundColor: mainColor,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -150}, {translateY: -175}],
  },
  headerImage: {
    width: 312,
    height: 293,
    borderRadius: 97,
    position: 'absolute',
    top: '53%',
    left: '56%',
    transform: [{translateX: -131}, {translateY: -163}],
  },
  modalHeader: {
    marginTop: windowHeight * 0.02,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E18962',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  content: {
    backgroundColor: '#F7DDA9',
    borderRadius: 20,
    padding: 20,
  },
  contentText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    color: '#E8723E',
  },
  closeButton: {
    position: 'absolute',
    backgroundColor: mainColor,
    padding: 10,
    borderRadius: 5,
    bottom: 40,
    height: 50,
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
  errorContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight * 0.35,
  },
  errorHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
