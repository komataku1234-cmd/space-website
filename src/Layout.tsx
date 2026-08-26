import { Outlet } from 'react-router-dom'
import Nav from './Nav' // 実際の配置に合わせてパスを調整してください

function Layout() {
  return (
    <div className="relative">
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout