import React, {useEffect, useState} from 'react'
import { View, Text, Image, Dimensions, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {Box} from 'native-base';
import ProductList from './ProductList'
import ProductCard from './ProductCard'

const data= require('../../assets/data/products.json')

console.log("data "+  JSON.stringify(data))
var {width}= Dimensions.get('window');

export default function ProductContainer() {
 // const [like, setLike] = useState(false)

  const [products, setProducts]=useState([])

  useEffect(() => {
      setProducts(data)

      return () => {
         setProducts([])
      }
    
  }, [])

console.log(" products set in ProductContainer "+  JSON.stringify(products))
    return (
     
      <FlatList
        //keyExtractor={({item}) => item.key}
        style={{width:'100vw', backgroundColor:'red' }}
        data={products}
        
        renderItem={(item) => (
           <ProductCard 
            style={{width:'50vw' }}
          key={item.key} 
          item= {item}
          />
        )}
        
      />  
    
    
    )
     
}