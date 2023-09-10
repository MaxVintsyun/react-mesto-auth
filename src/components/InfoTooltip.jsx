import React from "react";
import SuccessImg from "../images/SuccessImg.svg"
import UnsuccessImg from "../images/UnsuccessImg.svg"

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__overlay popup__content">
                <img className="popup-info-tooltip__image" src={props.isSuccess ? SuccessImg : UnsuccessImg} alt='' />
                <p className="popup-info-tooltip__text">
                    {props.isSuccess ?
                        'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
                </p>
                <button className="popup__close-button" type="button" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default InfoTooltip;