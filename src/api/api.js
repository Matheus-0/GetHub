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

async function searchRepositories(repository) {
    try {
        const response = await api.get('search/repositories', {
            params: {
                q: repository,
            },
        });

        return response.data;
    } catch (error) {
        return null;
    }
}

async function getUser(username) {
    try {
        const response = await api.get(`users/${username}`);

        return response.data;
    } catch (error) {
        return null;
    }
}

export default api;
