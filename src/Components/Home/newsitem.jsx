import React from 'react';
import styles from './news.module.css';

const NewsItem = (props) => {

    //const ldate = new Date(props.date);

    if(props.img == null || props.img == '')
    {
        return(
            <div className={styles.flexItemN}>
                <div className={styles.flexContainerTitleN}>
                    <h1 id="title">{ props.title }<br /></h1>
                </div>
                <div className={styles.flexContainerTitleN}>
                    <p id="date">{Date(props.date)}</p>
                </div>
                <div className={styles.flexContainerBodyN}>
                    <p id="news_body">{props.body}</p>
                </div>
            </div>
        );
    }
    else
    {
        return(
            <div className={styles.flexItemN}>
                <div className={styles.flexContainerTitleN}>
                    <h1 id="title">{ props.title }<br /></h1>
                </div>
                <div className={styles.flexContainerTitleN}>
                    <p id="date">{Date(props.date)}</p>
                </div>
                <div className={styles.flexContainerBodyN}>
                    <img src={["http://127.0.0.1:8000/storage/newsimg", props.img].join("/")} id="news_body_img" />
                </div>
                <div className={styles.flexContainerBodyN}>
                    <p id="news_body">{props.body}</p>
                </div>
            </div>
        );
    }
    
}
export default NewsItem;