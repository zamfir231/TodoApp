import AddTaskButton from "./AddTaskButton"
import Navbar from './navbar/Navbar'

const Header = ({ onAddTask }) => {
    return (
        <header>
            <div className='header'>
                <Navbar date='12' />
                <div className='complete-header'>
                </div>
                <h1 className='header-title'>Intray</h1>
                <AddTaskButton onClick={onAddTask } />
            </div>
        </header>
    )
}

export default Header