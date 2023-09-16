import Header from "./Header";
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Header />
                <Homepage />
              </>
            }
            path="/"
          />
          <Route
            element={
              <>
                <MovieDetails />
              </>
            }
            path="/:id"
          />

          {/* <SideBar />
        <Footer /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
