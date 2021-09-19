define(['ko'], (ko) => {
    const events = {};

    const subscribe = (eventName, callback) => {
        if (!events[eventName]) {
            events[eventName] = ko.observable().extend({ notify: 'always' });
        }

        const subscription = events[eventName].subscribe(callback);

        return {
            dispose: subscription.dispose,
        };
    };

    const publish = (eventName, data) => {
        events[eventName](data);
    };

    return {
        subscribe,
        publish,
    };
});
