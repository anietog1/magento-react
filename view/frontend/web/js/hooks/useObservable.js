define(['react'], ({ useCallback, useEffect, useState }) => {
    const useObservable = (observable) => {
        const [value, setValue] = useState(observable());
        const setState = useCallback((state) => observable(state), [observable]);
        const getState = useCallback(() => observable(), [observable]);

        useEffect(() => {
            const subscription = observable.subscribe((value) => {
                setValue(value);
            });

            return subscription.dispose;
        }, [observable]);

        return [value, setState, getState];
    };

    return useObservable;
});
