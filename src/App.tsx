import AppRoutes from './app/routes'
import { Provider } from 'react-redux'
import { store } from './app/store'

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)

export default App
