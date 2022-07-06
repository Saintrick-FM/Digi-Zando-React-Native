import React, {useState, useEffect} from 'react';
import {Container, Heading, Text, ScrollView, Box,Button,AspectRatio} from 'native-base'
import {Dimensions,View,Image, FlatList, StyleSheet} from 'react-native'
import BannerItem from './BannerItem'

var {width, height}= Dimensions.get('window')

const data = require('../../assets/data/bannerItems.json')

export default function Banner(){

  const [bannerData, setBannerData]= useState([])
  const [imgActive, setImgActive]= useState(0)

    useEffect(() => {

    setBannerData(data)
    
  return ()=> {
      setBannerData([])
  }
}, [])

function onChange(nativeEvent){
  if (nativeEvent) {
    const slide = 
    Math.ceil(nativeEvent.contentOffset.x / nativeEvent.nativeEvent.layoutMeasurement.width)
    slide != imgActive && setImgActive(slide)
  } 
}

console.log('bannerData '+ JSON.stringify(bannerData))

  return (
    <Box shadow={2} justifyContent='center' alignItems='center' alignSelf='center' width={width} p='3' borderRadius='5'
     style={{height:height*0.25 + 5}}>
    
    <ScrollView  style={styles.wrap}
    onScroll={({nativeEvent})=> onChange(nativeEvent)}
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    horizontal
    
    >
    {
      bannerData.map((element, index)=> {
      return(

      <BannerItem key={index} item={element}/>
        )
      }
      )
    
    }
    </ScrollView>
    <View style={styles.wrapDot}>
       {
      bannerData.map((e, index)=>
      <Text key={index}
      style={ imgActive ==index ? styles.dotActive: styles.dot}
      >●</Text>
      
      )}
    </View>
   
    
    </Box>
    
         
  );
}
  
const styles = StyleSheet.create({
  
  wrap: {
    width: width-10,
    height: height*0.25,
    borderRadius:20,

  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin:3,
    color: 'black'
  },
  dotActive: {
    margin:3,
    color: 'white'
  }


}) 
   
    
  //  <ScrollView >
  //       <Swiper
  //       showButtons={false}
  //       autoplay={true}
  //       autoplayTimeout={2}
        
  //       >
  //       <Container  centerContent={true}>
  //       {bannerData.map((item)=>{
  //           return (

  //      <Box style={{flexDirection: 'row'}} key= {item.text}>
  //           <Box  bg="primary.400" p="12"w='45%' rounded="lg">
  //          <Heading>
  //         Acheter ou vendez des
  //         <Text color="emerald.500"> {item.text}</Text>
  //       </Heading>
  //       <Text mt="3" fontWeight="medium">
  //         NativeBase is a simple, modular and accessible component library that
  //         gives you building blocks to build you React applications.
  //       </Text>
  //      </Box>
  //       <Image
  //          source={{
  //              uri: item.image
  //          }}
           
  //          resizeMode= 'contain'
  //          alt="Image"
  //          size="xs"
  //          w='45%'
  //       />
  //      </Box>
  //           )
  //       })}
       
      
  //     </Container>
  //       </Swiper>
  //  </ScrollView>
