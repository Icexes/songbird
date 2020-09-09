import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

function Header({ score, activeCategoryNumber, categories, isOver }) {
    const HeaderPanel = () => {
        return (
            <div className='header__panel'>
                <div className='header__logo'>Movie Quiz</div>
                <div className='score'>
                    <span className='score__label'>{`Score: ${score}`}</span>
                </div>
            </div>
        )
    }
    const Menu = () => {
        const MenuList = categories.map((value, index) => <li key={value} className={(activeCategoryNumber === index) && !isOver ? 'menu__item menu__item--active' : 'menu__item'} >{value}</li>);
        return (
            <ul className='menu'>
                {MenuList}
            </ul>
        )

    }

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <HeaderPanel />
                <Menu />
            </div>
        </header>
    )
}

Header.propTypes = {
    score: PropTypes.number.isRequired,
    activeCategoryNumber: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    isOver: PropTypes.bool.isRequired
}

export default Header