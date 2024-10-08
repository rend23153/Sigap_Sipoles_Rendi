import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, useColorScheme, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Link } from 'expo-router';

// Mock data for orders
const products = [
  { id: '28293837',  name: 'Power Pole Large', description: 'Type 682-150',  image: require("../../assets/images/tiang.png")},
  { id: '00287423',  name: 'Power Pole Medium',  description: 'Type 682-100',  image: require("../../assets/images/tiang.png")},
  { id: '00287127',  name: 'Power Pole Small',  description: 'Type 682-50',  image: require("../../assets/images/tiang.png")},
  { id: '09287427',  name: 'Power Pole Extra Large', description: 'Type 682-200XL',  image: require("../../assets/images/tiang.png")},
];



const ProductListScreen = () => {
  const colorScheme = useColorScheme(); // Get the current color scheme
  const searchBackgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#fff';  // Adjusted for dark mode
  const cardBackgroundColor = colorScheme === 'dark' ? '#161719' : '#FFFFFF'; // Card background color for dark mode
  const outlineColor = colorScheme === 'dark' ? '#2b2b2b' : '#F7F7F7FF'; // Card background color for dark mode
  const backgroundColor = colorScheme === 'dark' ? '#161719' : '#FFFFFF';
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor }}>
    <TextInput className="font-omedium"
        style={[styles.searchInput, { backgroundColor: searchBackgroundColor }, { borderColor: outlineColor }]}
        placeholder="Search product here"
        value={searchText}
        onChangeText={setSearchText}
      />

    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={[styles.orderCard, { backgroundColor: cardBackgroundColor }]}>
          {/* Status indicator */}
          <View style={[styles.statusIndicator, { backgroundColor: cardBackgroundColor }]} >
              <Image
              source={item.image}
              style={{ width: 80, height: 80, borderRadius: 10 }} // Set the image size and style
              resizeMode="contain"
            />
          </View>
          <View style={styles.orderDetails}>
            <ThemedText className="font-omedium text-lg">{item.name}</ThemedText>
            <ThemedText className="font-oregular text-base" style={styles.description}>{item.description}</ThemedText>
            <View style={styles.statusContainer}>
              <TouchableOpacity style={[{ backgroundColor: outlineColor }]} className='flex flex-row space-x-1 items-center p-1 rounded-md'>
                <ThemedText className="font-oregular text-xs text-[#FAC441]">
                  Edit product
                </ThemedText>
                  <Ionicons name="create-outline" size={16} color={'#FAC441'} />
              </TouchableOpacity>
              <TouchableOpacity style={[{ backgroundColor: outlineColor }]} className='flex flex-row space-x-1 ml-2 items-center p-1 rounded-md'>
                <ThemedText className="font-oregular text-xs text-redalert">
                  Delete product
                </ThemedText>
                  <Ionicons name="trash-outline" size={16} color={'#Fc366b'} />
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
      )}
    />
    <Link href='/admin/product-add' asChild>
    <TouchableOpacity className='absolute bottom-10 right-5'>
      <View style={[{backgroundColor: cardBackgroundColor, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4,}]}>
      <Ionicons name="add" size={50} color="#23ACE3" />

      </View>
    </TouchableOpacity>
    </Link>
    </View>
  );
};

export default ProductListScreen

// Styles
const styles = StyleSheet.create({

  searchInput: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  orderCard: {
    flexDirection: 'row',
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    
  },
  statusIndicator: {
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderDetails: {
    marginLeft: 10,
    flex: 1,
  },
  description: {
    color: '#666',
  },
  statusContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.07,
    // shadowRadius: 4,
    // elevation: 3,
  },
  editText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: '600',
    marginBottom: 15,
    color: "#FAC441",
  },

  deleteText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: '600',
    marginBottom: 15,
    color: "#FC366B",
  },

  orderId: {
    marginTop: 10,
    color: '#999',
  },
});
