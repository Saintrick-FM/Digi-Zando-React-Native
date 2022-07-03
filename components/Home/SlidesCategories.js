import React, {useEffect} from 'react';
import {View,Text, StyleSheet, Image, ScrollView,TouchableOpacity, } from 'react-native';
import {HStack, Center} from 'native-base'
// const ListMapped = items.map(item => {<Image source={item.image} />})
export default function SlidesCategories() {
  
let [categories, setCategories] = React.useState([
      {
    
    image: require('../../assets/favicon.png'),
    text: 'Toutes',
    selected: true
    },
      {
    
    image: require('../../assets/training.jpeg'),
    text: 'Baskets',
    selected: false
    },
    {
    
    image: require('../../assets/bag.png'),
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

    {
    
    image: require('../../assets/tee_shirt.jpg'),
    text: 'Tee-shirt',
    selected: false
    },

    {
      
      image: require('../../assets/baby_shoes.png'),
    text: 'Bébés',
    selected: false
    },

    {
      
      image: require('../../assets/training.jpeg'),
    text: 'Ketch',
    selected: false
    }
    ])

useEffect(() => {
  return () => {
console.log('code effect here')

  };
}, [])

 function setActiveCategorie(item){
    console.log(' item cliqué ', item)
if (categories[0].selected === true) {
  
     categories[0].selected= false;
}
    
    const newArrayData = categories.map((e, index)=>{
        
      if (item == e.text) {
        return {
          ...e, 
          selected:true
        }
      } else {
         return {
          ...e, 
          selected:false
        }
         
      }
    })
    setCategories(newArrayData)
    console.log('new list ', newArrayData)
  }

  return (
    
    <HStack  space="3" alignItems='center' style= {styles.Slide_Categorie} >

    <ScrollView style={{width:'100vw'}} horizontal showsHorizontalScrollIndicator={false}>
    {/* Loops start here */}
    {categories.map((item , index) => (
     
     <TouchableOpacity
     key={item.text}
  activeOpacity={0.6}
  underlayColor= 'primary.400'
  onPress={() =>( 
    setActiveCategorie(item.text)
  )}>

   <Center shadow={3} w='30' bg={item.selected  && 'primary.400'} style= {styles.Categorie} size="16">
   
        <Image style={{width: 50, height:45 , borderRadius: 50}} source={item.image} />
        <Text style={{fontSize:16, color:'white', fontWeight:'400'}} >{item .text}</Text>
   </Center>
    
</TouchableOpacity>
    ))}
    {/* Loops end here */}
    
    </ScrollView>
    </HStack>
  )}

const styles = StyleSheet.create({
    Slide_Categorie: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:'100vw'
        
    },
    Categorie:{
      alignItems:'center', 
      flex:1, 
      justifyContent:'center',
      paddingTop: 3
      }
})

