import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./pages/Header/Header.jsx";
import MyErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary.jsx";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <MyErrorBoundary>
          <Header />
          <App />
        </MyErrorBoundary>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
