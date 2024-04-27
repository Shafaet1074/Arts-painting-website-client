import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root/Root';
import ErrorPages from './Components/ErrorPages';
import Home from './Pages/Home/Home';
import AllPaintings from './Pages/All Paintaings/AllPaintings';
import Add_Paintings from './Pages/AddPaintings/Add_Paintings';
import MyArts from './Pages/MyArts/MyArts';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import FirebaseProvider from './Firebase/FirbeaseProvider/FirebaseProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        errorElement:<ErrorPages></ErrorPages>,
      },
      {
        path:'/allPaintaings',
        element:<AllPaintings> </AllPaintings>,
      },
      {
        path:'/addPaintings',
        element:<Add_Paintings></Add_Paintings>,
      },
      {
        path:'/myArts',
        element:<MyArts></MyArts>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/Register',
        element:<Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FirebaseProvider>
   <RouterProvider router={router} />
   </FirebaseProvider>
  </React.StrictMode>,
)
