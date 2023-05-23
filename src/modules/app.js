import sendHttpRequest from './request';
import { renderCards, renderErrorMessage } from './domWorker';

const URL = 'https://randomuser.me/api/?results=5';

const fetchPosts = async url => {
    try {
        const data = await sendHttpRequest(url);
        renderCards(data.results);
    } catch (error) {
        renderErrorMessage(error.message);
    }
};

fetchPosts(URL);
