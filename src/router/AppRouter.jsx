import { Routes, Route  } from 'react-router-dom'
import { AuthRouter } from '../auth'
import { JournalRoutes } from '../journal'

export const AppRouter = () => {
  return (
    <Routes>
        
        {/**NOTE - Login y Register */}
        <Route path='/auth/*' element={<AuthRouter/>}/>


        {/**NOTE - JournalApp */}
        <Route path='/*' element={<JournalRoutes/>}/>
        
    </Routes>
  )
}
