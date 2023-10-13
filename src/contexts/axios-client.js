const ApiClient = () => {
    const defaultOptions = {
        baseURL,
    };

    const instance = axios.create(defaultOptions);

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log(`error`, error);
            throw new Error(error.response.data.message);
        },
    );

    return instance;
};

export default ApiClient();