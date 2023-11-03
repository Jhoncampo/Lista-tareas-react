import React, { useRef, useState } from 'react'

const NoControlado = () => {

    const form = useRef(null)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        const data = new FormData(form.current)
        const {title, description, state} = Object.fromEntries([...data.entries()])
        
        if (!title.trim() || !description.trim() || !state.trim())return setError('Completa todos los campos')
        
        console.log(title, description, state)
    }
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input
                type="text"
                placeholder='Ingrese Todo'
                className='form-control mb-2'
                name='title'
                defaultValue='Todo 1'
            />
            <textarea
                className='form-control mb-2'
                placeholder='Ingrese descripción'
                name='description'
                defaultValue='Descripción 1'
            />
            <select className='form-select mb-2' name='state'>
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button
                className='btn btn-primary'
                type='submit'
            >
                Procesar
            </button>
            {
                error !== '' && error
            }
        </form>
    )
}

export default NoControlado