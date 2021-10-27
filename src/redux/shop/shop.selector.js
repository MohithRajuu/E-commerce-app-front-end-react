import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const selectCollection = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollection],
    collection => Object.keys(collection).map(key => collection[key]) 
)