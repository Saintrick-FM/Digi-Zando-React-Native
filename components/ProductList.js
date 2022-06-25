import React, { Component } from 'react'
import { View, Text, Image, Dimensions, Button, StyleSheet, TouchableHighlight } from 'react-native';

import {Ionicons} from 'react-native-vector-icons'

export default function ProductList(props) {
  let {width}= Dimensions.get('window');
  let {name, categorie, price, countInStock, image} = props

  const [like, setLike] = ReACT.useState(false)
  let item= {
     image: require('../assets/training.jpeg'),
    text: 'Ketch'
    }

    return(
     
      <TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD">
  
   <View style= {styles.productCard}>
    
        <Ionicons name='like' style={styles.LikeBtn} onPress={() => setLike(!like)}>
          
        </Ionicons> 
        <Text style= {styles.iconeTopRight}>
          New
        </Text> 

        <Image style={{width:'inherit'}} source={item.image}/>
          
        <View style= {styles.detailsCard}>  
          <Text>
          1000 FCFA
          </Text>
        </View>
    </View>
</TouchableHighlight>
    
    )
}

const styles = StyleSheet.create(
    productCard:{
      width:'50%',
      backgroundColor: 'white',
      borderRadius:'15%',
    },
    LikeBtn: 
      {position: 'absolute', 
      top:0, 
      left:'5px',
      backgroundColor: 'white',
      width: '15px'
      },
      iconeTopRight: {
      width: '15px',
      height:"20px",
      backgroundColor:'red',
      },
      detailsCard:{
        backgroundColor: 'black',
        width: '100%'
      }
    
  
)