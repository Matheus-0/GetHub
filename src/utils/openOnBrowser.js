import * as WebBrowser from 'expo-web-browser';

const openOnBrowser = async (url) => {
    const callback = await WebBrowser.openBrowserAsync(url);

    return callback;
};

export default openOnBrowser;
