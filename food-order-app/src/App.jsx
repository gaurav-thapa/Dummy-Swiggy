import "./App.css";
import TopRestaurants from "./components/home/topRestaurants/TopRestaurants";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./pages/RootLayout";
import RestroPage from "./pages/RestroPage";
import CartPage from "./pages/CartPage";

function App() {

  const router = createBrowserRouter([{
    path:'/Dummy-Swiggy/', element:<RootLayout/>, children:[
      {index:true, element:<TopRestaurants/>},
      {path:'restro/:id', element:<RestroPage/>},
      {path:'cart', element: <CartPage/>}
    ]
  }]);
  

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
