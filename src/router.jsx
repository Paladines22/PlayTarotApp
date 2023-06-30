import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Bastos from "./views/Bastos";
import Copas from "./views/Copas";
import Espadas from "./views/Espadas";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Pentaculos from "./views/Pentaculos";
import ArcMayores from "./views/ArcMayores";

export const router = createBrowserRouter([
  // y aqui pasamos los objetos de rutas

  //ruta raiz
  //en element va el componente de mi ruta principal Home
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <Menu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/pentaculos",
    element: (
      <ProtectedRoute>
        <Pentaculos />
      </ProtectedRoute>
    ),
  },
  {
    path: "/copas",
    element: (
      <ProtectedRoute>
        <Copas />
      </ProtectedRoute>
    ),
  },
  {
    path: "/espadas",
    element: (
      <ProtectedRoute>
        <Espadas />
      </ProtectedRoute>
    ),
  },
  {
    path: "/bastos",
    element: (
      <ProtectedRoute>
        <Bastos />
      </ProtectedRoute>
    ),
  },
  {
    path: "/arc-mayores",
    element: (
      <ProtectedRoute>
        <ArcMayores />
      </ProtectedRoute>
    ),
  },
]);
