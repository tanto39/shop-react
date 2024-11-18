import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Contacts } from "./components/Contacts/Contacts";
import { routes } from "./Routes/routes";
import { useProducts } from "./hooks/useProducts";
import MessageModal from "./components/MessageModal/MessageModal";

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
        <MessageModal type="S" title="Congratulations!">
          {<div>
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to confirm your order.</p>
          </div>}
        </MessageModal>
      </div>
    </BrowserRouter>
  );
}

export default App;
