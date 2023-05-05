function TodoOutputCard({name, id, deletetodohandler}) {

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
        <span
          className="form-control w-75"
        >
          {name}
        </span>
        <button type="button" className="btn btn-outline-danger" onClick={() => {deletetodohandler(id)}}>Delete</button>
      </div>
    </>
  );
}

export default TodoOutputCard;
