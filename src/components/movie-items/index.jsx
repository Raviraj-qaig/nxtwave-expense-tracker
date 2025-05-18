import "./index.css"

export default function MovieItems(props) {
    const {movie, handleDelete, toggleVisibility} = props;
    const {id, title, amount, cateory, date} = movie;

    const onhandleDelete = () => {
        handleDelete(id);
    }



    return (
      <li>
        <div className="movie-item">
          <h2>{title}</h2>
          <p>Amount: {amount}</p>
          <p>Category: {cateory}</p>
          <p>Date: {date}</p>
          <div className="buttons">
            <button onClick={onhandleDelete}>Delete</button>
          </div>
        </div>
      </li>
    );
}