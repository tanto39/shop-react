import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Contacts } from "./components/Contacts/Contacts";
import { routes } from "./Routes/routes";
import { useProducts } from "./hooks/useProducts";

function App() {
  // Это первичный запрос для запуска остановленного сервиса в render.com
  useProducts();

  return (
    <BrowserRouter>
      <div className="page_wrap">
        <Header />
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={Element}></Route>
          ))}
        </Routes>
        <Contacts/>
      </div>
    </BrowserRouter>
  );
}

export default App;
