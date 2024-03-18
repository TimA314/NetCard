import './App.css'
import Login from './components/Login'
import { useUserStore } from './stores/userStore'

function App() {
  const privateKey = useUserStore((state) => state.privateKey);

  return (
    <>
        {privateKey.length > 0 ? <h1>Logged In</h1> : <Login />}
    </>
  )
}

export default App
