import React, { Component } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import images from '../resources/images';

export class SuccessOrderScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        ville: this.props.navigation.getParam('ville',''),
        cp: this.props.navigation.getParam('cp',''),
        rue: this.props.navigation.getParam('rue',''),
    }
  }

  render() {
    const { rue, ville, cp } = this.state
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 20, marginHorizontal: 10, flex: 1}}>
            <Image resizeMode={'contain'} style={{width: Dimensions.get('window').width/2, height: 200}} source={images.pikachu} />  
            <Text style={{color: '#2196f3', fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 40}}>Commande envoyée !</Text>
            <Text  style={{color: 'black', fontSize: 18, textAlign: 'center'}}>Vos pokémons vous seront envoyé à l'adresse :</Text>
            <Text>{rue}{rue && ','} {cp} {ville}</Text>
            <Text style={{color: '#2196f3', fontSize: 20, textAlign: 'center', marginBottom: 40}}>N'oubliez pas de bien les nourrir et des les faire évoluer pour devenir le meilleur dresseur.</Text>
            <TouchableOpacity style={{backgroundColor: '#2196f3', width: '100%'}} activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Pokedex')}>
              <Text style={{fontSize: 20, color: 'white', padding: 15, textAlign:'center'}}>Retourner au magasin</Text>  
            </TouchableOpacity>
        </View>
    )
  }
}

export default connect()(SuccessOrderScreen)




