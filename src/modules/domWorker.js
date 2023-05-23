import dateParser from './helpers';

const container = document.querySelector('.gridContainer');
const cardTemplate = document.querySelector('.singleCard');
const setDataAttr = (elem, attr) => {
    Object.keys(attr)
        .forEach(key => {
            elem.setAttribute(`data-${key}`, `${attr[key]}`);
        });
};

const renderCards = data => {
    data.forEach((card, idx) => {
        const cardElement = document.importNode(cardTemplate.content, true);
        cardElement.querySelector('.card__avatar img').src = card.picture.large;
        cardElement.querySelector('.info__title').textContent = 'Hello, my name is';
        cardElement.querySelector('.info__desc').textContent = `${card.name.first} ${card.name.last}`;

        setDataAttr(cardElement.querySelector('[data-label="user"]'), {
            value: `${card.name.first} ${card.name.last}`,
            id: idx,
        });

        setDataAttr(cardElement.querySelector('[data-label="bday"]'), {
            value: dateParser(card.dob.date),
            id: idx,
        });

        setDataAttr(cardElement.querySelector('[data-label="password"]'), {
            value: card.login.password,
            id: idx,
        });

        setDataAttr(cardElement.querySelector('[data-label="email"]'), {
            value: card.email,
            id: idx,
        });

        setDataAttr(cardElement.querySelector('[data-label="phone"]'), {
            value: card.phone,
            id: idx,
        });

        setDataAttr(cardElement.querySelector('[data-label="address"]'), {
            value: `${card.location.country}, ${card.location.city}`,
            id: idx,
        });
        container.append(cardElement);
    });
};

const classNameToggle = (removeFrom, addTo, className) => {
    removeFrom.classList.remove(className);
    addTo.classList.add(className);
};

const rewriteData = (element, newData) => {
    element.innerText = newData;
};

container.addEventListener('click', event => {
    const id = event.target.getAttribute('data-id');
    const card = document.querySelectorAll('.card')[id];
    if (event.target.tagName === 'LI') {
        classNameToggle(
            card.querySelector('.card__icon--active'),
            event.target,
            'card__icon--active',
        );
        const title = card.querySelector('.info__title');
        const desc = card.querySelector('.info__desc');
        const titleContent = event.target.getAttribute('data-title');
        const descContent = event.target.getAttribute('data-value');
        rewriteData(title, titleContent);
        rewriteData(desc, descContent);
    }
});

export default renderCards;
