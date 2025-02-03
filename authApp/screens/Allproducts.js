// import React, { useState, useEffect } from 'react';
// import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// const Allproducts = ({ navigation }) => {
//   const [products, setProducts] = useState([]);

//   // Fetch data from API when the component mounts
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(json => setProducts(json))
//       .catch(error => console.error(error));
//   }, []); // Empty array means this runs only once when the component mounts

//   // Function to handle product click and navigate to product details screen
//   const handleProductClick = (productId) => {
//     // Navigate to the Product1 screen, passing the productId as a parameter
//     navigation.navigate('Product1', { productId });
//   };

//   // Define item rendering with TouchableOpacity to make products clickable
//   const Item = ({ title, onPress }) => (
//     <TouchableOpacity onPress={onPress} style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={products}
//           renderItem={({ item }) => (
//             <Item title={item.title} onPress={() => handleProductClick(item.id)} />
//           )}
//           keyExtractor={item => item.id.toString()} // Ensure the key is unique
//         />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#fcf3cf',
//     padding: 10,
//     marginVertical: 5,
//     marginHorizontal: 12,
//   },
//   title: {
//     fontSize: 18,
//   },
// });

// export default Allproducts;
