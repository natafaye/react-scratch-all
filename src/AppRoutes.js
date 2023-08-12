import { Routes, Route } from "react-router-dom";
import CampsiteDetailPage from "./CampsiteDetailPage"; // this import is broken because this doesn't actually exist here
import HomePage from "./HomePage"; // this import is broken because this doesn't actually exist here

const routeConfig = [ 
    { path: "/directory/:campsiteId", element: <CampsiteDetailPage/> }, 
    { path: "/", element: <HomePage/> }
]

export default function AppRoutes() {
    return (
        <Routes>
            { routeConfig.map(page => <Route path={page.path} element={page.element}/>)}
        </Routes>
    )
}