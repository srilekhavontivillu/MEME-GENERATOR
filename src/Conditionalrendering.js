import React from 'react'

class Conditionalrendering extends React.Component{
    constructor()
    {
        super()
        {
            this.state={
                islogged:false
            }

        }
        this.click=this.click.bind(this)
    }
    click()
    {
        this.setState(prevState=>{
            return{
                islogged:!prevState.islogged
            }
        })
    }

    render()
    {
        let buttontext=this.state.islogged?"logout":"login"
        let text=this.state.islogged?"you are logged in":"you are logged out"
        return(
            <div>
                <button onClick={this.click}>{buttontext}</button>
                <h1>{text}</h1>
            </div>
        )
    }
}

export default Conditionalrendering