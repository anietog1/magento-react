define(['ko', './useObservable'], (ko, useObservable) => {
    const states = {};

    const getObservable = (stateName, initialValue) => {
        if (!states[stateName]) {
            states[stateName] = ko.observable(initialValue);
        }

        return states[stateName];
    };

    const useSharedState = (stateName, initialValue) => {
        const observable = getObservable(stateName, initialValue);
        return useObservable(observable);
    };

    return useSharedState;
});
