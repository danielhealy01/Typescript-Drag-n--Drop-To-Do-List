import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    
    const handleKeyDown = (e: any) => {
      if (document.activeElement instanceof HTMLElement && e.key === "Enter") {
        handleAdd(e);
        document.activeElement.blur();
      }
    };
    
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}
            onKeyDown={handleKeyDown}
        >

            <input
                type='text'
                value={todo}
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