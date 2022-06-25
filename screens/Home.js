import React from 'react';
import { View, Text, Image, Dimensions, Button, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SlidesCategories from '../components/SlidesCategories'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <View style={{flex:1}}>
      <Header/>
      <SlidesCategories/>
       <ScrollView >
        <ProductList/>
        <ProductList/>
       </ScrollView>
      <Footer/>
    </View>
  )
}
