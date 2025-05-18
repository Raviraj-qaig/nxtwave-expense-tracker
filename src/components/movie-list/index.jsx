import MovieItems from "../movie-items"
import "./index.css"
import { useState } from "react";

export default function MovieList() {
    const [popup, setPopup] = useState(false);
    const [movieList, setMovieList] = useState([
      {
        id: 1,
        title: "The Shawshank Redemption",
        amount: "$14.47",
        category: "food",
        date: "2022-01-01",
      },
      {
        id: 2,
        title: "The Shawshank Redemption",
        amount: "$14.47",
        category: "food",
        date: "2022-01-01",
      },
      {
        id: 3,
        title: "The Shawshank Redemption",
        amount: "$14.47",
        category: "food",
        date: "2022-01-01",}
    ]);

    const [total, setTotal] = useState(0);

    const [newData, setNewData] = useState({});
    const handleDelete = (id) => {
        const updatedList = movieList.filter((movie) => movie.id !== id);
        setMovieList(updatedList);
    };

    const addNewData = () => {
        setPopup(!popup);
    }

    const addNewDataClick = () => {
        setMovieList([...movieList, newData]);
        setTotal(total + newData.amount);
        setPopup(!popup);
    }

    console.log(movieList)
    return (
      <>
        {popup && (
          <div
            className="popup"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Title"
              onChange={(e) =>
                setNewData({ ...newData, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Amount"
              onChange={(e) =>
                setNewData({ ...newData, amount: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Category"
              onChange={(e) =>
                setNewData({ ...newData, category: e.target.value })
              }
            />
            <input
              type="date"
              onChange={(e) => setNewData({ ...newData, date: e.target.value })}
            />
            <button onClick={addNewDataClick}>Add</button>
          </div>
        )}
        {!popup && (
          <>
            <button onClick={addNewData}>Add</button>
            <ul className="movie-list">
              {movieList?.map((movie) => (
                <MovieItems
                  key={movie.id}
                  movie={movie}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          </>
        )}
      </>
    );
}