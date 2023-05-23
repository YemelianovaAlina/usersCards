const dateParser = data => {
    const date = new Date(Date.parse(data));
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    return `${day} / ${month} / ${year}`;
};

export default dateParser;
