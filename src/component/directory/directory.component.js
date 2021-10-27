import { connect } from 'react-redux';

import { directorySectionsSelector } from '../../redux/directory/directory.selector'

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className="directory">
      {
        sections.map(({id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps}/>
          ))
      }
    </div>   
)
   
const mapStateToProps = state => ({
  sections : directorySectionsSelector(state)
})   

export default connect(mapStateToProps)(Directory);