import React from "react";

export default function Buttons({ handleDelete }) {
  return (
    <button
      type="buttom"
      style={{ background: "red", color: "white", fontSize: "2rem" }}
      onClick={handleDelete}
    >
      delete me
    </button>
  );
}
