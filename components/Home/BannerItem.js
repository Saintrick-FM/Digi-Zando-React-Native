import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import {Image} from 'native-base'
const { width, height } = Dimensions.get('window')

export default function BannerItem(item){
   // const {item} = props.element
console.log("props in BannerItem "+ JSON.stringify(item))
const {title,url,description,id}= item.item
console.log("props in BannerItem "+ title)

    return (
        <View style={styles.cardView}>
            <Image shadow={2} borderRadius='20' style={styles.image} source={{ uri: url }} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {title}</Text>
                <Text style={styles.itemDescription}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        
        width: width - 20,
        height: height / 3 -3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width - 20,
        height: height / 3,
        borderRadius: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})
