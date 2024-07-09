import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import Search from './pages/Search/Search'
import App from './App'

import "./index.css"
import { FavoriteContext } from './contexts/MovieList'
import Favorites from './pages/Favorites/Favorites'

const route = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {path: "/", element: <Home/>},
    {path: "/movie/:id", element: <Movie/>},
    {path: "search", element: <Search/>},
    {path:'/favorites', element: <Favorites/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FavoriteContext> 
      <RouterProvider router={route}/>
    </FavoriteContext>
  </React.StrictMode>
)
