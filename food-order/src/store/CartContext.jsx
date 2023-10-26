import { createContext, useReducer } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIdx = state.items.findIndex(item => item.id === action.item.id);
        const updatedItems = [...state.items]

        if (existingCartItemIdx > -1) {
            const existingCartItem = state.items[existingCartItemIdx];
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1
            }
            updatedItems[existingCartItemIdx] = updatedItem;
        } else {
            updatedItems.push({
                ...action.item,
                quantity: 1
            });
        }

        return {
            ...state,
            items: updatedItems
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIdx = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIdx];

        const updatedItems = [...state.items];
        
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIdx, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }
            updatedItems[existingCartItemIdx] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems
        }
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        });
    }

    function removeItem(id) {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id
        });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    };

    // pass cart state to the CartContext Provider, because that will implicitly pass it to all other wrapped components interested in that state
    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}

export default CartContext;