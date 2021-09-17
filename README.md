# React for Magento

React components can be created using normal JS. For example:

```javascript
// File: app/code/Agusquiw/ReactDemo/view/frontend/web/js/components/Counter.js"
define(['react', 'html'], ({ useState, useCallback, useEffect }, html) => {
    const Counter = (props) => {
        const [count, setCount] = useState(props.initialValue || 0);
        const increaseCount = useCallback(() => setCount((count) => count + 1), []);
        return html`
            <div>
                <span>${count}</span>
                <button onClick=${increaseCount}>Click me!</button>
            </div>
        `;
    };

    return Counter;
});
```

React components can be added to phtml templates using the custom widget `reactComponent`:

```javascript
<div
    data-mage-init='{
    "reactComponent": {
        "component": "Agusquiw_ReactDemo/js/components/Counter",
        "props": { 
            "initialValue": 0
        }
    }
}'
></div>
```

# Htm instead of JSX

To ease the use of React and avoid the necessity of compilation, this extension makes use
of [htm](https://github.com/developit/htm) for it's JSX-like syntax.

# Custom Hooks

This extension puts some hooks in place, which are in charge of communicating with Magento.

## useForcedUpdate

Force the update of the component calling the `forceUpdate` function. It can be passed down to other components or even
shared anywhere else.

```javascript
const forceUpdate = useForcedUpdate();
```

## useObservable

Syncs a React state with an observable.

```javascript
const [cartData, setCartData] = useObservable(customerData.get('cart-data'));
```

# Roadmap and pending features

-   Event bus or communication system between unrelated components.
-   Switch between react-development and react-production builds based on Magento Admin configuration.

# Contributing

-   Use prettier.
-   Don't bloat the code with comments.
-   Don't optimize ahead of time.
-   Contributing ideas is also contributing.

# Demos

Demos can be found at [Agusquiw_ReactDemo](https://github.com/anietog1/magento-react-demo).
