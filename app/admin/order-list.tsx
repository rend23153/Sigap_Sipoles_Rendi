import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Link } from 'expo-router';

// Mock data for orders
const orders = [
  { id: '28293837', name: 'Power Pole Large', status: 'Completed', description: 'Installation was successful on 26/09/24.', statusColor: '#00ADEF' },
  { id: '00287423', name: 'Power Pole Large', status: 'On-Going', description: 'In the process of shipping.', statusColor: '#FF9B2F' },
  { id: '00287127', name: 'Power Pole Large', status: 'In Trouble', description: 'Unexpected problems occurred.', statusColor: '#FC366B' },
  { id: '09287427', name: 'Power Pole Large', status: 'Unprocessed', description: 'Order not yet processed by vendor.', statusColor: '#8153BC' },
];

// Tab navigation setup
const TabRoutes = {
  All: () => <OrderList filter="All" />,
  Unprocessed: () => <OrderList filter="Unprocessed" />,
  OnGoing: () => <OrderList filter="On-Going" />,
  Completed: () => <OrderList filter="Completed" />,
  OrderIssues: () => <OrderList filter="In Trouble" />,
};

const OrderListScreen = () => {  
  const colorScheme = useColorScheme(); // Get the current color scheme
  const backgroundColor = colorScheme === 'dark' ? '#161719' : '#FFFFFF';
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'All', title: 'All' },
    { key: 'Unprocessed', title: 'Unprocessed' },
    { key: 'OnGoing', title: 'On-Going' },
    { key: 'Completed', title: 'Completed' },
    { key: 'OrderIssues', title: 'In Trouble' },
  ]);


  // Render method for the tabs
  const renderScene = SceneMap(TabRoutes);

  return (
    <View style={{ flex: 1, backgroundColor }}>
      {/* Search Bar */}
      
      {/* Tabs */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: 400 }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#00ADEF' }} // Indicator color for selected tab
            style={{ backgroundColor }} // Background color of the tab bar
            labelStyle={{
              fontFamily: 'Outfit-Semibold', // Use the 'Outfit' font family
              fontSize: 12,
            }}
            renderLabel={({ route, focused }) => (
              <Text
                className={`text-base font-osemibold text-sm ${
                  focused ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                {route.title}
              </Text>
            )}
          />
        )}
        sceneContainerStyle={{ backgroundColor }} // Set background color for the scene container
        style={{ marginTop: 0 }} // Additional styling if needed
      />

      
    </View>
  );
}

// OrderList Component
const OrderList = ({ filter }) => {
  const colorScheme = useColorScheme(); // Get the current color scheme
  const searchBackgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#fff';  // Adjusted for dark mode
  const cardBackgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#fff'; // Card background color for dark mode
  const outlineColor = colorScheme === 'dark' ? '#2b2b2b' : '#f0f0f0'; // Card background color for dark mode
  const [searchText, setSearchText] = useState('');

  const filteredOrders = orders.filter(order =>
    filter === 'All' ? true : order.status === filter
  );

  return (
    <View>
    <TextInput className="font-omedium"
        style={[styles.searchInput, { backgroundColor: searchBackgroundColor }, { borderColor: outlineColor }]}
        placeholder="Search order id here"
        value={searchText}
        onChangeText={setSearchText}
      />

    <FlatList
      data={filteredOrders}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Link href={{ pathname: "/employee/detail-order", params: { id: item.id, name: item.name, status: item.status } }} asChild>
            <TouchableOpacity>
        <View style={[styles.orderCard, { backgroundColor: cardBackgroundColor }]}>
          {/* Status indicator */}
          <View style={[styles.statusIndicator, { backgroundColor: item.statusColor }]} />
          <View style={styles.orderDetails}>
            <ThemedText className="font-omedium text-2xl mt-3">{item.name}</ThemedText>
            <ThemedText className="font-oregular text-sm" style={styles.description}>{item.description}</ThemedText>
            <View style={styles.statusContainer}>
                <ThemedText className="font-oregular text-sm" style={[styles.statusText, { color: item.statusColor }, { backgroundColor: outlineColor }]}>
                  {item.status}
                </ThemedText>
              <ThemedText className="font-olight text-sm" style={styles.orderId}>#ID {item.id}</ThemedText>
            </View>
          </View>
        </View>     
        </TouchableOpacity>
        </Link>
      )}
    />
    </View>
  );
};

export default OrderListScreen

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
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusIndicator: {
    marginVertical: 15,
    width: 5,
    borderRadius: 10,
  },
  orderDetails: {
    marginLeft: 15,
    flex: 1,
  },
  description: {
    color: '#666',
    marginTop: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statusText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  orderId: {
    marginRight: 15,
    color: '#999',
  },
});
