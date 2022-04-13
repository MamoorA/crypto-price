import './App.css';
import {useEffect,useState} from 'react';
import Axios from 'axios';
import Coin from './components/Coin';
function App() {
  //requests newest price for the cryptocurrience 
  useEffect(() =>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
      (response) => {
        setCoins(response.data.coins);
        console.log(response.data);
      }
    );
  }, []);

  //when the variables value changes it will trigger a rerender
  const [coinList, setCoins] = useState([])


  return (
    <div className="Price">
      <div className ="Header"></div>
      <div className="Display">
        {coinList.map((coin) =>{
          return <Coin 
            name={coin.name} 
            icon={coin.icon} 
            marketCap={coin.marketCap}
            price={coin.price} 
            symbol={coin.symbol} 
          />;
        })}
      </div>
    </div>
  );
}

export default App;
