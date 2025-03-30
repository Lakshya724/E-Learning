// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden bg-white text-dark">
        <AppRoutes />
      </main>
    </Router>
  );
};

export default App;
