import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null)
    },
    setItem(_key, value) {
      return Promise.resolve(value)
    },
    removeItem(_key) {
      return Promise.resolve()
    },
  }
}

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
  const sagaMiddleware = createSagaMiddleware()
  const createStoreHook = currentReducer => createStore(currentReducer, bindMiddleware([sagaMiddleware]))
  if (isServer) return createStoreHook(reducer)

  const { persistStore, persistReducer } = require('redux-persist')
  const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

  const persistConfig = {
    key: 'shipitRoot',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStoreHook(persistedReducer)

  store['sagaTask'] = sagaMiddleware.run(sagas)
  store['__persistor'] = persistStore(store, { manualPersist: true })

  return store
}

const wrapper = createWrapper(makeStore)

export default wrapper
