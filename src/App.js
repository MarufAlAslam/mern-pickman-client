import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Broken from './Pages/Broken/Broken';
import Home from './Pages/Home/Home';
import Main from './Pages/Main/Main';
import Services from './Pages/Services/Services';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'services',
          element: <Services></Services>,
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>,
          loader: () => fetch('http://localhost:5000/blogs'),
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
