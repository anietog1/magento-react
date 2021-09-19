define(['./hooks/useForcedUpdate', './hooks/useObservable', './hooks/useSharedState'], (
    useForcedUpdate,
    useObservable,
    useSharedState
) => {
    return {
        useForcedUpdate,
        useObservable,
        useSharedState,
    };
});
