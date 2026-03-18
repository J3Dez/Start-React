import { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

const ProductDetail = ( { route } ) => {
    const {titel, Description, image, onPress, price} = route.params;

    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(quantity + 1);
        const decreaseQuantity = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        };
 
  return (
    <ScrollView style={styles.card}>
        <Text style={styles.title}>ProductDetail</Text>
        <Image source={image} style={styles.image} />
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.description}>{Description}</Text>


        <View style={styles.QuantityContainer}>
            <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.totalPrice}>Total: €{price * quantity}</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  },
});

export default ProductDetail;