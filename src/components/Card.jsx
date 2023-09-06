import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `card__like-button ${isLiked && 'card__like-button_active'}`
    );
    const handleClick = () => {
        onCardClick(card);
    }

    const handleLikeClick = () => {
        onCardLike(card);
    }

    const handleCardDelte = () => {
        onCardDelete(card._id)
    }

    return (
        <article className="card">
            {isOwn && <button className="card__delete" onClick={handleCardDelte} type="button" />}
            <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
            <h3 className="card__name">{card.name}</h3>
            <div className="card__likes">
                <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
                <p className="card__likes-count">{card.likes.length}</p>
            </div>
        </article>
    );
}

export default Card;