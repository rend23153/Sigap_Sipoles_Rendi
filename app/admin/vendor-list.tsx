import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, useColorScheme, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

// Mock data for orders
const vendors = [
  { id: '28293837', date: 'August 22, 2024', name: 'PT RAWRR KRAKATAW', description: 'Ngaglik, Kab Sleman',  image: require("../../assets/images/pt_wika.png")},
  { id: '00287423', date: 'August 22, 2024', name: 'CV LANCAR JAYA',  description: 'Magelang, Jawa Tengah',  image: require("../../assets/images/pt_wika.png")},
  { id: '00287127', date: 'August 22, 2024', name: 'PT ANGGAJAYA',  description: 'Surabaya, Jawa Timur',  image: require("../../assets/images/pt_wika.png")},
  { id: '09287427', date: 'August 22, 2024', name: 'PT SEJAHTERA ABADI', description: 'Semarang, Jawa Tengah',  image: require("../../assets/images/pt_wika.png")},
];



const VendorListScreen = () => {
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
        placeholder="Search vendor here"
        value={searchText}
        onChangeText={setSearchText}
      />

    <FlatList
      data={vendors}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={[styles.orderCard, { backgroundColor: cardBackgroundColor }]}>
          {/* Status indicator */}
          <View style={[styles.statusIndicator, { backgroundColor: cardBackgroundColor }]} >
              <Image
              source={item.image}
              style={{ width: 80, height: 80}} // Set the image size and style
              resizeMode="contain"
            />
          </View>
          <View style={styles.orderDetails}>
            <ThemedText className="font-omedium text-lg">{item.name}</ThemedText>
            <ThemedText className="font-oregular text-base" style={styles.description}>{item.description}</ThemedText>
            <View style={styles.statusContainer}>
            <TouchableOpacity style={[{ backgroundColor: outlineColor }]} className='flex flex-row space-x-1items-center p-1 rounded-md'>
                <ThemedText className="font-oregular text-xs text-[#FAC441]">
                  Edit product
                </ThemedText>
                  <Ionicons name="create-outline" size={16} color={'#FAC441'} />
              </TouchableOpacity>
              <ThemedText className="font-olight text-xs" style={styles.orderId}>Registered on {item.date}</ThemedText>
            </View>
          </View>
        </View>
      )}
    />
    <Link href='/admin/vendor-add' asChild>
    <TouchableOpacity className='absolute bottom-10 right-5'>
      <View style={[{backgroundColor: cardBackgroundColor, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4,}]}>
      <Ionicons name="add" size={50} color="#23ACE3" />

      </View>
    </TouchableOpacity>
    </Link>
    </View>
  );
};

export default VendorListScreen

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
    justifyContent: 'space-between',
  },
  statusText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: '600',
    marginBottom: 15,
    color: "#FAC441",
  },
  orderId: {
    marginTop: 10,
    color: '#999',
  },
});
