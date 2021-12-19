import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import Favorites from "./pages/Favorites";
import Meetup from "./pages/Meetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetup />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/new-meetup" element={<Meetup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
