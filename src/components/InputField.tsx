import { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}


const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}
        >

            <input
                type='input'
                onChange={
                    (e) => setTodo(e.target.value)
                }
                placeholder="Enter a todo"
                className="input__box" />
            <button className="input__submit" type='submit'>GO!</button>
        </form>
    )
}

export default InputField