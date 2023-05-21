const URL = 'https://randomuser.me/apie/?results=5';

async function sendHttpRequest(url) {
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    return data;
}

const fetchPosts = async url => {
    try {
        const data = await sendHttpRequest(url);
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};

fetchPosts(URL);