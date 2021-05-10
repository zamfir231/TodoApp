import AddTaskButton from "./AddTaskButton"

const Header = ({ onAddTask }) => {
    return (
        <header>
            <div className='header'>
                <div className='complete-header'>
                </div>
                <h1 className='header-title'>Intray</h1>
                <AddTaskButton onClick={onAddTask } />
            </div>
        </header>
    )
}

export default Header