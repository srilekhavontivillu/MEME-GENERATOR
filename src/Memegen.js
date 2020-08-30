import React from 'react'

class Memegen extends React.Component{
    constructor()
    {
        super()
        
            this.state={
                toptext:"",
                bottomtext:"",
                randomimage:"http://i.imgflip.com/1bij.jpg",
                allMemeImgs:[]
            }
        
        this.handlechange=this.handlechange.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
    }
    componentDidMount()
    {
        fetch("https://api.imgflip.com/get_memes")
        .then(response=>response.json())
        .then(response=>{
            const {memes}=response.data
            this.setState({allMemeImgs:memes})
        })
    }
    handlechange(event)
    {
        const{name,value}=event.target
        this.setState({[name]:value})
    }
    handlesubmit(event)
    {
      event.preventDefault()
      const randnum=Math.floor(Math.random()*this.state.allMemeImgs.length)
      const randmemeimage=this.state.allMemeImgs[randnum].url
      this.setState({randomimage:randmemeimage})
    }
    render()
    {
        return(
            <div> 
                <form className="meme-form" onSubmit={this.handlesubmit}>
            <input 
                type="text"
                name="toptext" 
                placeholder="top text"
                value={this.state.toptext} 
                onChange={this.handlechange}
              />
              <br/>
                <input 
                type="text"
                name="bottomtext" 
                placeholder="bottom text" 
                value={this.state.bottomtext}
                onChange={this.handlechange}
                />
                <br/>
            <button>GENERATE</button>
             </form>
             <div className="meme">
                 <img src={this.state.randomimage} alt=""/>
                 <h2 className="top">{this.state.toptext}</h2>
                <h2 className="bottom">{this.state.bottomtext}</h2>
             </div>
        </div>
        )
    }
}



export default Memegen
