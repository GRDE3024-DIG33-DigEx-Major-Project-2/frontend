import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import '../static/style.css';
import Home from "./Home.js";
import Header from "./Header.js";
import Profile from "./Profile.js";
import Footer from "./Footer.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import About from "./About.js";
import ResetPassword from "./ResetPassword.js";
import Gigs from "./Gigs";
import Articles from "./Articles";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";
import EventPage from "./EventPage.js";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, setIsLoggedIn, user]);

  return (
    <div className="App">
          <Header user = {user} isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="gigs" element={<Gigs/>} />
            <Route path="about" element={<About />} />
            <Route path="articles" element={<Articles />} />
            <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="profile" element={<Profile isLoggedIn={isLoggedIn} user={user} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
            <Route path="/terms-of-use" element={<TermsOfUse/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
