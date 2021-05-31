import React, { useEffect } from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatsView from "./ChatsView";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <h2>Click on your profile pic (top left) to logout</h2>
            <img
              className='app__logo'
              src='https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/06/Snapchat_logo-1024x538.jpg'
              alt=''
            />
            <div className='app_body'>
              <div className='app__bodyBackground'>
                <Switch>
                  <Route exact path='/chats/view'>
                    <ChatsView />
                  </Route>
                  <Route exact path='/chats'>
                    <Chats />
                  </Route>
                  <Route exact path='/preview'>
                    <Preview />
                  </Route>
                  <Route exact path='/'>
                    <WebcamCapture />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
