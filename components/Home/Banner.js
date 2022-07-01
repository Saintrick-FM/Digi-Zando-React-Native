import React, {useState, useEffect} from 'react';
import {Container, Heading, Text, Box, Image} from 'native-base'
import {Dimensions,} from 'react-native'
import Swiper from 'react-native-swiper/src'

let {width}= Dimensions.get('window')

export default function Banner() {

    const [bannerData, setBannerData]= useState([])

    useEffect(() => {
  return () => {
      setBannerData([
    {
    
    image: 'https://wallpaperaccess.com/full/317501.jpg',
    text: 'Sacs',
    selected: false
    },

    {
    
    image: require('../../assets/earings.jpg'),
    text: 'Parures',
    selected: false
    },

    {
    
    image: require('../../assets/bracelet.png'),
    text: 'Bracelet',
    selected: false
    },
])
  };

  return ()=> {
      setBannerData([])
  }
}, [])

  return (
   <ScrollView >
      
   
        <Swiper
        showButtons={false}
        autoplay={true}
        autoplayTimeout={2}
        
        >
 <Container  centerContent={true}>
        {bannerData.map((item)=>{
            return (

       <Box style={{flexDirection: 'row'}} key= {item.text}>
            <Box  bg="primary.400" p="12"w='45%' rounded="lg">
           <Heading>
          Acheter ou vendez des
          <Text color="emerald.500"> {item.text}</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
       </Box>
        <Image
           source={{
               uri: item.image
           }}
           
           resizeMode= 'contain'
           alt="Image"
           size="xs"
           w='45%'
        />
       </Box>
            )
        })}
       
      
      </Container>
        </Swiper>
   </ScrollView>
  );
}
