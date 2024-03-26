import './App.css'
import Blog from './assets/Component/Blog/Blog'
import Bookmark from './assets/Component/Bookmark/Bookmark'
import Header from './assets/Component/Header/Header'


function App() {
  return (
    <>
      <div className='md:max-w-6xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
      <Blog></Blog>
      <Bookmark></Bookmark>
      </div>
      </div>
    </>
  )
}

export default App
