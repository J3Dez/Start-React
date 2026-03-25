import { StyleSheet, Text, View, Image, Button, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({titel, Description, image, onPress, price}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{titel}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.price}>€ {price}</Text>
      <Text style={styles.description} numberOfLines={5}>{Description}</Text>
      <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate("Product", {
          titel,
          Description,
          price,
          image
        })}
      ><Text style={styles.btnText}>Zie meer</Text></TouchableOpacity>
    </View>
  );
};

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
  },
  image: {
  width: '100%',
  height: 200,
  borderRadius: 10,
  marginTop: 10,
},
  price: {
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
  btn: {
    backgroundColor:'#249CED',
    borderRadius: 8,
  },
  btnText: {
    color:'#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
});

export default ProductCard;