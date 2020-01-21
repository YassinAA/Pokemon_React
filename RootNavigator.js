import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PokedexScreen from './src/screen/PokedexScreen';
import Header from './src/screen/Header';
import CartScreen from './src/screen/CartScreen';
import PokemonScreen from './src/screen/PokemonScreen';
import SuccessOrderScreen from './src/screen/SuccessOrder';

const AppNavigator = createStackNavigator({
    Pokedex: {
        screen: PokedexScreen,
        navigationOptions: {
            header: (props) => {
                return (
                    <Header headerProps={props} />
                )
            }
        }
    },
    Cart: {
        screen: CartScreen,
        navigationOptions: {
            header: (props) => {
                return (
                    <Header 
                        back={true} 
                        headerProps={props}
                    />
                )
            }
        }
    },
    Pokemon: {
        screen: PokemonScreen,
        navigationOptions: {
            header: (props) => {
                return (
                    <Header 
                        back={true} 
                        headerProps={props}
                    />
                )
            }
        }
    },
    SuccessOrder: {
        screen: SuccessOrderScreen,
        navigationOptions: {
            header: (props) => {
                return (
                    <Header 
                        back={true} 
                        headerProps={props}
                    />
                )
            }
        }
    },
},
{
    initialRouteName: 'Pokedex',      
    backBehavior: 'initialRouteName',                                              
});

export default createAppContainer(AppNavigator);
