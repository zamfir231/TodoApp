import AddTaskButton from "./AddTaskButton"
import Navbar from './navbar/Navbar'

const Header = ({ onAddTask, page }) => {
    return (
        <header>
            <div className='header'>
                {page === 'home' && <Navbar date='12' /> }
                <div className='complete-header'>
                </div>
                {page === 'home' && <h1 className='header-title'>Intray</h1>}
                <AddTaskButton onClick={onAddTask } />
            </div>
        </header>
    )
}

export default Header