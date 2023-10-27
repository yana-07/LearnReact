import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.message || 'Something went wron, failed to send request.');
    }

    return resData;
}

export function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    function clearData() {
        setData(initialData);
    }

    const sendRequest = useCallback(
        async function sendRequest(data) {
            setIsLoading(true);

            try {
                const resData = await sendHttpRequest(url, {...config, body: data});
                setData(resData);
            } catch (error) {
                setError(error.message || 'Something went wrong.');
            }

            setIsLoading(false);
        },
        [url, config]
    );

    useEffect(() => {
        // in this app every GET request should be sent when the component, to which the hook belongs, gets rendered
        if (config && (config.method === 'GET' || !config.method) || !config) {
            sendRequest();
        }
    }, [sendRequest, config]);

    // expose sendRequest for all non-GET requests
    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    }
}