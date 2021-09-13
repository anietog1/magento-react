define(['react', './useForcedUpdate'], ({ useCallback, useEffect, useState }, useForcedUpdate) => {
    const useObservable = (observable) => {
        const forceUpdate = useForcedUpdate();

        const setState = useCallback((state) => observable(state), [observable]);
        const getState = useCallback(() => observable(), [observable]);

        useEffect(() => {
            const subscription = observable.subscribe(() => {
                forceUpdate();
            });

            return () => subscription.dispose();
        }, [observable]);

        return [observable(), setState, getState];
    };

    return useObservable;
});
