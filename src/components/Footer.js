import React from 'react';
import { withBaseIcon } from 'react-icons-kit' //base for Icons

import { book } from 'react-icons-kit/icomoon/book'

const SideIconContainer = withBaseIcon(
    {
        size: 16,
        style:
            {}
    })

export const Book = () => <SideIconContainer icon={book} />

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <p>&copy; Pawel Krystkiewicz 2018 <Book /></p>
            </div>
        );
    }


};