import './styles.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: () => void
}


const InputField = ({ todo, setTodo } : Props) => {
    return (
        <form className="input">
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