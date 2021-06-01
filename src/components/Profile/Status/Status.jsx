import React from 'react'

class Status extends React.Component{
    state = {
        selected: false,
        status: this.props.status
    }
    
    onDoubleClick = () =>{
        this.setState({
            selected: true
        })
    }
    onBlur = () =>{
        this.setState({
            selected: false
        })
        this.props.updateStatus(this.state.status)
    }
    onchange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        }) 
    }
    componentDidUpdate(prevProps){
        if (prevProps.status!== this.props.status ){
            this.setState({
                status: this.props.status
            })
        }
    }
    render(){
        return (
            <>
                <div>
                    <span onDoubleClick = {this.onDoubleClick}>status:</span>
                    { !this.state.selected?
                            <span onDoubleClick = {this.onDoubleClick} > {this.props.status} </span>
                        :
                        <div >
                            <input onChange = {this.onchange} onBlur = {this.onBlur} value = {this.state.status} />
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default Status