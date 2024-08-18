import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log("wsdf  query thrying to hangele submit for query...", query);
        this.props.history.push('/results');
        
    //    this.props.onSubmit(query);
    }

    renderInput(field) {
    //  return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input} />
        return <input type="text" placeholder=" Search DailySmarty" {...field.input}/>
}

    render() {

        const { handleSubmit } = this.props;

        return (
            // <form className={`search-bar search-bar__${this.props.page}`} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            //     <div className="search-bar__wrapper">
            //         <Field name="query" component={this.renderInput}/>
            //         {/* <p>Press return to search</p> */}
            //     </div>
            // </form>


            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput}/>
            </form>




        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar; 