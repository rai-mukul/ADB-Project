import { createStore, applyMiddleware } from "redux";
import user from "./useDataReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, user);
const middle= []
if(process.env.NODE_ENV === 'development'){
middle.push(logger)
}

const store = createStore(persistedReducer, 
    applyMiddleware(...middle)
    );

const persistor = persistStore(store);

export { persistor };

export default store;
