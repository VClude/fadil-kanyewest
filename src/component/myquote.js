import React, { Component } from 'react'
import {connect} from 'react-redux'
import {insertMyFav} from '../store/actions/QuoteAction'
 class MyQuote extends Component {
    constructor() {
        super();
        this.state = { value: '' };
      }
      handleChange = (e) => {
        this.setState({ value: e.target.value });
      };
    componentDidMount(){
        this.props.insertMyFav()


    }
    
    
    render() {
        const myfav = this.props.data.myfav

        return (
        <section className="section-2">
            <hr/>
            <h2>My Quotes</h2>
            
            <input type="text"
            value={this.state.value}
            onChange={this.handleChange}/>
            <button onClick={() => this.props.insertMyFav(this.state.value)}>Submit</button>

            <ol>
            {myfav.map(u => 
                     <React.Fragment>
                         <h6 >{u}</h6> 
                     </React.Fragment>
                )}
            </ol>
        </section>
    
        )
    }
}

const mapStateToProps  = (state) => ({data:state.data})

export default connect(mapStateToProps, {insertMyFav})(MyQuote)