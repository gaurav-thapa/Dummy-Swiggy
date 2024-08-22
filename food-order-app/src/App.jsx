import "./App.css";
import TopRestaurants from "./components/home/topRestaurants/TopRestaurants";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./pages/RootLayout";
import RestroPage from "./pages/RestroPage";
import CartPage from "./pages/CartPage";
import Contact from "./components/Contact";

function App() {

  const router = createBrowserRouter([{
    path:'/Dummy-Swiggy/', element:<RootLayout/>, children:[
      {index:true, element:<TopRestaurants/>},
      {path:'restro/:id', element:<RestroPage/>},
      {path:'cart', element: <CartPage/>},
      {path:'contact', element:<Contact/>}
    ]
  }]);
  

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
