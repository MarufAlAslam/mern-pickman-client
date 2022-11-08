import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
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
        },
        {
          path: '*',
          element: <div>You Lost Baby Girl?</div>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
