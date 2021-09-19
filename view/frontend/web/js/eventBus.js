define(['ko'], (ko) => {
    const events = {};

    const subscribe = (event, callback) => {
        if (!events[event]) {
            events[event] = ko.observable().extend({ notify: 'always' });
        }

        const subscription = events[event].subscribe(callback);

        return {
            dispose: subscription.dispose,
        };
    };

    const publish = (event, data) => {
        events[event](data);
    };

    return {
        subscribe,
        publish,
    };
});
