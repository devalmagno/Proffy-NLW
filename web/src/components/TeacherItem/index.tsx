import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/59383102?s=460&u=dfe1786778ac54ba9693d4f57f61563a2112a9c7&v=4" alt="Lúcio Magno" />
                <div>
                    <strong>Lúcio Magno</strong>
                    <span>História</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam suscipit quibusdam numquam dignissimos consequatur corporis nobis? Voluptatem quam dolorum quidem dolores consequuntur autem ad, eos ea blanditiis. Ducimus, fugit.
            </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;