define(['jquery', 'react-dom', 'html'], ($, ReactDOM, html) => {
    $.widget('mage.reactComponent', {
        options: {
            component: false,
            props: {},
        },
        _create: function () {
            const component = this.options.component;
            const props = this.options.props;
            const element = $(this.element)[0];
            if (component) {
                require([component], (Component) => {
                    ReactDOM.render(html`<${Component} ...${props} />`, element);
                });
            }
        },
    });

    return $.mage.reactComponent;
});
