import { useState } from "react"
import Swal from "sweetalert2"

const Controlado = ({ addTodo }) => {
    const [valores, setValores] = useState({
        title: '',
        description: '',
        state: '',
        priority: false
    })
    const { title, description, state, priority } = valores

    const handleChange = (e) => {
        const { value, name, type, checked } = e.target

        setValores({
            ...valores,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setValores({
            title: '',
            description: '',
            state: '',
            priority: false
        })

        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y descripción obligatorios',
            })
        }
        addTodo({
            id: Date.now(),
            ...valores,
            state: state === 'completado'
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'todo agregado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Ingrese Todo'
                className='form-control mb-2'
                name='title'
                value={title}
                onChange={handleChange}
            />
            <textarea
                className='form-control mb-2'
                placeholder='Ingrese descripción'
                name='description'
                value={description}
                onChange={handleChange}
            />
            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select
                className='form-select mb-2'
                name='state'
                value={state}
                onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button
                className='btn btn-primary'
                type='submit'
            >
                Agregar todo
            </button>
        </form>
    )
}

export default Controlado