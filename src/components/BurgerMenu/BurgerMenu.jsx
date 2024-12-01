import React, { useState } from "react";

const BurgerMenu = ({ isOpen, onToggleMenu }) => {

    return (
        <div className={`burger-menu ${isOpen ? "open" : ""}`}>
                <i class="fa-solid fa-bars" onClick={onToggleMenu}></i>
            <aside className="menu-content">
                <div className="burgerContentText">
                    <h3>Connect With Us</h3>
                    <i class="fa-solid fa-x" onClick={onToggleMenu}></i>
                </div>
                <ul className="social-links">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i id="socialIcon" class="fa-brands fa-facebook"></i> Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i id="socialIcon" class="fa-brands fa-square-x-twitter"></i> Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i id="socialIcon" class="fa-brands fa-square-instagram"></i> Instagram</a></li>
                </ul>
            </aside>
        </div>
    );
};

export default BurgerMenu;