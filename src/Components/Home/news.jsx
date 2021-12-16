import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './news.module.css';
import NewsItem from './newsitem';

const News = () => {

    const[news, setNews] = useState([]);

    useEffect(() => {
        document.title = "News"
        axios.get("all-news")
        .then(response=>{
            setNews(response.data);
        }).catch(error=>{
            console.log(error);
        });
      }, [])

    if(news.length > 1)
    {
        return(
            <div classNameName={styles.bodydiv}>
                <div className={styles.flexContainerN}>
                    {/*{{-- @foreach ($news as $n)
                    <div className="flex-item">
                        <div className="flex-container-title">
                            <h1 id="title">{{ $n->newstitle }}<br></h1>
                        </div>
                        <div className="flex-container-title">
                            <p id="date">{{ $n->updated_at }}</p>
                        </div>
                        <div className="flex-container-body">
                            <img src="/newsimg/{{ $n->newspicture }}" id="news_body_img" alt= "">
                        </div>
                        <div className="flex-container-body">
                            <p id="news_body">{{ $n->newsbody }}</p>
                        </div>
                    </div>
                    @endforeach --}}*/}
                    {/*<div className="flex-item">
                        <div className="flex-container-title">
                            <h1 id="title">{{ $n->newstitle }}<br /></h1>
                        </div>
                        <div className="flex-container-title">
                            <p id="date">{{ $n->updated_at }}</p>
                        </div>
                        @if ($n->newspicture!=null)
                            <div className="flex-container-body">
                                <img src="/storage/newsimg/{{ $n->newspicture }}" id="news_body_img">
                            </div>
                        @endif
                        <div className="flex-container-body">
                            <p id="news_body">{{ $n->newsbody }}</p>
                        </div>
                    </div>*/}
                    {/*<div className={styles.flexItemN}>
                        <div className={styles.flexContainerTitleN}>
                            <h1 id="title">No News<br /></h1>
                        </div>
                        <div className={styles.flexContainerTitleN}>
                            <p id="date">00-00-0000</p>
                        </div>
                        <div className={styles.flexContainerBodyN}>
                            <p id="news_body">No News!</p>
                        </div>
                    </div>*/}
                    {news.map(n=>(
                        <NewsItem title={n.newstitle} date={n.updated_at} img={n.newspicture} body={n.newsbody} key={n.id} />
                    ))}
                </div>
            </div>
        );
    }
    else{
        return(
            <div classNameName={styles.bodydiv}>
                <div className={styles.flexContainerN}>
                    <div className={styles.flexItemN}>
                        <div className={styles.flexContainerTitleN}>
                            <h1 id="title">No News<br /></h1>
                        </div>
                        <div className={styles.flexContainerTitleN}>
                            <p id="date">00-00-0000</p>
                        </div>
                        <div className={styles.flexContainerBodyN}>
                            <p id="news_body">No News!</p>
                        </div>
                    </div>
                    {}
                </div>
            </div>
        );
    }
}
export default News;