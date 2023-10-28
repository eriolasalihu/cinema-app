import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist";
import storage  from "redux-persist/lib/storage";
import terminet_beauty from './functions/reducers'
// import rootReducer from "./reducers";

const persistConfig = {
    key:"beauty",
    storage
}

const rootReducer = combineReducers({data:terminet_beauty})

export const store = createStore(persistReducer(persistConfig, rootReducer), composeWithDevTools());
export const persisted = persistStore(store);