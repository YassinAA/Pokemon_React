import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'; // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './src/redux/reducers/reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [] 
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)          
export const persistor = persistStore(store)        
// persistor.purge();             