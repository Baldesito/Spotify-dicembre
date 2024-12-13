import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Importazione corretta
import rootReducer from "./reducers"; // Import del tuo rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
