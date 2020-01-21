import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import images from '../resources/images';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
      back: PropTypes.bool,
      headerProps: PropTypes.any.isRequired,
  }

  static defaultProps = {
      back: false,
  }

  _getNumberOfProducts() {
    const { pokemon } = this.props
    return pokemon.cartPokemon.length
  }

    render() {
      const { back, headerProps } = this.props  
      return (
        <View style={styles.container}>
          {back &&
            <TouchableOpacity activeOpacity={0.8} style={{position: 'absolute', zIndex: 999, left: 10, top: 20}} onPress={() => this.props.headerProps.navigation.goBack()} >
              <Image style={{width: 30, height: 30, }} source={images.arrow} />  
            </TouchableOpacity>  
          }
          <Text style={{fontSize: 18, textAlign: 'center', color: 'black'}}>PokeCart</Text>
          <TouchableOpacity activeOpacity={0.8} style={{position: 'absolute', zIndex: 999, right: 20, top: 25}} onPress={() => this.props.headerProps.navigation.navigate('Cart')}>
            <Image style={{width: 30, height: 30}} source={images.pokedex} /> 
            <View style={styles.bulle}>
                <Text style={{color: 'white'}}>{this._getNumberOfProducts()}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      height: 70,
      marginTop: 0,
      backgroundColor: '#e0dada',
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20
    },
    bulle: {
      position: 'absolute',
      top: -8,
      left: 20,
      borderRadius: 100,
      width: 18,
      height: 18,
      backgroundColor: '#2196f3',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#2196f3',
    }
});

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeToCart: (obj) => { dispatch(actions.removeToCart(obj)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
