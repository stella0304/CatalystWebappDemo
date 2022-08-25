import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>recipes for responsible adults</h1>
            <div className='searchBar'>
                <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            </div>
        </header>
    )
}

export default Header;