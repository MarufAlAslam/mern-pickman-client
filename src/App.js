import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddReview from './Pages/AddReview/AddReview';
import AddService from './Pages/AddService/AddService';
import Blogs from './Pages/Blogs/Blogs';
import Broken from './Pages/Broken/Broken';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import MyReviews from './Pages/MyReviews/MyReviews';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';
import PrivateRoute from './Utils/Routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/top')
        },
        {
          path: 'services',
          element: <Services></Services>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: 'service/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>,
          loader: () => fetch('http://localhost:5000/blogs'),
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>,
        },
        {
          path: 'my-reviews',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        },
        {
          path: 'add-service',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>,
        },
        {
          path: 'add-review/:serviceId',
          element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
        },
        {
          path: '*',
          element: <Broken></Broken>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
