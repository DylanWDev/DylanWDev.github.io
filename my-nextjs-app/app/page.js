"use client"
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Home() {
    return (
        <div id="home_page">
            <div id="home_page" className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="text-center">
                    <h1 id="intro">Hello, I'm <span id="intro_color">Dylan Wyrick</span></h1>
                    <h1 id="intro">I'm a <span id="intro_color">full stack</span> web developer.</h1>
                </div>
            </div>
        </div>
    );
}