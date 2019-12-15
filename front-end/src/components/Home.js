import React  from 'react'

class Home extends React.Component{
    render(){
        return(
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    <strong>Welcome to my car app</strong>
                    <h3>We have some awesome second hand cars for you to choose from</h3>
                </h1>
            </div>   
        </div>
        )
    }
}


export default Home;