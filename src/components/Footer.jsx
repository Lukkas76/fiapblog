import React from "react";
import ScrollButton from "./ScrollButton";

export const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 border-top bg-light">
        <div className="container">
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-muted">© 2024 FIAP, Inc</span>
            </div>
        </div>
      <ScrollButton />
    </footer>
  );
};
