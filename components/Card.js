import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({titel, Description, image, onPress, price}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{titel}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{Description}</Text>
      <Button
        title='Zie meer' 
        onPress={() => navigation.navigate("Product", {
          titel,
          Description,
          price,
          image
        })}/>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
  },
  price: {
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10,
  },
  image: {
  width: '100%',
  height: 150,
  borderRadius: 10,
  marginTop: 10,
},
});

export default ProductCard;