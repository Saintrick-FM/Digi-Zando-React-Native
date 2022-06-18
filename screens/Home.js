import React from 'react';
import { View, Text } from 'react-native';
import SearchTopBar from '../components/SearchTopBar'
import Header from '../components/Header'

export default function Home() {
  return (
    <View >
      <Header/>
      <SearchTopBar/>
     </View>
  );
}
