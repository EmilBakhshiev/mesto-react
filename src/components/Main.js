import React, { useEffect, useState } from 'react';
import '../index.css';
import api from '../utils/Api.js'
import Card from './Card.js'

function Main(props) {
    const [userName, setUserName] = useState([]);
    const [userDescription, setUserDescription] = useState([]);
    const [userAvatar, setUserAvatar] = useState([]);
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        getUserInfo();
        getCards();
    }, [])

    function getUserInfo() {
        api.getProfileInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err)=>{
                console.error(err);
            })
    }

    function getCards() {
        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err)=>{
                console.error(err);
            })
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__wrapper-avatar">
                    <img src={userAvatar} alt="Профиль" className="profile__avatar" />
                    <button className="profile__edit-avatar" onClick={props.onEditAvatar} />
                </div>
                <div className="profile__wrapper">
                    <div className="profile__wrapper-text">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace} />
            </section>

            <section className="galery">
           {cards.map((item)=>{
            return <Card card={item} key={item._id} onCardClick={props.onCardClick}/>
           })} 
            </section>
        </main>
    )
}
export default Main;  
