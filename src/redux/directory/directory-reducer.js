const INITIAL_STATE = {
    sections : [
        {
          title: 'WOMEN',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 1,
          linkUrl: 'shop/womens'
        },
        {
          title: 'MEN',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 2,
          linkUrl: 'shop/mens'
        },
        {
            title: 'HATS',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 3,
            linkUrl: 'shop/hats'
          },
          {
            title: 'JACKETS',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 4,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'SNEAKERS',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 5,
            linkUrl: 'shop/sneakers'
          }
    ]
};

const directoryReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;