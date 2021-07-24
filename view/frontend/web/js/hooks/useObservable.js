define(['react'], ({ useReducer, useCallback, useEffect }) => {
    const ACTIONS = {
        UPDATE_STATE: 0,
        UPDATE_OBSERVABLE: 1,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.UPDATE_STATE:
                return action.value;
            case ACTIONS.UPDATE_OBSERVABLE:
                action.observable(action.value);
                return action.value;
        }
    };

    const useObservable = (observable) => {
        const [state, dispatch] = useReducer(reducer, observable());

        const setState = useCallback(
            (state) => dispatch({ type: ACTIONS.UPDATE_OBSERVABLE, observable, value: state }),
            [observable]
        );

        useEffect(() => {
            const subscription = observable.subscribe((value) => {
                dispatch({ type: ACTIONS.UPDATE_STATE, value });
            });
            return () => subscription.dispose();
        }, [observable]);

        return [state, setState];
    };

    return useObservable;
});
