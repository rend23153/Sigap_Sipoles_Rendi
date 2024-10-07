import { View, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, Platform } from 'react-native';
import { FlatList, TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { images } from '@constants/images';
import { Link } from 'expo-router';

const dataFeatures = [
  {
    text: "Generate\nQR Code",
    image: require("../../../assets/images/menuqr.png"), // Update with actual path
    color: "rgba(35, 172, 227, 0.15)", // 15% Blue transparency
    link: "/employee/generate-qr",
  },
  {
    text: "Upload\nPayment",
    image: require("../../../assets/images/menupayment.png"), // Update with actual path
    color: "rgba(255, 155, 47, 0.15)",
    link: "/employee/upload-payment", // 15% Orange transparency
  },
  {
    text: "Order\nList",
    image: require("../../../assets/images/menuorder.png"), // Update with actual path
    color: "rgba(252, 54, 107, 0.15)", // 15% Pink transparency
    link: "/employee/order-list",
  },
  {
    text: "Vendor\nList",
    image: require("../../../assets/images/menuvendor.png"), // Update with actual path
    color: "rgba(129, 83, 188, 0.15)", // 15% Purple transparency
    link: "/employee/vendor-list",
  },
];

const dataTask = [
  {
    text: "No current activity",
    image: require("../../../assets/images/taskcolored.png"), // Update with actual path
    color: "#00ADEF", // Blue background for the first item
  },
  {
    text: "No current activity",
    image: require("../../../assets/images/taskgreyed.png"), // Update with actual path
    color: "rgba(100, 100, 100, 0.15)", // 15% Purple transparency
  },
  {
    text: "No current activity",
    image: require("../../../assets/images/taskgreyed.png"), // Update with actual path
    color: "rgba(100, 100, 100, 0.15)", // 15% Purple transparency
  },
  {
    text: "No current activity",
    image: require("../../../assets/images/taskgreyed.png"), // Update with actual path
    color: "rgba(100, 100, 100, 0.15)", // 15% Purple transparency
  },
];

const HomeScreen = () => {  
  const colorScheme = useColorScheme(); // Get the current color scheme

  const backgroundColor = colorScheme === 'dark' ? '#161719' : '#FFFFFF';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <View className="my-6  space-y-6">
        <View className="px-5 justify-between items-start flex-row mb-6">
          <View>
            <ThemedText className="text-3xl font-olight">
              Welcome,
            </ThemedText>
            <ThemedText className="text-3xl font-osemibold">
              Lanjar Samadi Wika
            </ThemedText>
          </View>
          <View className="mt-1.5">
          <Image 
            source={images.personimage}
            className="w-12 h-12"         
          />
        </View>
        </View>
        <View className="flex-row px-8 space-x-6">
          <View>
          <ThemedText className="text-2xl font-omedium">
            Task
          </ThemedText>
          </View>
          <View>
          <ThemedText className="text-2xl font-omedium">
                 History
              </ThemedText>
          </View>
        </View>
        
        <GestureHandlerRootView>
      <FlatList
        horizontal={true}
        style={{ paddingVertical: 5 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        data={dataTask}
        keyExtractor={(item, idx) => item.text + idx}  // Updated keyExtractor to use 'text'
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: 180,
              height: 270,
              backgroundColor: item.color, // Dynamically setting background color
              borderRadius: 20,
              padding: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
            onPress={() => {
              console.log(item.text);  // Updated to log 'text'
            }}
          >
            <Image
              source={item.image}
              style={{ width: 160, height: 160, marginBottom: 10 }} // Set the image size and style
              resizeMode="contain"
            />
            <ThemedText className="font-olight">
              {item.text}  {/* Updated to display 'text' */}
            </ThemedText>
          </TouchableOpacity>
        )}
        
      />
    </GestureHandlerRootView>

    <ThemedText className="text-3xl font-osemibold px-5">
              Main Features
            </ThemedText>
            

            <GestureHandlerRootView>
  <FlatList
    horizontal={true}
    style={{ paddingVertical: 5 }}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ gap: 20, paddingHorizontal: 20 }}
    data={dataFeatures}
    keyExtractor={(item, idx) => item.text + idx}
    renderItem={({ item }) => (
      <View style={{ alignItems: 'center' }}>
        {/* Add Link component and wrap TouchableOpacity */}
        <Link href={item.link} asChild>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
              height: 80,
              backgroundColor: item.color,
              borderRadius: 20,
              padding: 10,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>
        <ThemedText className="font-olight">
          {item.text}
        </ThemedText>
      </View>
    )}
  />
</GestureHandlerRootView>


    
    
        
      </View>
    </SafeAreaView>
    
  )
}

export default HomeScreen



