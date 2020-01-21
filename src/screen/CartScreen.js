import React, { Component, Fragment } from 'react'
import { View, Text, Image, ScrollView, TextInput, StyleSheet, findNodeHandle, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../src/redux/actions/pokeActions';

export class CartScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paddingBottom: 0,
      rue: '',
      ville: '',
      cp: '',
    }
  }

  _onChangeState = name => text => this.setState({ [name]: text.trim() });
  

  _scrollTo = ref => {
      ref.measureLayout(findNodeHandle(this.refs.scrollView), (_fx, fy) => {
          this.refs.scrollView.scrollTo({
              y: fy,
          });
      });
  };

  render() {
    const { pokemon } = this.props
    const { rue, ville, cp } = this.state
    if(pokemon.cartPokemon.length > 0){
      return (
        <ScrollView ref={"scrollView"} style={{flex: 1}}>
          {pokemon.cartPokemon.map((elem, i) => {
            return(
              <TouchableOpacity key={i} activeOpacity={0.8} style={styles.item} onPress={() => this.props.navigation.navigate('Pokemon', {pokemon: elem})}>  
                  <View style={{alignItems: 'center', marginRight: 40}}>
                    <Image style={{width: 80, height: 80}} source={elem.image} /> 
                  </View> 
                  <View>
                    <Text style={{fontSize: 18, textAlign: 'center', marginVertical: 10, fontWeight: 'bold'}}>{elem.name}</Text>    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <Text>{elem.type}</Text>    
                      <Text style={{color: 'red', fontSize: 22, marginLeft: 20}}>{elem.price}</Text>  
                    </View>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end', marginTop: 20}}>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} activeOpacity={0.8} onPress={() => {this.props.togglePokemon(elem)}}>   
                      <Image style={{width: 30, height: 30, marginLeft: 10}} source={pokemon.cartPokemon.findIndex(item => item.id === elem.id) !== -1 ? images.delete : images.add} />  
                    </TouchableOpacity>
                  </View> 
              </TouchableOpacity>
            )
          })}
          <Text style={{marginTop: 20, marginHorizontal: 10, fontSize: 24, textAlign: 'center'}}>Où voulez-vous recevoir vos pokémons? </Text>
          <TextInput
            ref={input => {
              this.firstTextInput = input;
            }}
            onChangeText={this._onChangeState('rue')}
            style={styles.textField}
            value={this.state.rue}
            returnKeyType={'next'}
            placeholder={'Rue'}
            onFocus={() => {
              this._scrollTo(this.firstTextInput)
              this.setState({ paddingBottom: 200 })
            }}
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />
          <View style={{flexDirection: 'row'}}> 
            <TextInput
              ref={input => {
                this.secondTextInput = input;
              }}
              placeholder={'Ville'}
              onChangeText={this._onChangeState('ville')}
              style={styles.textField}
              value={this.state.ville}
              returnKeyType={'next'}
              onFocus={() => {
                this._scrollTo(this.secondTextInput)
                this.setState({ paddingBottom: 200 })
              }}
              onSubmitEditing={() => {
                this.thirdTextInput.focus();
              }}
            />
            <TextInput
              ref={input => {
                this.thirdTextInput = input;
              }}
              placeholder={'Code Postal'}
              keyboardType={'numeric'}
              onChangeText={this._onChangeState('cp')}
              style={styles.textField}
              value={this.state.cp}
              returnKeyType={'next'}
              maxLength={5}
              onFocus={() => {
                this._scrollTo(this.thirdTextInput)
                this.setState({ paddingBottom: 200 })
              }}
              onSubmitEditing={() => {
                this.thirdTextInput.focus();
              }}
            />
          </View>
          <View style={{padding: 10, marginTop: 50, flex: 1}}>
            <TouchableOpacity style={{backgroundColor: '#2196f3', flex: 1, width: '100%'}} activeOpacity={0.8} onPress={() => this.props.navigation.navigate('SuccessOrder', {rue: rue, ville: ville, cp: cp})}>
              <Text style={{fontSize: 20, color: 'white', padding: 15, textAlign:'center'}}>Valider la commande</Text>  
            </TouchableOpacity>
          </View>
        </ScrollView>
      )
    }else return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10}}>
        <Text style={{ textAlign: 'center', fontSize: 24}}>Veuillez ajouter des pokémon avant de finaliser l'achat !</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textField: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 30,
    borderColor: '#2196f3',
    borderBottomWidth: 1,
    borderRadius: 4,
    height: 40,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    fontSize: 18,
    color: 'black',
  },
  item: {
    flex: 1,
    padding: 20,
    paddingBottom: 10,
    marginVertical: 2, 
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
    flexDirection:'row',
    justifyContent: 'space-around',
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)




