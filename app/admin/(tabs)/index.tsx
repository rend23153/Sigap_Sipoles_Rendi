import { View, Pressable, ScrollView, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, Platform } from 'react-native';
import { FlatList, TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { images } from '@constants/images';
import { Link, LinkProps } from 'expo-router';
import { Colors } from '@/constants/Colors';

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

  const backgroundColor = colorScheme === 'dark' ? Colors.dark.background : Colors.light.background;
  const cardBackgroundColor = colorScheme === 'dark' ? Colors.dark.card : Colors.light.card; // Card background color for dark mode
  const dropBackgroundColor = colorScheme === 'dark' ? Colors.dark.outline : Colors.light.outline; //
  const seperateColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000'; //
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <ScrollView
        style={{ minHeight: Dimensions.get('window').height  }}
      >
        <View className="my-3  space-y-2">
          <View className="px-5 justify-between items-start flex-row mb-6">
            <View>
              <ThemedText className="text-xl font-olight">
                Welcome,
              </ThemedText>
              <ThemedText className="text-2xl font-osemibold">
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

          <View className="mx-5 my-2 px-8 py-3 space-y-3" style={[{ backgroundColor: cardBackgroundColor, borderRadius: 30, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 4, }]}>
            <View className='space-x-2 flex-row items-center'>
              <Image
                source={require("../../../assets/images/overview.png")}
                className="w-10 h-10"
                resizeMode='contain'
              />
              <ThemedText className="text-xl font-osemibold">
                Overview
              </ThemedText>
            </View>

            <View className='space-x-2 flex-row'>
            <View className='  p-1 ' style={[{ backgroundColor: dropBackgroundColor, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 4, elevation: 4,}]}>
                <ThemedText className="px-3 text-xs font-oregular text-originblue">
                  Monthly
                </ThemedText>
              </View>
              <View className='  p-1 ' style={[{ backgroundColor: dropBackgroundColor, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 4, elevation: 4,}]}>
                <ThemedText className="px-3 text-xs font-oregular text-originblue">
                  Download Report
                </ThemedText>
              </View>
            </View>

            <View className='flex-row justify-between'>
              <View>
                <ThemedText className="text-xs font-oregular">
                  Total Order
                </ThemedText>
                <ThemedText className="text-lg font-omedium text-center">
                  101
                </ThemedText>
              </View>

              <View className='rounded-full' style={[{ backgroundColor: seperateColor, width: 1 }]} />

              <View>
                <ThemedText className="text-xs font-oregular">
                  On-Going
                </ThemedText>
                <ThemedText className="text-lg font-omedium text-center">
                  9
                </ThemedText>
              </View>

              <View className='rounded-full' style={[{ backgroundColor: seperateColor, width: 1 }]} />

              <View>
                <ThemedText className="text-xs font-oregular">
                  Complete
                </ThemedText>
                <ThemedText className="text-lg font-omedium text-center">
                  91
                </ThemedText>
              </View>

            </View>


          </View>

          {/* end of overview */}

          <ThemedText className="text-2xl font-osemibold px-5">
            Income
          </ThemedText>

          <View className='mx-5 flex-row justify-between'>
            <View className=" my-2 py-4 space-y-2 rounded-2xl" style={[{ width: '48%', backgroundColor: cardBackgroundColor, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 4, elevation: 4,}]}>
              <View className='flex-row px-2'>
                <Image
                  source={require("../../../assets/images/restimate.png")}
                  className="w-5 h-5"
                />
                <ThemedText className="px-2 text-sm font-oregular text-gray-400 ">
                  Estimated Revenue
                </ThemedText>
              </View>
              <ThemedText className="px-2 text-base text-center font-omedium ">
                Rp 1.024.490.000,-
              </ThemedText>
            </View>

            <View className=" my-2 py-4 space-y-2" style={[{ width: '48%', backgroundColor: cardBackgroundColor,  borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 4, elevation: 4,}]}>
              <View className='flex-row px-2'>
                <Image
                  source={require("../../../assets/images/rtemporary.png")}
                  className="w-5 h-5"
                />
                <ThemedText className="px-1 text-sm font-oregular text-gray-400 ">
                  Temporary Revenue
                </ThemedText>
              </View>
              <ThemedText className="px-1 text-base text-center font-omedium ">
                Rp 924.490.000,-
              </ThemedText>
            </View>

          </View>
          {/* end of income*/}

          <View className=" py-3 space-y-2 rounded-3xl shadow mx-5 bg-redalert" >
            <View className='flex-row px-7 items-center' >
              <Image
                source={require("../../../assets/images/issues.png")}
                className="w-10 h-10"
              />
              <ThemedText className="px-2 text-xl font-omedium text-white ">
                Order Issues
              </ThemedText>
            </View>
            <ThemedText className="px-1 text-center font-olight text-white " style={[{fontSize: 11 }]}>
              The latest monitoring shows that there are delays in 0 orders.
            </ThemedText>
          </View>





          <ThemedText className="text-2xl font-osemibold px-5">
            Main Features
          </ThemedText>


          <GestureHandlerRootView>
            <FlatList
              
              horizontal={true}
              centerContent={true}
              style={{ paddingVertical: 5 }}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 35, paddingHorizontal: 20 }}
              data={dataFeatures}
              keyExtractor={(item, idx) => item.text + idx}
              renderItem={({ item }) => (
                <View style={{ alignItems: 'center' }}>
                  {/* Add Link component and wrap TouchableOpacity */}
                  <Link href={item.link } asChild>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 70,
                        height: 70,
                        backgroundColor: item.color,
                        borderRadius: 20,
                        padding: 10,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 40, height: 40 }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </Link>
                  <ThemedText className="font-omedium text-center text-xs">
                    {item.text}
                  </ThemedText>
                </View>
              )}
            />
          </GestureHandlerRootView>





        </View>
        <View className='h-40' />
      </ScrollView>


    </SafeAreaView>

  )
}

export default HomeScreen



