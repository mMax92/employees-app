import './search-panel.css';

const SearchPanel = () => {
    return (
        <input 
            type="text" 
            className="form-control search-input"
            placeholder="Find the employee" />
    );
}

export default SearchPanel;