import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, useColorScheme, Image, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

// Mock data for accounts
const accounts = [
    { id: '28293837', name: 'Lanjar Samadi', status: 'Admin', verified: true, image: require("../../assets/images/gupong.png") },
    { id: '00287423', name: 'Hasan wes kecekel', status: 'Employees', verified: true, image: require("../../assets/images/gupong.png") },
    { id: '00287127', name: 'Gilang Semangka', status: 'Admin', verified: true, image: require("../../assets/images/gupong.png") },
    { id: '09287427', name: 'Haikal Al Ghifari', status: 'Drivers', verified: true, image: require("../../assets/images/gupong.png") },
    { id: '00287271', name: 'Pak Min', status: 'Employees', verified: false, image: require("../../assets/images/gupong.png") },
    { id: '09265427', name: 'Kak Gem', status: 'Drivers', verified: false, image: require("../../assets/images/gupong.png") },
];

// Tab navigation setup
const TabRoutes = {
    All: () => <AccountList filter="All" />,
    Request: () => <RequestList />,
    Admin: () => <AccountList filter="Admin" />,
    Employees: () => <AccountList filter="Employees" />,
    Drivers: () => <AccountList filter="Drivers" />,
};

const AccountListScreen = () => {
    const colorScheme = useColorScheme(); // Get the current color scheme
    const backgroundColor = colorScheme === 'dark' ? '#161719' : '#FFFFFF';
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'All', title: 'All' },
        { key: 'Request', title: 'Request' },
        { key: 'Admin', title: 'Admin' },
        { key: 'Employees', title: 'Employees' },
        { key: 'Drivers', title: 'Drivers' },
    ]);

    // Render method for the tabs
    const renderScene = SceneMap(TabRoutes);

    return (
        <View style={{ flex: 1, backgroundColor }}>
            {/* Tabs */}
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: 400 }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        scrollEnabled
                        indicatorStyle={{ backgroundColor: '#00ADEF' }} // Indicator color for selected tab
                        style={{ backgroundColor }} // Background color of the tab bar
                        tabStyle={{
                            width: 90, // Set a fixed width for each tab item
                            justifyContent: 'center', // Center the content of each tab
                        }}
                        labelStyle={{
                            fontFamily: 'Outfit-Semibold', // Use the 'Outfit' font family
                            fontSize: 10,
                        }}
                        renderLabel={({ route, focused }) => (
                            <Text
                                className={` font-osemibold text-xs ${focused ? 'text-blue-500' : 'text-gray-500'
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
};

// AccountList Component
const AccountList = ({ filter }) => {
    const colorScheme = useColorScheme(); // Get the current color scheme
    const searchBackgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#fff'; // Adjusted for dark mode
    const cardBackgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#fff'; // Card background color for dark mode
    const outlineColor = colorScheme === 'dark' ? '#2b2b2b' : '#f0f0f0'; // Card background color for dark mode
    const [searchText, setSearchText] = useState('');

    const filteredAccounts = accounts.filter(account =>
        filter === 'All' ? account.verified : account.verified && account.status === filter
    );

    return (
        <View>
            <TextInput
                style={[styles.searchInput, { backgroundColor: searchBackgroundColor }, { borderColor: outlineColor }]}
                placeholder="Search account name here"
                value={searchText}
                onChangeText={setSearchText}
            />
            <FlatList
                data={filteredAccounts}
                keyExtractor={item => item.id}
                style={{minHeight: Dimensions.get('window').height - 200}}
                renderItem={({ item }) => (

                    <View style={[styles.orderCard, { backgroundColor: cardBackgroundColor }]}>
                        <View style={styles.statusIndicator}>
                            <Image
                                source={item.image}
                                style={{ width: 85, height: 85, borderRadius: 10 }}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.orderDetails}>
                            <ThemedText className="font-omedium text-xl">{item.name}</ThemedText>
                            <ThemedText className="font-oregular text-lg" style={styles.description}>{item.status}</ThemedText>
                            <View style={styles.statusContainer}>
                                <TouchableOpacity style={[{ backgroundColor: outlineColor }]} className='flex flex-row space-x-1 items-center p-1 rounded-md'>
                                    <ThemedText className="font-oregular text-xs text-redalert" >
                                        Delete Account
                                    </ThemedText>
                                    <Ionicons name='trash' color={"#ef4444"}/>
                                </TouchableOpacity>
                                <ThemedText className="font-olight text-xs" style={styles.orderId}>last seen 25 minutes ago</ThemedText>
                            </View>
                        </View>
                    </View>

                )}
            />
        </View>
    );
};

// RequestList Component for Unverified Accounts
const RequestList = () => {
    const colorScheme = useColorScheme(); // Get the current color scheme
    const searchBackgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#fff';
    const cardBackgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#fff';
    const outlineColor = colorScheme === 'dark' ? '#2b2b2b' : '#f0f0f0';
    const [searchText, setSearchText] = useState('');

    const filteredAccounts = accounts.filter(account => !account.verified);

    return (
        <View>
            <TextInput
                style={[styles.searchInput, { backgroundColor: searchBackgroundColor }, { borderColor: outlineColor }]}
                placeholder="Search account name here"
                value={searchText}
                onChangeText={setSearchText}
            />
            <FlatList
                data={filteredAccounts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.orderCard, { backgroundColor: cardBackgroundColor }]}>
                        <View style={styles.statusIndicator}>
                            <Image
                                source={item.image}
                                style={{ width: 85, height: 85, borderRadius: 10 }}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.orderDetails}>
                            <ThemedText className="font-omedium text-xl">{item.name}</ThemedText>
                            <ThemedText className="font-oregular text-lg" style={styles.description}>{item.status}</ThemedText>
                            <View className='flex-row space-x-3 bg-white'>
                                <ThemedText className="font-olight text-xs" style={styles.orderId}>Request account 25 minutes ago</ThemedText>
                                <TouchableOpacity>
                                    <ThemedText className="py-1.5 px-2.5 font-semibold mb-4 text-white rounded-lg" style={[{ backgroundColor: '#FC366B' }]}>X</ThemedText>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <ThemedText className="py-1.5 px-2.5 font-semibold mb-4 text-white rounded-lg" style={[{ backgroundColor: '#28A745' }]}>Y</ThemedText>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default AccountListScreen;

// Styles
const styles = StyleSheet.create({
    searchInput: {
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: Colors.light.background,
    },
    orderCard: {
        flexDirection: 'row',
        marginHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
    },
    statusIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        height: 85,
        borderRadius: 10,
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
        paddingTop: 10,
        borderRadius: 10,
    },
    statusText: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontWeight: '600',
        marginBottom: 15,
        color: '#FC366B',
        borderRadius: 10,
    },
    orderId: {
        marginTop: 10,
        color: '#999',
    },
});
