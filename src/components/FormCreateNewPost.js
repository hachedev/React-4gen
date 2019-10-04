import React from 'react'

function FormCreateNewPost (props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label
            for="exampleTitle"
          >
            Titulo
          </label>
          <input
            type="title"
            className="form-control"
            id="exampleTitle"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <label
            for="description"
          >
            Descripción
          </label>
          <input
            type="description"
            className="form-control"
            id="exampleDescription"
            placeholder="Esto es la descripción del post"
          />
        </div>
        <div className="form-group">
          <label
            for="description"
          >
            Autor
          </label>
          <input
            type="author"
            className="form-control"
            id="exampleAuthor"
            placeholder="Yo merengues"
          />
        </div>
        <div className="form-group">
          <label
            for="date"
          >
            Fecha
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleDate"
            placeholder="07/11/2019"
            />
        </div>
        <div className="form-group">
          <label
            for="readTime"
          >
            Tiempo de lectura
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleReadTime"
            placeholder="6"
            />
        </div>
        <div className="form-group">
          <label
            for="image"
          >
            Imagen
          </label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
            />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          >
          Crear !!
        </button>
      </form>
    </div>
  )
}

export default FormCreateNewPost
