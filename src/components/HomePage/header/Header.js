import AddTaskButton from "./AddTaskButton"
import Navbar from './navbar/Navbar'
import HeaderTextDate from "../../todayPage/HeaderTextDate"

const Header = ({ onAddTask, page }) => {
    return (
        <header>
            <div className='header'>
                {page === 'home' && <Navbar date='12' /> }
                <div className='complete-header'>
                </div>
                {page === 'home' ? 
                    <h1 className='header-title'>Intray</h1>
                    : 
                    page === 'this-month'
                    ?
                    <></>
                    :
                    <HeaderTextDate date={12} />
                }
                { page === 'home' && <AddTaskButton onClick={onAddTask } /> }
            </div>
        </header>
    )
}

export default Header