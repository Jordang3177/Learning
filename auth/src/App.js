import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA16L-zAHEFez-rc2yTminSBqP0fWj-WMA",
            authDomain: "auth-20dbe.firebaseapp.com",
            databaseURL: "https://auth-20dbe.firebaseio.com",
            projectId: "auth-20dbe",
            storageBucket: "auth-20dbe.appspot.com",
            messagingSenderId: "875828128084",
            appId: "1:875828128084:web:7a51389d36474bd5"
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;