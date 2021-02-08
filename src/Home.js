import React, { useState } from 'react';
import './Home.css';
import Posts from './Posts';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './reducer';


function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [textarea, setTextarea] = useState("");
    const [postName, setPostName] = useState("");
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const addPost = () => {
        dispatch({
            type: "ADD_POST",
            payload: {
                postName: postName,
                contents: textarea
            }
        })        
        setModalIsOpen(false);
    }
    
    return (
        <div className="home">
          
            <h1 className="home__header">投稿記事一覧</h1>
            <Button variant="contained" color="primary" className="home__postButton" onClick={()=>setModalIsOpen(true)}>記事を投稿する</Button>
            <Posts posts={posts} />
            <Modal isOpen={modalIsOpen} 
                   onRequestClose={() => setModalIsOpen(false)}
                   overlayClassName={{
                   base: "overlay-base",
                   afterOpen: "overlay-after",
                   beforeClose: "overlay-before"
                   }}
                   className={{
                   base: "content-base",
                   afterOpen: "content-after",
                   beforeClose: "content-before"
                   }}
                   closeTimeoutMS={500}
                   >
                <form>
                <input 
                    type="text" 
                    placeholder="投稿記事名"
                    value={postName}
                    onChange={(e) => setPostName(e.target.value)}
                />
                <textarea
                    value={textarea}
                    onChange={e=>setTextarea(e.target.value)}
                     rows="15"></textarea>
                <Button onClick={addPost} variant="contained" color="primary" className="modal__postButton" >記事を投稿する</Button>
                <button className="modal__closeButton">閉じる</button>
                </form>
            </Modal>
        </div>
    )
}

export default Home;
