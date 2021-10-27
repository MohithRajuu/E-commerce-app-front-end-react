import './collection-page.styles.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector'

import CollectionItem from '../../component/collection-item/collection-item.component';


const CollectionPage = ({ match, collection }) => {
    const collectionIdItem = collection[match.params.collectionId]
    const { items, title } = collectionIdItem;
    
    return(
        <div className="collection-page">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='items'>
                {
                    items.map(collection => (
                        <CollectionItem key={collection.id} item={collection}/>
                    ))
                }
            
            </div>
        </div>
    
)};

const mapStateToProps = state => ({
    collection : selectCollection(state)
})

export default connect(mapStateToProps)(CollectionPage);