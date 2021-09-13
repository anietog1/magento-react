# React for Magento

React components can be created the following way:

```javascript
define(['react', 'html'], (
    { useState, useCallback, useEffect },
    html
) => {
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

And React components can be added to phtml templates using the custom widget:

```javascript
<div data-mage-init='{"reactComponent": {
            "component": "Agusquiw_TestArea/js/components/Counter",
            "props": { "initialValue": 1 }
        }}'>
</div>
```

# Htm instead of JSX

To ease the use of React and avoid the necessity of compilation, this extension makes use of [htm](https://github.com/developit/htm) for it's JSX-like syntax.

# Custom Hooks

This extension puts some hooks in place, which are in charge of comunicating with Magento.

## useForcedUpdate

Force the update of the component calling the `forceUpdate` function. It can be passed down to other components or even shared anywhere else.

```javascript
const forceUpdate = useForcedUpdate();
```

## useObservable

Syncs a react state with an observable.

```javascript
const [cartData, setCartData] = useObservable(customerData.get('cart-data'));
```
