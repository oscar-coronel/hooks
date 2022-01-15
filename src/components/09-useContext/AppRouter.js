import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import { NavBar } from './NavBar';

import { PageNotFound } from './PageNotFound';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={ <HomeScreen /> } />
                        <Route path="/about" element={ <AboutScreen /> } />
                        <Route path="/login" element={ <LoginScreen /> } />

                        <Route path="*" element={ <PageNotFound /> } />
                    </Routes>
                </div> 
            </div>
        </Router>
    )
}