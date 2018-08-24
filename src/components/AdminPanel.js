import React from 'react';
class AdminPanel extends React.Component {
constructor(){
super();
this.state={
book: {
    name: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    description: "One Ring to rule them All...",
}

}
};

changeName = function(){


}


    render() {

        const adminCss={
        padding: '10px'
        }

        return (
            <div className="adminPanel col-xs-4" style={adminCss}>
            <form>
                <div className="form-group">
                <input type="text" placeholder="Book name" id="name" name="name" className="form-control" value={this.state.book.name}/>
                </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book author" id="author" name="author" className="form-control" value={this.state.book.author}/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Book description" id="description" name="description" className="form-control" value={this.state.book.description}/>
                     </div>
                    <div className="form-group">
                        <input type="checkbox" id="onStock" name="onStock" className="form-check-input" />
                        <label htmlFor="bookOnStock" className="form-check-lable">Available</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book image" id="bookImageInput" name="bookImage" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>
                );
                
             }
}

export default AdminPanel;