import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../src/redux/actions/pokeActions';
import images from '../resources/images';

export class PokemonScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        pokemon: this.props.navigation.getParam('pokemon', '')      
    }
  }

  render() {    
    const {pokemon} = this.state
    return(
        <View style={{flex: 1}}>
            <View>
                <Image resizeMode={'contain'} style={{width: Dimensions.get('window').width, height: 200}} source={pokemon.image} />  
                <Text style={{textAlign: 'center', fontSize: 24, textTransform: 'uppercase', fontWeight: 'bold'}}>{pokemon.name}</Text>    
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20}}>
                    <Text style={{fontSize: 22}}>Pokémon de type {pokemon.type}</Text>    
                    <Text style={{color: 'red', fontSize: 22}}>{pokemon.price}</Text>
                </View>
                <View style={{marginHorizontal: 20}}>    
                    <Text style={{fontSize: 16}}>HP: {pokemon.base.HP}</Text>  
                    <Text style={{fontSize: 16}}>Attaque: {pokemon.base.Attack}</Text>  
                    <Text style={{fontSize: 16}}>Defense: {pokemon.base.Defense}</Text>  
                    <Text style={{fontSize: 16}}>Attaque spéciale: {pokemon.base.SpAttack}</Text>  
                    <Text style={{fontSize: 16}}>Défense spéciale: {pokemon.base.SpDefense}</Text>  
                    <Text style={{fontSize: 16}}>Vitesse: {pokemon.base.Speed}</Text> 
                </View> 
                <View>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', marginTop: 40}} activeOpacity={0.8} onPress={() => {this.props.togglePokemon(pokemon)}}>   
                        <Image style={{width: 80, height: 80}} source={this.props.pokemon.cartPokemon.findIndex(item => item.id === pokemon.id) !== -1 ? images.delete : images.add} />     
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({

});
  

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePokemon: (obj) => { dispatch(actions.togglePokemon(obj)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonScreen)




