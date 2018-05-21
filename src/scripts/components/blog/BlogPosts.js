import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkArrow from '../LinkArrow';
import moment from 'moment';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner';

export default class BlogPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: []
        };
    }

    getBlogPostsData = () => {
        axios.get(`https://api.bobbypatterson.me/wp-json/wp/v2/blog_posts?_embed`)
            .then(response => {
                const responseData = response.data;

                this.setState({
                    loading: false,
                    posts: responseData
                });

                //console.log(responseData);
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

    getStyle = (post) => {
        const divStyle = {
            backgroundImage: 'url(' + post.acf.media_thumbnail.url + ')'
        };

        return divStyle;
    }

    rowReverse = (index) => {
        if (! index % 2 === 0) {
            return "row-reverse";
        } else {
            return "flex-row";
        }
    }

    componentDidMount() {
        this.getBlogPostsData();
    }

    render() {
        const { loading, posts } = this.state;
        const footerPadding = !!posts.length < 2;

        return (
            <div className="BlogPosts">
                {
                    loading ? <LoadingSpinner /> :
                    <div>
                        {
                            posts.map((post, index) =>
                                <div className="blog-post mb-2" key={index}>
                                    <div className={`flex flex-row justify-center mb-1 overflow-hidden rounded shadow-lg bg-white ${this.rowReverse(index)}`}>
                                        <div className="wh-blog-img h-auto bg-cover bg-no-repeat overflow-hidden flex-none text-centered" style={this.getStyle(post)}></div>
                                        <div className="w-full p-4">
                                            <div
                                                className="lrg-text-size lh-normal bold"
                                                dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                                >
                                            </div>
                                            <div className="md-text-size slightly-faded lh-normal bold">{post.acf.subtitle}</div>
                                            <div
                                                className="md-text-size slightly-faded lh-normal letter-spacing mb-1"
                                                >
                                                {"Published " + this.showDate(post.date) + (post.modified ? " · " + "Edited " + this.showDate(post.modified) : null)}
                                            </div>
                                            <div
                                                className="md-text-size faded lh-normal"
                                                dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}
                                                >
                                            </div>
                                            <div className="cta lh-normal nmt-1">
                                                <Link
                                                    title={post.title.rendered}
                                                    className="button bg-round"
                                                    to={{pathname: `/blog/${post.slug}`}}
                                                    >
                                                    Continue Reading
                                                    <LinkArrow />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                }
            </div>
        );
    }
}
