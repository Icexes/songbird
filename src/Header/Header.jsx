import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

function Header({ score, activeCategory, categories }) {
    const HeaderPanel = () => {
        return (
            <div className='header__panel'>
                <div className='header__logo' />
                <div className='score'>
                    <span className='score__label'>Score:</span>
                    <span className='score__value'>{score}</span>
                </div>
            </div>
        )
    }
    const Menu = () => {
        const MenuList = categories.map((value, index) => <li key={value} className={activeCategory === index ? 'menu__item menu__item--active' : 'menu__item'} >{value}</li>);
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
    activeCategory: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Header