import MovieList from "../movie-list";
import { useState } from "react";

export default function MovieLayout() {
        return (
      <div>
        <h1 style={{ textAlign: "center", color: "black" }}>Expense Tracker</h1>
        <MovieList />
      </div>
    );
}