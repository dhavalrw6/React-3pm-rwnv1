import './App.css'
import Dashboard from './components/Dashboard'
import HigherOrderComponent from './utils/higherOrderComponent'
function App() {

  let AuthDashboard = HigherOrderComponent(Dashboard);

  return (
    <div className='App'>
        <AuthDashboard name='Dhaval' />
    </div>
  )
}

export default App
