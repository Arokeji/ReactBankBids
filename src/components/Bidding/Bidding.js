import './Bidding.scss';

const Bidding = ({bid, participant}) => {
    return (
        <button className='bid__button' onClick={ () => bid(participant) }>{ participant } puja 5€</button>
    );
}

export default Bidding;