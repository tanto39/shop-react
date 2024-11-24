import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Contacts } from "./components/Contacts/Contacts";
import { routes } from "./Routes/routes";
import { useProducts } from "./hooks/useProducts";
import MessageModal from "./components/MessageModal/MessageModal";

function App() {
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
        <MessageModal/>
      </div>
    </BrowserRouter>
  );
}

export default App;
