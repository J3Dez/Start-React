import { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, TouchableOpacity, Separators } from 'react-native';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const ProductDetail = ( { route } ) => {
    const {titel, Description, image, onPress, price} = route.params;

    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(quantity + 1);
        const decreaseQuantity = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        };

  const navigation = useNavigation(); 
  return (
    <ScrollView style={styles.card}>
      <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate("Home")}>
      <Text style={styles.btnText}>Back</Text></TouchableOpacity>
      
      <Text style={styles.title}>{titel}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.price}>€ {price}</Text>
      <Text style={styles.description} numberOfLines={5}>{Description}</Text>

    {/* plus min button */}
        <View style={styles.QuantityContainer}>
            <TouchableOpacity style={styles.buttonMi} onPress={decreaseQuantity}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.totalPrice}>Total: € {price * quantity}</Text>
            <TouchableOpacity style={styles.buttonMa} onPress={increaseQuantity}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight:'bold',
  },
  image: {
  width: '100%',
  height: 200,
  borderRadius: 10,
  marginTop: 10,
},
  price: {
    textAlign: 'right',
    fontWeight:'bold',
    paddingRight: 10,
    paddingBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
  QuantityContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor:'#ccc',
    padding: 10,
    borderRadius: 5,
  },
  buttonMi: {
    width: 30,
    backgroundColor:'#249CED',
    alignItems:'center',
    fontSize: 10,
    borderRadius: 3,
  },
  buttonMa: {
    width: 30,
    backgroundColor:'#ed2724',
    alignItems:'center',
    fontSize: 10,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight:'bold',
    color: 'white',
  },  
  totalPrice: {
    fontWeight:'bold',
  }
});

export default ProductDetail;