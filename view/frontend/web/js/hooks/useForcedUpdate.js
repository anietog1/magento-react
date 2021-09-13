define(['react'], ({ useCallback, useState }) => {
    const increase = (x) => x + 1;

    /**
     * Avoid abusing this hook, updates should be triggered by React.
     */
    const useForcedUpdate = () => {
        const [counter, setCounter] = useState(0);
        const forceUpdate = useCallback(() => setCounter(increase));
        return forceUpdate;
    };

    return useForcedUpdate;
});
