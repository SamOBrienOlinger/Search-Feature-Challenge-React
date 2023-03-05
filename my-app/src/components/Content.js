import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: '',
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }
    
    handleChange = (event) => {
        
    //     const name = event.target.value()
    //     const filteredPosts = posts.filter(name => {
    //         return name().includes(savedPosts)
    //     }
    // }

    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <form>

                    <div>
                        <label>Search Author:</label>
                            <input htmlFor = "searchInput" id='searchInput' type='search' onChange={(e) => this.handleChange(e)}>
                        
                            </input>

                            <h4>

                            </h4>
                        

                    </div>

                </form>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={savedPosts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content