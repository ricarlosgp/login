import { Routes, Route } from 'react-router-dom';

//import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    retunr (
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/profile" element = {<Profile />} />
        </Routes>
    )
}