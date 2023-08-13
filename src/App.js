import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {routes} from './routes'
import { Layout } from 'antd'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
export function App() {
  
  return (
    <div >
     <Router>
      <Routes>
      {
        routes.map((route)=>{ //lấy routes từ routes giúp quản lí path router tốt hơn
          const Page = route.page
          const Layout = route.isShowHeader ? DefaultComponent : null
          return (
            <Route key={route.path} path={route.path} element={
            <Layout>
              <Page/>
            </Layout>
            } />
          )
        })
      }
      </Routes>
     </Router>
    </div>
  )
}

export default App