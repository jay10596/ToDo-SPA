import React, {Component} from "react";
import './Meme.css'
import Form from "./Form/Form";
import Display from "./Display/Display";

class Meme extends Component {
    constructor() {
        super()

        this.state = {
            loading: true,
            meme: [],
            topLine: '',
            bottomLine: ''
        }

        this.fetchImage = this.fetchImage.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Similar to created() or mounted() in Vue
    componentDidMount() {
        this.fetchImage()
    }

    render() {
        /* Can't use it because for loading we need <p>, and for image we need <img>
            let status = this.state.loading ? 'Loading...' : this.state.meme
        */
        return(
            <div className="right-section">
                <Form data={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

                {this.state.loading ? <p className="loader"></p> : <Display data={this.state} fetchImage={this.fetchImage} />}
            </div>
        )
    }

    fetchImage() {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    loading: false,
                    meme: res.data.memes[Math.floor(Math.random() * res.data.memes.length)].url,
                })
            })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault() // To avoid reloading the page
        this.fetchImage()
    }
}

export default Meme