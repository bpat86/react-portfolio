import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Navigation from '../../../components/Navigation';
import BlogPost from '../../../components/blog/BlogPost';

class BlogSinglePostPageLayout extends Component {
    addMetaTags = () => {
        return (
            <Helmet>
                <title>Bobby Patterson | Blog</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="I try not to take myself too seriously. I also try to maintain a healthy work/life balance, though it can be pretty difficult sometimes to not get completely wrapped up in fun side projects. What can I say really, it's a labor of love. When not reclined in front of my laptop and getting minimal hours of sleep, I enjoy spending time with my friends & family, traveling, playing my guitars (poorly), weight lifting, and engaging in the relentless pursuit of knowledge and happiness." />
                <meta name="keywords" content="Bobby Patterson, Full Stack Developer, Front-end Developer, UI designer, Tempe, Phoenix, Scottsdale" />
                <meta property="og:url" content="https://bobbypatterson.me/about" />
                <meta property="og:title" content="Bobby Patterson | Blog" />
                <meta property="og:site_name" content="Bobby Patterson | Blog" />
                <meta property="og:description" content="I try not to take myself too seriously. I also try to maintain a healthy work/life balance, though it can be pretty difficult sometimes to not get completely wrapped up in fun side projects. What can I say really, it's a labor of love. When not reclined in front of my laptop and getting minimal hours of sleep, I enjoy spending time with my friends & family, usi eling, playing my guitars (poorly), weight lifting, and engaging in the relentless pursuit of knowledge and happiness." />
                <meta property="og:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@bobbypatterson" />
                <meta name="twitter:creator" content="@bobbypatterson" />
                <meta name="twitter:title" content="Bobby Patterson | Blog" />
                <meta name="twitter:description" content="I try not to take myself too seriously. I also try to maintain a healthy work/life balance, though it can be pretty difficult sometimes to not get completely wrapped up in fun side projects. What can I say really, it's a labor of love. When not reclined in front of my laptop and getting minimal hours of sleep, I enjoy spending time with my friends & family, usi eling, playing my guitars (poorly), weight lifting, and engaging in the relentless pursuit of knowledge and happiness." />
                <meta name="twitter:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <link rel="canonical" href="https://bobbypatterson.me/about" />
            </Helmet>
        );
    }

    render() {
        const { match, history } = this.props;

        return (
            <div>
                { this.addMetaTags() }
                <Navigation {...this.props} />
                <div className="container width-sm mx-auto mt-7 mb-3">
                    <BlogPost
                        match={match}
                        history={history}
                        />
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

export default connect(mapStateToProps)(BlogSinglePostPageLayout);
