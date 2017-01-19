import { createStore } from 'redux'
import onClickReducer from './reducers/onClickReducer'

const store = createStore(onClickReducer);

export default store;