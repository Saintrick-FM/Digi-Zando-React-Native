import React from 'react';
import { View, Dimensions,TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Button,VStack,AspectRatio,Box, Image, Heading, Stack, Center, Divider, Icon, IconButton} from 'native-base'
import {AntDesign} from 'react-native-vector-icons'
import {Ionicons} from 'react-native-vector-icons'

var {width}= Dimensions.get('window')

export default function ProductCard(props) {
const {image,name,price,countInStock,likes,categorie,statut}= props.product

const [liked, setLiked]=React.useState(false)
const [cart, setCart]=React.useState([])


function onClickLike(){
  console.log('like cliqué '+ liked)
  setLiked(!liked)
}

function addCart(element){
  console.log('element a ajouté '+ JSON.stringify(element))
  console.log('cart actuelle'+JSON.stringify(cart))

  if (cart.lenght>0){
   let alreadyAdd= cart.find((item)=> element.name === item.name)
  console.log('methode find '+ cart.find((item)=> element.name === item.name))
    if (alreadyAdd) {
   console.log("alreadyAdd "+ alreadyAdd)
      setCart(cart.filter(item => item.name !== alreadyAdd.name))
    } else{
   console.log("not alreadyAdd "+ alreadyAdd)
      setCart(prevState=>{
      return { ...prevState, element }
    })
    }
    
  }else{
   console.log("not element yet "+ cart)
   setCart(cart.push(element))
  }

  console.log("cart =>"+ JSON.stringify(cart))
}


  return (    
    <Box 
    display="flex" 
    w='48%'
    border="1" 
    alignItems='center'
    m='1%'
    bg='gainsboro' 
    borderRadius="20">

        <AspectRatio  borderRadius="20" w="100%" top="0" ratio={16 / 9}>
            <Image resizeMode='cover' borderTopLeftRadius={20} borderTopRightRadius={20} source={{uri: image}}  alt="image" />
          </AspectRatio>
          
                       
          <Center borderRadius='50%' bg={liked ? 'white': 'violet.400'} _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" top="0" right='0' px="1" py="1">
            <Ionicons name='heart'
          onPress={onClickLike} color={liked ? 'violet.400': 'white'}  size={15}/>

          </Center>

          <Center bg="violet.500" borderTopRightRadius={50} borderBottomRightRadius={50} _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="115" left='0' px="3" py="1">
            {statut}
          </Center>

         
           <Stack height='115' p="4" space={3}>
          <Stack  alignItems='center' space={2}>
            <Heading fontWeight='bold'
        fontSize= '14'
        textAlign= 'center'>
             {name.lenght>15 ? name.substring(0, 15-3)+ '...': name}
            </Heading>

            <Text
            fontWeight="500" 
            fontSize='20'
            color='orange'
            mt= '10' 
            _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} >
              {price} FCFA
            </Text>
<TouchableOpacity  style={{border:'2', backgroundColor:'violet.500', borderRadius:50}} onPress={() => addCart({image,name,price,countInStock,likes,categorie,statut})}
padding='2' alignItems='center' justifyContent='center' bg='violet.500'
>
    {countInStock > 0 ?   
    
         <Ionicons 
         name='cart-outline' color={liked ? 'violet.400': 'white'} size={22}/>
         : <Text>Stock vide</Text>}
</TouchableOpacity>
          </Stack>
         
        </Stack>

    </Box>
 
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
    }
})

