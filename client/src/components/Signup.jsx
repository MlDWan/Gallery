import React, { useContext, useState } from "react";
import firebase from "firebase";
import app from '../firebase/config'
import { FirebaseAuth } from "react-firebaseui";
import { AuthContext } from "./contexts/AuthContext";
import { Redirect } from "react-router-dom";

export default function Login() {
    const { user } = useContext(AuthContext); 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] =useState(false)
    const [error, setError] =useState('')

    const uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false,
      },
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            await app.auth().createUserWithEmailAndPassword(email, password)
            setLoading(false)
            setEmail('')
            setPassword('')
        }
        catch(err){
            setError(err.message)
            setLoading(false)            
        }
    }

    return (
      <div className="mt-5">
        {!!user ? (
          <Redirect to="/" />
        ) : (
          <div className="row">
            <div className="custom-login col-md-6 offset-md-3">
                <div className="card bg-dark text-white">
                    <div className="card-header">
                        <p className="lead">Registration</p>
                    </div>
                    <div className="card-body">
                        {error && <div className="alert alert-danger">{error}</div> }
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"/>
                            </div>
                            <button disabled={loading} className="btn btn-block btn-primary mt-4 btn-lg">{loading ? '...' : 'Sign Up'}</button>
                        </form>
                        <div className="col-md-12">
                            <FirebaseAuth className="row" uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )}
      </div>
    );
  }
