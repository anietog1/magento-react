define(['./hooks/useForcedUpdate', './hooks/useObservable', './hooks/useTranslation'], (
    useForcedUpdate,
    useObservable,
    useTranslation
) => {
    return {
        useForcedUpdate,
        useObservable,
        useTranslation,
    };
});
