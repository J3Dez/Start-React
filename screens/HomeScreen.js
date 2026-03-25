import { StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import Products from '../components/Products';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.text}>Onze motoren</Text>
    <TextInput style={styles.searchbar} placeholder="Zoek naar een motor"></TextInput>

    <Products />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f5',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color:'#249CED',
  },
  searchbar: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
  }
});

export default HomeScreen;