import React from 'react';
class Comp2 extends React.Component{
    render(){
        return(
            <div>
            <p>Name:{this.props.stud.name}</p>
            <p>Age:{this.props.stud.age}</p>
            <p>Course:{this.props.stud.roll}</p>
            <hr />
        </div>
        );
    }
}
export default Comp2;