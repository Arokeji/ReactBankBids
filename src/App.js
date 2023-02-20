import BankAccount from './components/BankAccount/BankAccount.js';
import './App.scss';
import React from 'react';
import Bidding from './components/Bidding/Bidding.js';



function App() {
  //Todo funcionando
  const [bidders, setBidders] = React.useState([{
    currentBid: 0,
    participant: "la casa"
  }]);

  const bid = (participant) => {
    const tempBid = [...bidders];
    tempBid.push({
      currentBid: tempBid[tempBid.length - 1].currentBid + 50,
      participant: participant
    });
    setBidders(tempBid);
  }

  return (
    <div className="App">
      <div className='bank'>
        <h1 className='bank__title'>Cuenta bancaria</h1>
        <BankAccount></BankAccount>
      </div>
      <div className='bid'>
        <h1 className='bid__title'>Listado de pujas</h1>
        <ul className='bid__list'>
          { bidders.map(bid => {
            return <li key={ bid.currentBid }>{ bid.currentBid }€ por { bid.participant }.</li>;
          })}
        </ul>
        
        <h2 className='bid__participants'>Participantes</h2>
        <div className='bid__bidders'>
          <Bidding bid={ bid } participant="Pedro"></Bidding>
          <Bidding bid={ bid } participant="Gonzalo"></Bidding>
          <Bidding bid={ bid } participant="Edu"></Bidding>
        </div>
      </div>
    </div>
  );
}

export default App;
