import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'
import './App.css'
import { DataContext } from './Context'

function App() {
  const stu={
    name:"Xyz",
    roll:105
  }

  const user={
    name:"Ram Kumar",
    age:15
  }
  return (
    <>
      <DataContext.Provider value={stu}>
        <NavBar data={user} />
      </DataContext.Provider>
      <div className='bg-light p-3'>
        <h1>This is Prop Drilling Example</h1>
      </div>
    </>
  )
}

export default App
