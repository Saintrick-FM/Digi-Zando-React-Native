import React from 'react';
import { View, Dimensions,Image, Text, StyleSheet} from 'react-native';
import {Button,VStack,AspectRatio,HStack, Heading, Stack, Center, Box, Divider, Icon, IconButton} from 'native-base'
import {AntDesign} from 'react-native-vector-icons'

var {width}= Dimensions.get('window')

export default function ProductCard(props) {
const {image,name,price,countInStock,likes,categorie,statut}= props.item.item
console.log("ProductCard props"+ JSON.stringify(props.item))

  return (
   
    <HStack 
    display="flex" 
     flexDirection="column" 
    justifyContent="space-between" 
    border="1" 
    w='50%' 
    bg='gainsboro' 
    borderRadius="md">

<AspectRatio  ratio={16 / 9}>
            <Image source={{uri: image}} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} 
        position="absolute" top="0" right='0' px="3" py="1.5">
             <IconButton
                 variant="solid"
                 icon={<Icon size="md" as={AntDesign} name="heart" color="white" />}
                 onPress={()=>{
                 console.log('hello')}}
                 />
          </Center>

           <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
             {name.lenght>15 ? name.substring(0, 15-3)+ '...': name}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              {price} FCFA
            </Text>
    {countInStock > 0 ?  <Button
           colorScheme="primary"
                onPress={()=>{
                    console.log('hello')
                }}
           >
            Ajouter
            
        </Button> : <Text>Stock vide</Text>}
          </Stack>
         
        </Stack>


    </HStack>
 

  )
}
const styles = StyleSheet.create({
    container: {
        // width: width / 2 -20,
        height: width / 1.7,
        //padding: 10,
        borderRadius: 10,
        //marginTop: 55,
        //marginBottom: 5,
        //marginLeft:10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    LikeBtn:{
        position:'absolute',
        right: 0,
        top: 5,
    },
    image: {
        width: width/2 -20 -10,
        height: width/2 -20 -30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width/2 -20 -90,
        backgroundColor: 'transparent',
        width: width/2 -20 -10
    },
    title : {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10,
    }
})

