import React from 'react';
import './BankAccount.scss';

const BankActions = () => {
    const [accountData, setAccountData] = React.useState({
        owner: "Humberto",
        balance: 3000,
        founds: 0
    });

    const moneyWithdraw = () => {
        let tempAccountData = {
            ...accountData,
            balance: accountData.balance - 50
        }

        tempAccountData.balance < 0 ? 
            alert("Saldo insuficiente.") : 
            setAccountData(tempAccountData);
    }

    const moneyDeposit = () => {
        let tempAccountData = {
            ...accountData,
            balance: accountData.balance + 50
        }
        setAccountData(tempAccountData);
    }

    const moneyDepositFounds = () => {
        let tempAccountData = {
            ...accountData,
            founds: accountData.founds + 1000,
            balance: accountData.balance - 1000
        }

        tempAccountData.balance < 0 ? 
            alert("Saldo insuficiente.") : 
            setAccountData(tempAccountData);
    }

    return (
        <>
            <p className='bank__welcome'>
                Bienvenido <span className='bank__owner'>{accountData.owner}</span>.
            </p>
            <p className='bank__balance'>Tu saldo actual es de:</p>
            <p className='bank__currentbalance'>{ accountData.balance }€</p>
            <p className='bank__founds'>Tienes ahorrado en tu fondo de inversiones:</p>
            <p className='bank__currentfounds'>{ accountData.founds }€</p>
            <div className='bank__actions'>
                <button className='bank__button' onClick={ moneyWithdraw }>Retirar 50€</button>
                <button className='bank__button' onClick={ moneyDeposit }>Ingresar 50€</button>
                <button className='bank__button' onClick={ moneyDepositFounds }>Invertir 1000€</button>
            </div>
        </>
    );
}

export default BankActions;