import React from 'react';
import { View, Text, Image, Dimensions, Button, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SlidesCategories from '../components/Home/SlidesCategories'
import ProductContainer from '../components/Home/ProductContainer'
import Banner from '../components/Home/Banner'



export default function Home() {
  return (
    <View style={{flex:1}}>
      <Header />
      <Banner />
      <SlidesCategories />
      
        {/*<ScrollView >
        <ProductList/>
        <ProductList/>
       </ScrollView> */}
      <ProductContainer />
      <Footer/>
    </View>
  )
}
