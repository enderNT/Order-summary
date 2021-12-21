import './App.css';
import iconmusic from './images/icon-music.svg'
import ilustrationhero from './images/illustration-hero.svg'


function App() {
  return (
    <div className="App">

      <div className='container'>
        <img src={ilustrationhero} alt='ilustration-hero' className='IlustrationHero' />
        <h1>Order Summary</h1>
        <p className='Description'>
          You can now listen to millions of songs,
          audiobooks, and podcast on any device
          anywhere you like!
        </p>
        <div className='Info'>
          <img src={iconmusic} alt='icon-music' className='IconMusic' />
          <div className='Plan'>
            <h4>Anual plan</h4>
            <p className='Price'>$59.99/year</p>
          </div>
          <button className='Change'>Change</button>
        </div>
        <button className='PayOut'>Proceed to payment</button>
        <button className='Cancel'>Cancel Order</button>
      </div>

    </div>
  );
}

export default App;
