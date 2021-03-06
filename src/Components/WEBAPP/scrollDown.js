import React, { Component } from 'react'
import flecha from '../../resources/flecha_rojo.png'

export class ScrollDown extends Component {
    componentDidMount() {
        // console.log(this.props.selector)
    }

    _scrollLeft = () => {
        let restante = document.querySelector(this.props.selector).scrollTop;
        document.querySelector(this.props.selector).scrollTo({
            top: restante + 70,
            left: 0,
            behavior: 'smooth'
        })
    }
    render() {
        return (
            // <div>
            <img onClick={() => this._scrollLeft()} className='position-absolute' alt='MOREN' src={flecha} style={{ width: '2rem', height: '2rem', left: '25%', cursor: 'pointer', bottom: '0%', }}></img>
            // </div>
        )
    }
}

export default ScrollDown