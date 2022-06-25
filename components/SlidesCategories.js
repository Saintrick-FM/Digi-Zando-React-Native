import React from 'react';
import {View,Text, StyleSheet, Image, ScrollView} from 'react-native';

const items = [
    {
    image: require('../assets/training.jpeg'),
    text: 'Baskets'
    },
    {
    image: require('../assets/bag.png'),
    text: 'Sacs'
    },

    {
    image: require('../assets/earings.jpg'),
    text: 'Parures'
    },

    {
    image: require('../assets/bracelet.png'),
    text: 'Bracelet'
    },

    {image: require('../assets/tee_shirt.jpg'),
    text: 'Tee-shirt'
    },

    {image: require('../assets/baby_shoes.png'),
    text: 'Bébés'
    },

    {image: require('../assets/training.jpeg'),
    text: 'Ketch'
    }
]
// const ListMapped = items.map(item => {<Image source={item.image} />})
export default function SlidesCategories() {
  return (
    <View style= {styles.Slide_Categorie}>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {/* Loops start here */}
    {items.map((item ,index) => (
    <View key={index} style={{alignItems:'center', marginRight:30}}>
        <Image style={{width: 50, height:45 , borderRadius: '50%'}} source={item.image} />
        <Text style={{fontSize:16, color:'white', fontWeight:'400'}} >{item .text}</Text>
    </View>
    ))}
    {/* Loops start here */}
    
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    Slide_Categorie: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'grey',
        paddingVertical:3,
        height: 80,
        paddingLeft: 10,
    }
})