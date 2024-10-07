import { View, Pressable, ScrollView } from 'react-native';
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
    text: "Account\nList",
    image: require("../../../assets/images/maccount.png"), // Update with actual path
    color: "rgba(35, 172, 227, 0.15)", // 15% Blue transparency
    link: "/admin/account-list",
  },
  {
    text: "Order\nList",
    image: require("../../../assets/images/morder.png"), // Update with actual path
    color: "rgba(255, 155, 47, 0.15)",
    link: "/admin/order-list", // 15% Orange transparency
  },
  {
    text: "Vendor\nList",
    image: require("../../../assets/images/mpayment.png"), // Update with actual path
    color: "rgba(252, 54, 107, 0.15)", // 15% Pink transparency
    link: "/admin/vendor-list",
  },
  {
    text: "Product\nList",
    image: require("../../../assets/images/mproduct.png"), // Update with actual path
    color: "rgba(129, 83, 188, 0.15)", // 15% Purple transparency
    link: "/admin/product-list",
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
  const cardBackgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#fff'; // Card background color for dark mode
  const dropBackgroundColor = colorScheme === 'dark' ? '#131314FF' : '#fff'; //
  const seperateColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000'; //
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <ScrollView >
      <View className="my-5  space-y-4">
        <View className="px-5 justify-between items-start flex-row mb-6">
          <View>
            <ThemedText className="text-3xl font-olight">
              Welcome,
            </ThemedText>
            <ThemedText className="text-3xl font-osemibold">
              Lanjar Samadi Super
            </ThemedText>
          </View>
          <View className="mt-1.5">
          <Image 
            source={images.personimage}
            className="w-12 h-12"         
          />
        </View>
        </View>
        
        <View className="mx-5 my-2 px-8 py-4 space-y-3 rounded-3xl shadow" style={[{ backgroundColor: cardBackgroundColor }]}>
          <View className='space-x-2 flex-row items-center'>
            <Image 
              source={require("../../../assets/images/overview.png")}
              className="w-10 h-10"         
            />  
            <ThemedText className="text-2xl font-osemibold">
              Overview
            </ThemedText>
          </View>

          <View className='space-x-2 flex-row'>
            <View className='rounded-md p-1 shadow-sm' style={[{ backgroundColor: dropBackgroundColor }]}>
              <ThemedText className="px-3 text-base font-oregular text-[#23ACE3] ">
                Monthly
              </ThemedText>
            </View>
            <View className=' rounded-md p-1 shadow-sm' style={[{ backgroundColor: dropBackgroundColor }]}>
              <ThemedText className="px-3 text-base font-oregular text-[#23ACE3] ">
                Download Report
              </ThemedText>
            </View>
          </View>

          <View className='flex-row justify-between'>
            <View>
              <ThemedText className="text-base font-oregular">
                Total Order
              </ThemedText>
              <ThemedText className="text-2xl font-omedium text-center">
                100
              </ThemedText>
            </View>

            <View className='rounded-full' style={[{ backgroundColor: seperateColor,  width: 1  }]} />

            <View>
              <ThemedText className="text-base font-oregular">
                On-Going
              </ThemedText>
              <ThemedText className="text-2xl font-omedium text-center">
                9
              </ThemedText>
            </View>

            <View className='rounded-full' style={[{ backgroundColor: seperateColor,  width: 1  }]} />

            <View>
              <ThemedText className="text-base font-oregular">
                Complete
              </ThemedText>
              <ThemedText className="text-2xl font-omedium text-center">
                91
              </ThemedText>
            </View>

          </View>
          
            
        </View>

        {/* end of overview */}

        <ThemedText className="text-3xl font-osemibold px-5">
          Income
        </ThemedText>

        <View className='mx-5 flex-row justify-between'>
          <View className=" my-2 py-4 space-y-2 rounded-2xl shadow" style={[{ backgroundColor: cardBackgroundColor }]}>
            <View className='flex-row px-2'>
              <Image 
                source={require("../../../assets/images/restimate.png")}
                className="w-5 h-5"         
              />  
              <ThemedText className="px-2 text-base font-oregular text-gray-400 ">
                Estimated Revenue
              </ThemedText>
            </View>
            <ThemedText className="px-2 text-xl text-center font-omedium ">
                Rp 1.024.490.000,-
            </ThemedText>
          </View>

          <View className=" my-2 py-4 space-y-2 rounded-2xl shadow" style={[{ backgroundColor: cardBackgroundColor }]}>
            <View className='flex-row px-2'>
              <Image 
                source={require("../../../assets/images/rtemporary.png")}
                className="w-5 h-5"         
              />  
              <ThemedText className="px-1 text-base font-oregular text-gray-400 ">
              Temporary Revenue
              </ThemedText>
            </View>
            <ThemedText className="px-1 text-xl text-center font-omedium ">
            Rp 924.490.000,-
            </ThemedText>
          </View>

        </View>
        {/* end of income*/}

        <View className=" py-6 space-y-2 rounded-3xl shadow mx-5 bg-[#FC366B]" >
            <View className='flex-row px-7 items-center' >
              <Image 
                source={require("../../../assets/images/issues.png")}
                className="w-10 h-10"         
              />  
              <ThemedText className="px-2 text-3xl font-omedium text-white ">
                Order Issues
              </ThemedText>
            </View>
            <ThemedText className="px-1 text-xs text-center font-olight text-white ">
            The latest monitoring shows that there are delays in 0 orders.
            </ThemedText>
          </View>


        
        

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
            }}
          >
            <Image
              source={item.image}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>
        <ThemedText className="font-omedium text-center">
          {item.text}
        </ThemedText>
      </View>
    )}
  />
</GestureHandlerRootView>


    
    
        
      </View>
      </ScrollView>

      
    </SafeAreaView>
    
  )
}

export default HomeScreen



