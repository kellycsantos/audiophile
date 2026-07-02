import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartType, ProductType } from '../types';

type State = CartType;

type Action = {
    addItem: (item: ProductType, quantity: number) => void
    removeAllItems: () => void,
    sumTotalAmount: () => void,
}


export const useCartStore = create(
    persist<State & Action>((set, get) => ({
    totalAmount: 0,
    totalItems: 0,
    items: [],

    sumTotalAmount: () =>
        set((state) => {
            return { totalAmount: state.items.reduce((value, item) => value + (item.price * (item.quantity ?? 1)), 0) }
        }),

    addItem: (item: ProductType, quantity: number) => {

        set((state) => {
            const exists = state.items.find(
                (product) => product.id === item.id
            );

            if (exists) {
                const items = state.items.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: (product.quantity ?? 1) + quantity }
                        : product,
                );

                return {
                    items,
                    totalItems: items.reduce(
                        (total, item) => total + (item.quantity ?? 1),
                        0,
                    ),
                };
            }

            const items = [...state.items, { ...item, quantity }];
            return {
                items,
                totalItems: items.reduce(
                    (total, item) => total + (item.quantity ?? 1),
                    0,
                ),
            };
        })
        get().sumTotalAmount();
    },



    removeAllItems: () =>
        set({
            items: [],
            totalAmount: 0,
            totalItems: 0,
        }),

}), {
    name: 'cart',
    storage: createJSONStorage(() => localStorage),
}))