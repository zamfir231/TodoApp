import React from 'react'
import SettingsButton from './SettingsButton'
import PlusButton from './PlusButton'
import DayPageButton from './DayPageButton'

const Navbar = ({ date }) => {
    return (
        <nav>
            <DayPageButton date={date} />
            <PlusButton />
            <SettingsButton lines={4} />
        </nav>
    )
}

export default Navbar
