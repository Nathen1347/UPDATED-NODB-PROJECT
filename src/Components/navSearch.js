import './navSearch.css'

const Search = (props) => {
  return (
    <div className='Header'>
      <div>
        <h1 className='Web-name'>ReviewCentral</h1>
      </div>
      <div>
          <input className='Input' onChange={e => props.handleSearchInput(e.target.value)} placeholder={'Search Your Reviewed Shows...'} type='text'/>
      </div>
      <div className='Sign-in'>
          <button className='Button'>My Profile</button>
      </div>
    </div>
  );
};

export default Search;
