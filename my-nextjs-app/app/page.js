"use client"
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Home() { // Capitalize the component name (Home instead of home)
    return (
        <div id="home_page">
            <div className="d-flex justify-content-start align-items-center" style={{ paddingTop: "30vh", paddingLeft: "5%" }}> {/* Use className instead of class, and use an object for inline styles */}
                <div id="about_text">
                    <h1 id="intro">Hi, My <br/>name is <span style={{ color: "#2E5E4E", fontWeight: "bold" }}>Dylan</span> </h1> {/* Use an object for inline styles */}
                    <h5 id="about">I'm a <span style={{ fontWeight: "bold", color: "#2E5E4E" }}>software developer</span> from Lexington, KY</h5> {/* Use an object for inline styles */}
                </div>
            </div>
        </div>
    );
}