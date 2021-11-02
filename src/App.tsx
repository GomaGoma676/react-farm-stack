import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CsrfToken } from './types/types'
import { useAppSelector } from './app/hooks'
import { selectCsrfState } from './slices/appSlice'
import { Auth } from './components/Auth'
import { Todo } from './components/Todo'

function App() {
  const csrf = useAppSelector(selectCsrfState)
  useEffect(() => {
    const getCsrfToken = async () => {
      const res = await axios.get<CsrfToken>(
        `${process.env.REACT_APP_API_URL}/csrftoken`
      )
      axios.defaults.headers.common['X-CSRF-Token'] = res.data.csrf_token
    }
    getCsrfToken()
  }, [csrf])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route exact path="/todo">
          <Todo />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
