import './menu-item.styles.scss';
import{ withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return(
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage : `url(${imageUrl})`,
            }}></div>
            <div className="content">
                <h2 className="title">{title}</h2>
            </div>
         </div>
    )
}

export default withRouter(MenuItem);