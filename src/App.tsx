import React from "react";
import { RandomuserProvider } from "./hook/RandomuserProvider";
import { Home } from "./Page/Home";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RandomuserProvider>
        <Home />
      </RandomuserProvider>
    </>
  );
};

export default App;
