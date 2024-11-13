import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'

function App() {

  return (
    <div className='bg-gray-100 h-screen flex'>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
