import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
  if (action.type === HYDRATE) return { ...state, ...action.payload }
  return reducers(state, action)
}

const makeStore: any = ({ isServer }) => {
  const createStoreHook = currentReducer => createStore(currentReducer, bindMiddleware([thunkMiddleware]))
  if (isServer) return createStoreHook(reducer)

  const { persistStore, persistReducer } = require('redux-persist')
  const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

  const persistConfig = {
    key: 'nameRoot',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStoreHook(persistedReducer)
  store['__persistor'] = persistStore(store, { manualPersist: true })

  return store
}

const wrapper = createWrapper(makeStore)

export default wrapper
