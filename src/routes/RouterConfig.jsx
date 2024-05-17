import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

const RouterConfig = () => {
  return (
    <>
        <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
        </div>
    </>
  )
};

export default RouterConfig;
