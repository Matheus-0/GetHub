import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
});

async function searchUsers(username) {
    try {
        const response = await api.get('search/users', {
            params: {
                q: username,
            },
        });

        return response.data;
    } catch (error) {
        return null;
    }
}

export default api;
