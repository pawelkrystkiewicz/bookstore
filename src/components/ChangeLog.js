import React from 'react';
import { withBaseIcon } from 'react-icons-kit' //base for Icons

import { arrowRight } from 'react-icons-kit/fa/arrowRight'
import {ic_delete} from 'react-icons-kit/md/ic_delete'
import {ic_library_add} from 'react-icons-kit/md/ic_library_add'
import {ic_library_books} from 'react-icons-kit/md/ic_library_books'
import {ic_add_circle} from 'react-icons-kit/md/ic_add_circle'
import {book} from 'react-icons-kit/icomoon/book'
import {css3} from 'react-icons-kit/icomoon/css3'
import {ic_account_circle} from 'react-icons-kit/md/ic_account_circle'
import {ic_build} from 'react-icons-kit/md/ic_build'


const SideIconContainer = withBaseIcon(
    {
         size: 16,
         style: 
         {  }
    })

export const ArrowRight = () => <SideIconContainer icon={arrowRight} />
export const Delete = () => <SideIconContainer icon={ic_delete} />
export const Book = () => <SideIconContainer icon={book} />
export const CSS = () => <SideIconContainer icon={css3} />
export const Add = () => <SideIconContainer icon={ic_library_add} />
export const Library = () => <SideIconContainer icon={ic_library_books} />
export const AddCircle = () => <SideIconContainer icon={ic_add_circle} />
export const Account = () => <SideIconContainer icon={ic_account_circle} />
export const Build = () => <SideIconContainer icon={ic_build} />

export default class ChangeLog extends React.Component {

    render() {
        return (
            <div className="change-log">
            <h2>To do/Change Log</h2>
                <ol>
                    <li>Style <CSS/></li>
                    <li><Add/>New components - LoginForm & BookForm <ArrowRight /> AdminPanel | Data edition doesn't work</li>
                    <li><Add/>LOGOUT button for user in <Build/>AdminPanel <ArrowRight /> firebaseApp.auth().signOut()</li>
                    <li><Add/>add to App.js Footer.js with information about author. Placed and the bottom of the site</li>
                    <li>modify BookView to show <b>book description</b></li>
                    <li><Add/> state <b>genre</b>,</li>
                    <li><Build/>AdminPanel <ArrowRight/> add feature for specifying books genre, (at BookView's  bottom left)</li> 
                    <li><Build/>AdminPanel <ArrowRight/> list all books in fbase</li>
                    <li><Add/> <Delete/> book</li>
                    <li><Add/> button for editing record (reuse BookAdd panel)</li>
                    <li>hide book if OnStock === false</li>
                    <li><Add/> price <ArrowRight/>Inventory</li>
                    <li><Add/> total order price</li>
                    <li><Build/>AdminPanel <ArrowRight/> button to homepage</li>
                </ol>
          </div>
        );
    }


};