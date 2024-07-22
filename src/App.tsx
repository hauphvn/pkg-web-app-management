import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {ROUTES_PATH} from "./constants";
import Login from "./pages/Login";
import MainLayout from "./layouts";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx";

function App() {

    return (
        <div className={'App max-w-[1440px] w-full'}>

            <Routes>
                <Route path={ROUTES_PATH.LOGIN} element={<Login/>}/>
                <Route path={ROUTES_PATH.DASHBOARD} element={
                    <ProtectedRoute>
                        <MainLayout>
                            <Dashboard/>
                        </MainLayout>
                    </ProtectedRoute>
                }/>
                <Route path={ROUTES_PATH.PRODUCT} element={
                    <ProtectedRoute>
                        <MainLayout>
                            <Product/>
                        </MainLayout>
                    </ProtectedRoute>
                }/>
                <Route path={'*'} element={<Navigate to={ROUTES_PATH.LOGIN} replace/>}/>
            </Routes>

        </div>
    )
}

export default App
