import React from 'react'

function FormCreateNewRepo(props) {
  return (
    <div className="container">
      <form>
        <br />
        <h3>Create a new repository</h3>
        <p>A repository contains all project files, including the revision history. Already have a project repository elsewhere?</p>
        <br />
        <div className="form-group row">
          <div className="col-2">
            <label
              for="exampleTitle"
            >
              Owner
          </label>
            <input
              type="text"
              className="form-control"
              id="exampleTitle"
              placeholder="Enter Owner"
            />
          </div>
          <div className="col-4">
            <label
              for="exampleTitle"
            >
              Repository name
          </label>
            <input
              type="text"
              className="form-control"
              id="exampleTitle"
              placeholder="Repository name"
            />
          </div>
          <div className="colm-5">

          </div>
        </div>
        <div className="form-group ">
          <label
            for="description"
          >
            Descripción (optional)
          </label>
          <input
            type="description"
            className="form-control"
            id="exampleDescription"
            placeholder="Esto es la descripción del Repo"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox"/>
            </div>
          </div>
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

export default FormCreateNewRepo
