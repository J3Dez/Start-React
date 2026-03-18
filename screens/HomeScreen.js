import { StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/Card.js';

const HomeScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onze motoren</Text>
    <ProductCard
      titel="Moto Cross de 450 cm³"
      image={{ uri: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZ250F/2026-Yamaha-YZ250F-EU-Icon_Blue-Studio-001-03_Mobile.jpg' }}
      Description="Quel que soit votre niveau..."
      price="10599"
      onPress={() =>
            navigation.navigate("Product", {
                titel: "Moto Cross de 450 cm³",
                Description: "Quel que soit votre niveau...",
                price: "10599",
                image: uri("https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZ250F/2026-Yamaha-YZ250F-EU-Icon_Blue-Studio-001-03_Mobile.jpg"),
            })
        }
    />
        <ProductCard
      titel="Moto Cross de 450 cm³"
      image={{ uri: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZ250F/2026-Yamaha-YZ250F-EU-Icon_Blue-Studio-001-03_Mobile.jpg' }}
      Description="Quel que soit votre niveau..."
      price="10"
      onPress={() =>
            navigation.navigate("Product", {
                titel: "Moto Cross de 450 cm³",
                Description: "Quel que soit votre niveau...",
                price: "10",
                image: uri("https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZ250F/2026-Yamaha-YZ250F-EU-Icon_Blue-Studio-001-03_Mobile.jpg"),
            })
        }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default HomeScreen;