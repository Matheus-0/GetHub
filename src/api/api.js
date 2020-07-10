import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
});

export async function searchUsers(username) {
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

export async function searchRepositories(repository) {
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

export async function getUser(username) {
    try {
        const response = await api.get(`users/${username}`);

        return response.data;
    } catch (error) {
        return null;
    }
}

export async function getRepository(owner, repository) {
    try {
        const response = await api.get(`repos/${owner}/${repository}`);

        return response.data;
    } catch (error) {
        return null;
    }
}

export async function getUserRepositories(username) {
    try {
        const response = await api.get(`users/${username}/repos`);

        return response.data;
    } catch (error) {
        return null;
    }
}

export async function getFollowers(username) {
    try {
        const response = await api.get(`users/${username}/followers`);

        return response.data;
    } catch (error) {
        return null;
    }
}

export async function getFollowing(username) {
    try {
        const response = await api.get(`users/${username}/following`);

        return response.data;
    } catch (error) {
        return null;
    }
}

export default api;
