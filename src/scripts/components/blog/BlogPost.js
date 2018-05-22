import { Helmet } from 'react-helmet';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkArrowBack from '../LinkArrowBack';
import moment from 'moment';
import axios from 'axios';
import { filter } from 'lodash';
import LoadingSpinner from '../../components/LoadingSpinner';

export default class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
            post: null
        };
    }

    addMetaTags = (post) => {
        return (
            <Helmet>
                <title>Bobby Patterson | {post.title.rendered}</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content={post.excerpt.rendered} />
                <meta name="keywords" content={`Blog, Bobby Patterson`} />
                <meta property="og:url" content={`https://bobbypatterson.me/blog/${post.slug}`} />
                <meta property="og:title" content={`Bobby Patterson | ${post.title.rendered}`} />
                <meta property="og:site_name" content={`Bobby Patterson | ${post.title.rendered}`} />
                <meta property="og:description" content={post.excerpt.rendered} />
                <meta property="og:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@bobbypatterson" />
                <meta name="twitter:creator" content="@bobbypatterson" />
                <meta name="twitter:title" content={`Bobby Patterson | ${post.title.rendered}`} />
                <meta name="twitter:description" content={post.excerpt.rendered} />
                <meta name="twitter:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <link rel="canonical" href={`https://bobbypatterson.me/blog/${post.slug}`} />
            </Helmet>
        );
    }

    getBlogPostData = () => {
        axios.get(`https://api.bobbypatterson.me/wp-json/wp/v2/blog_posts?_embed`)
            .then(response => {
                const responseData = response.data;
                const getBlogPostSlugFromUrl = window.location.pathname.split('/')[2];
                const postIndex = filter(responseData, ['slug', getBlogPostSlugFromUrl])[0];

                this.setState({
                    loading: false,
                    posts: responseData,
                    post: postIndex
                });

                //console.log(postIndex);
                return responseData;
            })
            .catch(error => {
                return error;
            });
    }

    showDate = (time) => {
        //const days = moment(post.date).startOf('day').fromNow()[0];
        //const daysAgo = moment(post.date).startOf('day').fromNow();
        const date = moment(time).calendar();

        return date;
    }

    componentDidMount() {
        this.getBlogPostData();
    }

    render() {
        const { loading, post } = this.state;

        return (
            <div className="BlogPost">
                <div className="blog-post">
                    <Link
                        title="Go back to home"
                        className="back-button mb-1"
                        to="/blog"
                        >
                        <LinkArrowBack />
                        Go back
                    </Link>
                    <div className="line-seperator mb-2 bg-black faded"></div>
                    {
                        loading ? <LoadingSpinner /> :
                        <div>
                            { this.addMetaTags(post) }
                            <div className="flex w-full flex-row flex-align-vertical-center mb-2">
                                <img className="blog-post-image col-3" src={post.acf.media.url} />
                                <div className="col-9">
                                    <div
                                        className="lrg-text-size lh-normal bold"
                                        dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                        >
                                    </div>
                                    <div className="md-text-size slightly-faded lh-normal bold">{post.acf.subtitle}</div>
                                    <div
                                        className="md-text-size slightly-faded lh-normal letter-spacing"
                                        >
                                        {"Published " + this.showDate(post.date)}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="lrg-text-size lh-normal mb-1"
                                dangerouslySetInnerHTML={{__html: post.content.rendered}}
                                >
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
