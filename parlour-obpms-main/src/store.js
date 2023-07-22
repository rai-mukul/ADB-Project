import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

const persistConfig={
    key:'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer, applyMiddleware(logger))

const persistor = persistStore(store)

export { persistor };

export default store