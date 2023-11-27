import {Route,Routes} from 'react-router-dom'
import { Home } from './Pages/HomePage/Home'
import { ROUTER } from './shared/constant/router'
import NotFound from './Pages/NotFound'
import { Detail } from './Pages/Detail/Detail'
import { DetailSetting } from './Pages/DetailSetting/DetailSetting'
import { About } from './Pages/About/About'


function App() {
  return (
    
   <Routes>
   <Route path={ROUTER.HOME} element={<Home/>}/>
   <Route path={ROUTER.DETAIL} element={<Detail/>}/>
   <Route path={ROUTER.DETAIL_SETTING} element={<DetailSetting/>}/>
   <Route path={ROUTER.ABOUT} element={<About/>}/>

   <Route path="*" element={<NotFound/>}/>

   </Routes>
    
  )
}

export default App
