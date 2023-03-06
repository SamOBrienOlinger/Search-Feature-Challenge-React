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
            posts: [],
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

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        
        this.setState({
            posts: filteredPosts
        })
    }
    
    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchinput'>Search</label>
                        <input 
                        type='search' 
                        id='searchinput' 
                        placeholder='By Author'
                        onChange={(e) => this.handleChange(e)}
                        />
                        <h4>posts found {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content


// import React, { Component } from "react";
// import css from "./css/Content.module.css";
// import {savedPosts} from "../posts.json";
// import PostItem from "./PostItem";
// import Loader from "./Loader";

// export class Content extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLoaded: false,
//             posts : []
//         }
//     }

//     componentDidMount() {
//         setTimeout(()=>{
//             this.setState({
//                 isLoaded: true,
//                 posts: savedPosts
//             })
//         }, 2000)
//     }
    
//     // handleChange = (event) => {
        
//     //     // const name = event.target.value()
//     //     const filteredPosts = posts.filter(name => {
//     //         return name().includes(savedPosts)
//     //     }
//     //     this.setState({
//     //         posts: [],
//     //     })
//     // }

//     handleChange = (event) => {
//         const inputText = event.target.value.toLowerCase()
//         console.log(inputText)
//         const filteredPosts = savedPosts.filter(post => {
//             return post.toLowerCase().includes(inputText)
//         })
//         this.setState({
//             posts : filteredPosts

//         })
//     }

//     render() {
//         return (
//             <div className={css.Content}>
                
//                 <div className={css.TitleBar}>
//                     <h1>My Photos</h1>
//                 </div>

//                 <form >

//                     <div>
//                         <label>Search Author:</label>
//                             <input htmlFor = "searchInput" id='searchInput' type='search' onChange={(e) => this.handleChange(e)}>
                        
//                             </input>

//                             <h4>posts found {this.state.posts.length}</h4>
                        

//                     </div>
                    
                    

//                 </form>

//                 <div className={css.SearchResults}>
//                     {
//                         this.state.isLoaded ?
//                         <PostItem savedPosts= {this.state.posts} />
//                         : <Loader />
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default Content