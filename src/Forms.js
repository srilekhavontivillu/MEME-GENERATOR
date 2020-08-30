import React from 'react'

class Forms extends React.Component{
    constructor()
    {
        super()
        {
            this.state={
                firstName:"",
                lastName:""
            }
        }
        this.handlechange=this.handlechange.bind(this)
        
    }
     handlechange(event)
     {
         this.setState({
             [event.target.name]:event.target.value
         })
     }
    render()
    {
        return(
            <form>
                <input type='text' name='firstname' placeholder='FIRSTNAME' onChange={this.handlechange}/>
                <br/>
                <input type='text' name='lastname' placeholder='LASTNAME' onChange={this.handlechange}/>
                <h1>{this.state.firstName}{this.state.lastName}</h1>
            </form>
        )
    }
}
export default Forms