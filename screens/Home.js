import React from 'react';
import { View, Text, Image, Dimensions, Button, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SlidesCategories from '../components/Home/SlidesCategories'
import ProductList from '../components/Home/ProductList'
import Banner from '../components/Home/Banner'

export default function Home() {
  return (
    <View style={{flex:1}}>
      <Header/>
      <SlidesCategories/>
      <Banner/>
       {/* <ScrollView >
        <ProductList/>
        <ProductList/>
       </ScrollView> */}
      <Footer/>
    </View>
  )
}
