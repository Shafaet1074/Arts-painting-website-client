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

import MyArts from './Pages/MyArts/MyArts';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import FirebaseProvider from './Firebase/FirbeaseProvider/FirebaseProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivsteRoute from './Components/PrivateRoute/PrivsteRoute';
import AddPaintings from './Pages/AddPaintings/AddPaintings';
import AllPaintDetails from './Components/AllPaintings/AllPainDetails/AllPaintDetails';
import UpdateCart from './Components/UpdateCart/UpdateCart';

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
        loader:() => fetch('http://localhost:5003/addpaintings')

      },
      {
        path:'/allPaintaings',
        element:<AllPaintings> </AllPaintings>,
        loader: () => fetch('http://localhost:5003/addpaintings')
      },
      {
        path:'/allPaintings/:id',
        element:<PrivsteRoute>
          <AllPaintDetails></AllPaintDetails>
        </PrivsteRoute>
          
      },
      {
        path:'/addPaintings',
        element: <PrivsteRoute><AddPaintings></AddPaintings></PrivsteRoute>,
      },
      {
        path:'/myArts',
        element:<PrivsteRoute><MyArts></MyArts></PrivsteRoute>,
      },
      {
        path:'/myArts/:id',
        element:<PrivsteRoute><UpdateCart></UpdateCart></PrivsteRoute>,
        loader: ({params}) => fetch(`http://localhost:5003/myArts/${params.id}`)

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
   <ToastContainer />
  </React.StrictMode>,
)
