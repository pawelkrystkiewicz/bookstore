import React from 'react';
class AdminPanel extends React.Component {
    render() {

        const adminCss={
        padding: '10px'

        }
        return (
            <div className="adminPanel col-xs-4" style={adminCss}>
            <form>
                <div className="form-group">
                <input type="text" placeholder="Book name" id="bookNameInput" name="bookName" className="form-control"/>
                </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book author" id="bookNameInput" name="bookAuthor" className="form-control" />
                    </div>
            </form>
            </div>
                );
                
             }
}

export default AdminPanel;