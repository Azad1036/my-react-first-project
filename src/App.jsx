import './App.css'
import Blog from './assets/Component/Blog/Blog'
import Bookmark from './assets/Component/Bookmark/Bookmark'
import Header from './assets/Component/Header/Header'


function App() {
  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blog></Blog>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
