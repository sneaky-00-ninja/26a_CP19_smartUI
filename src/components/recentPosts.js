import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions'

import Post from './post';


class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    renderPosts = function() {
        const posts = this.props.recentPosts.map((post, index) => {
            if (index < 3) {
                return (
                    <post {...post} key={index}/>
                )

            }
        })
        return posts
    }

    render() {
        return (
            <div className='recent-posts'>
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">Recent posts</div>
                        <ul className="recent-posts-posts">
                            {/* <li>Recent post 0</li>
                            <li>Recent post 1</li>
                            <li>Recent post 2</li> */}
                            {this.renderPosts()}
                        </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        recentPosts: state.posts.recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts);







// renderPosts = function() {
//     const posts = this.props.recentPosts.map((post, index) => {
//         if (index < 3) {
//             return (
//                 <li key={index}>
//                 {/* <li> //TODO *if above line is just <li> 
//                 then error. SO CHECK to see and know it */}
//                 {post.title}
//                 </li>
//             )

//         }
//     })
//     return posts
// }