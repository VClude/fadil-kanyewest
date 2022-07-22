import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getQuote, insertFav} from '../store/actions/QuoteAction'
 class quote extends Component {
    componentDidMount(){
        this.props.getQuote()
        this.props.insertFav()

    }
    
    render() {
        const quote = this.props.data.kanyequote.quote
        const fav = this.props.data.fav

        
        return (
            <section className='section-1'>
            <img
            className='Kanye-logo'
            alt="kanyelogo"
            src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg" />
            <h1>Kanye-West Quote</h1>
            <h3>{quote}</h3>
            <button onClick={() => this.props.getQuote()}>Get Quote</button>
            <button onClick={() => this.props.insertFav(quote)}>Add Favorite</button>

            <ol>
            {fav.map(u => 
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

export default connect(mapStateToProps, {getQuote, insertFav})(quote)