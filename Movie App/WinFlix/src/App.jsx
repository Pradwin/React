import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Applayout } from './Material/Applayout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact, formSubmit } from './Pages/Contact';
import "../src/App.css"
import { Error } from './Pages/Error';
import { Movie } from './Pages/Movie';
import { getApi } from './Material/Getapi';
import { MovieDetail } from './Material/MovieDetail';
import { getMovieDetail } from './Material/GetMovieDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Root path
      element: <Applayout />, // Layout with Header, Footer, and Outlet
      errorElement : <Error/>,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/movie", element: <Movie />, loader: getApi},
        { path: "/movie/:movieId", element: <MovieDetail />, loader:getMovieDetail},
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact />,action:formSubmit},
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
