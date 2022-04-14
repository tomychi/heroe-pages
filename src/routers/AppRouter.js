import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
    return (
        <BrowserRouter >



            <Routes>

                {/* ejemplos de rutas publicas */}
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                {/* <Route path="/about" element={<LoginScreen />} /> */}
                {/* <Route path="/home" element={<LoginScreen />} /> */}
                {/* <Route path="/blog" element={<LoginScreen />} /> */}

                <Route path="/login" element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    }  
                />

                <Route path="/*" element={
                    // verifica si el usuario esta registrado
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    } 
                />

                {/* todas las rutas despues del / */}
                {/* <Route path="/*" element={<DashboardRoutes />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
