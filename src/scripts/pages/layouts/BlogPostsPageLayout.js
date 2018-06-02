import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import BlogPosts from '../../components/blog/BlogPosts';

class BlogPostsPageLayout extends Component {
    addMetaTags = () => {
        return (
            <Helmet>
                <title>Bobby Patterson | Blog</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="I don't expect you to care about my ramblings about life & technology, I really just felt like using Wordpress' REST API in a project" />
                <meta name="keywords" content="Blog, Bobby Patterson, Full Stack Developer, Front-end Developer, UI designer, Tempe, Phoenix, Scottsdale" />
                <meta property="og:url" content="https://bobbypatterson.me/blog" />
                <meta property="og:title" content="Bobby Patterson | Blog" />
                <meta property="og:site_name" content="Bobby Patterson | Blog" />
                <meta property="og:description" content="I don't expect you to care about my ramblings about life & technology, I really just felt like using Wordpress' REST API in a project" />
                <meta property="og:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@bobbypatterson" />
                <meta name="twitter:creator" content="@bobbypatterson" />
                <meta name="twitter:title" content="Bobby Patterson | Blog" />
                <meta name="twitter:description" content="I don't expect you to care about my ramblings about life & technology, I really just felt like using Wordpress' REST API in a project" />
                <meta name="twitter:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <link rel="canonical" href="https://bobbypatterson.me/blog" />
            </Helmet>
        );
    }

    render() {
        const { match, history, isScrolled } = this.props;

        return (
            <div className="Blog">
                { this.addMetaTags() }
                <Navigation {...this.props} />
                <div className="container width-sm mx-auto">
                    <div className="blog-posts mt-7">
                        <h2 className="xl-text-size text-black fw-bold flex">Yeah, I Made a Blog</h2>
                        <div className="md-text-size text-light-gray fw-semi-bold flex mb-1">I don't expect you to care about my ramblings about life & technology, I really just felt like using Wordpress' REST API in a project</div>
                        <div className="line-seperator bg-black faded mb-2"></div>
                        <BlogPosts
                            match={match}
                            history={history}
                            />
                    </div>
                </div>
                <section className="flex flex-wrap w-full bg-transparent">
                    <Footer />
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isHidden: state.navigationReducer.isHidden,
    isScrolled: state.navigationReducer.isScrolled
});

export default connect(mapStateToProps)(BlogPostsPageLayout);
