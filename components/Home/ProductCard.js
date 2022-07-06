import React from 'react';
import { View, Dimensions,TouchableOpacity, StyleSheet} from 'react-native';
import {Button,VStack,Progress, AspectRatio,Box, Text, Image, Heading, Stack, Center, Divider, Icon, IconButton} from 'native-base'
import {AntDesign} from 'react-native-vector-icons'
import {Ionicons} from 'react-native-vector-icons'

var {width}= Dimensions.get('window')

export default function ProductCard(props) {
const {key,image,name,price,countInStock,likes,categorie,statut} = props.product

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
    w='46%'
    border="1" 
    alignItems='left'
    marginLeft='2%'
    marginRight='2%'
    marginTop= {key % 2 == 0 ? '12': '0'}
    marginBottom= {key == 8 ? '45': '0'}
    height= '220'
    bg='gainsboro'
    shadow={2} 
    position='relative'
    borderRadius="20">

        <AspectRatio borderRadius="20" w="100%" top="0" ratio={16 / 9}>
            <Image resizeMode='cover' height='120' borderTopLeftRadius={20} borderTopRightRadius={20} source={{uri: image}}  alt="image" />
          </AspectRatio>

          <Center bg="violet.500" borderTopRightRadius={50} borderBottomRightRadius={50} _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" height='6' top="110" left='0' px="3" py="1">
            {statut}
          </Center>
                       
          <Center borderRadius='20' bg={liked ? 'white': 'violet.400'} _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" shadow={2} top="0.5" right='0.5' px="1" py="1">
            <Ionicons name='heart'
          onPress={onClickLike} shadow={1.5} color={liked ? 'violet.400': 'white'}  size={20}/>
          </Center>

          
           <Stack position='absolute' bottom='0' p="2" space={0.75}>
          <Stack  alignItems='left' ml='15' space={0.5}>
            <Heading fontWeight='bold'
        fontSize= '14'
        textAlign= 'left' fontStyle='italic'>
             {name.lenght>15 ? name.substring(0, 15-3)+ '...': name}
            </Heading>

            <Text
           fontWeight='bold' 
            fontSize='18'
            color='violet.900'
            textAlign= 'left'
            fontStyle='italic'
            _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} >
              {price} FCFA
            </Text>

            <VStack space="0.5">
              <Text fontStyle='italic' fontWeight='200' fontSize="xs">{countInStock} articles restants</Text>
              <Progress width='3.5/4' bg="coolGray.100" _filledTrack={{bg: "lime.500"}} size='xs' value={countInStock} />
            </VStack>
            
          </Stack>
         
        </Stack>

        <Button border="2" backgroundColor='violet.500' borderRadius='50'  
onPress={() => addCart({key,image,name,price,countInStock,likes,categorie,statut})}
padding='2' alignItems='center' justifyContent='center' shadow={2} position='absolute' bottom='0.5' right='0'
>
    {countInStock > 0 ?   
    
         <Ionicons 
         name='cart-outline' color={liked ? 'violet.400': 'white'} size={22}/>
         : <Text>Stock vide</Text>}
</Button>
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

