import {useState} from 'react'

const useForm = (estadoInicial) => {
    const [form, setForm] = useState(estadoInicial)
       
    const onChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
    }
    return {form, onChange}
}

export default useForm
