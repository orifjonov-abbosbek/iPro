import React, { useState, useEffect } from "react";
import Loader from "../Loader/loader";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Social from "../../pages/Social/Social";
import Price from "../../pages/Price/Price";
import "./Root.scss";

import Nav from "../navbar/nav";
import Footer from "../Footer/Footer";
import Register from "../../pages/RegisterAndLogin/RL";
import Projects from "../../pages/Projects/Projects";
const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleOnline = () => setLoading(false);
    const handleOffline = () => setLoading(true);
    const handleLoad = () => setLoading(false); // Handle load event to close the loader

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("load", handleLoad);

    // Check the connection type to see if it's slow
    if (navigator.connection) {
      const { effectiveType } = navigator.connection;
      if (effectiveType === "slow-2g" || effectiveType === "2g") {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <Nav />
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<Social />} />
        <Route path="/price" element={<Price />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Root;
