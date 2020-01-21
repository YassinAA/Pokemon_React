import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../src/redux/actions/pokeActions';
import data from '../../data';
import images from '../resources/images';

class PokedexScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    const { pokemon } = this.props
    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {data.map((elem, i) => {
                return(
                        <TouchableOpacity key={i} activeOpacity={0.8} style={styles.item} onPress={() => this.props.navigation.navigate('Pokemon', {pokemon: elem})}>  
                            <View style={{flex: 1, alignItems: 'center'}}>
                              <Image style={{width: 80, height: 80}} source={elem.image} /> 
                            </View> 
                            <Text style={{fontSize: 18, textAlign: 'center', marginVertical: 10}}>{elem.name}</Text>    
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                              <Text>{elem.type}</Text>    
                              <Text style={{color: 'red'}}>{elem.price}</Text>  
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', marginTop: 20}}>
                              <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} activeOpacity={0.8} onPress={() => {this.props.togglePokemon(elem)}}>   
                                <Image style={{width: 30, height: 30, marginLeft: 10}} source={pokemon.cartPokemon.findIndex(item => item.id === elem.id) !== -1 ? images.delete : images.add} />  
                              </TouchableOpacity>
                            </View> 
                        </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    width: '46%', 
    padding: 20,
    paddingBottom: 10,
    marginVertical: 10, 
    borderWidth: 1,
    borderColor: 'transparent',
    margin: '2%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,         
      height: 3
    },
    shadowRadius: 5,
    elevation: 4,
    shadowOpacity: 1.0, 
  }
});
  

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePokemon: (obj) => {dispatch(actions.togglePokemon(obj)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexScreen)




