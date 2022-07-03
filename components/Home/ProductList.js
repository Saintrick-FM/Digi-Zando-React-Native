import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import ProductCard from './ProductCard'
import {Container, Box} from 'native-base'

var {width}= Dimensions.get('window')

export default function ProductList(props) {
const {item} = props

  return (
  
        <ProductCard  {...item} />
  )
}
