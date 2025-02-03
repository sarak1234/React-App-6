// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// const Product1 = ({ route }) => {
//   const { productId } = route.params; // Get the productId passed from the previous screen
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product details using the productId
//     fetch(`https://fakestoreapi.com/products/${productId}`)
//       .then(res => res.json())
//       .then(json => setProduct(json))
//       .catch(error => console.error(error));
//   }, [productId]);

//   if (!product) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{product.title}</Text>
//       <Text style={styles.description}>{product.description}</Text>
//       <Text style={styles.price}>${product.price}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
// });

// export default Product1;
