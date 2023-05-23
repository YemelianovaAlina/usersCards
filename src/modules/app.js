import sendHttpRequest from './request';
import renderCards from './domWorker';

const URL = 'https://randomuser.me/api/?results=5';

const fetchPosts = async url => {
    try {
        const data = await sendHttpRequest(url);
        renderCards(data.results);
    } catch (error) {
        console.log(error.message);
    }
};

fetchPosts(URL);
