import Button from './Button';

const Header = ({ onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>recipes for responsible adults</h1>
            <Button color='black' text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header;