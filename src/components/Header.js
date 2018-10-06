import React from 'react';
import {Link} from 'react-router-dom';
import {ic_build} from 'react-icons-kit/md/ic_build'
import {withBaseIcon} from 'react-icons-kit' //base for Icons

const SideIconContainer = withBaseIcon(
    {
        size: 16,
        style:
            {}
    })
export const Build = () => <SideIconContainer icon={ic_build} />

class Header extends React.Component{
constructor() {
            super();
            this.state = {
                bookstoreName : "Black Books",
                clicked : true,
                textColor : "white",
                        }
                    }
handleClick=()=>{
if (this.state.clicked) {
        this.setState({
        bookstoreName: "Black Books",
        textColor: "white",
      })
}
else
{
    this.setState(
    {
    bookstoreName: "White Books",
    textColor: "black",
    backgroundColor: "white"
    })
}

this.setState({ clicked: !this.state.clicked })
}

   render(){
       let headerCss={
           color: this.state.textColor,
                     }
       return (
       <div className="row header col-sm-3">
               <h1><center>Bookstore</center></h1>
                <div className="admin-button">
               <Link to="admin"><button className="btn btn-info goToAdmin"><Build/></button></Link>
                </div>
       </div>
       );
    }
}

export default Header;
