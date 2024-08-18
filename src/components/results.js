import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
//mport ResultsPosts from './resultsPosts';

import { connect } from 'react-redux';
import * as actions from '../actions';

export default class Results extends Component {
    render() {
        return (
            <div>
                <Logo size={55} />
                <SearchBar/>
            </div>
        );
    }
}


// import React, { Component } from 'react';
// import Logo from './logo';

// class Results extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Results</h1>
//                 <Logo/>
//             </div>
//         )
//     }
// }
// export default Results;