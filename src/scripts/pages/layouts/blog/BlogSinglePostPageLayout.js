import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Navigation from '../../../components/Navigation';
import BlogPost from '../../../components/blog/BlogPost';

class BlogSinglePostPageLayout extends Component {
    render() {
        const { match, history, isMobile } = this.props;

        return (
            <div>
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
