import React, { createContext, useContext, useState, useEffect } from "react"
import firebase from "./Firebase"

const connect = () => {
  firebase
    .auth()
    .signInAnonymously()
    .catch(error => {
      console.log("Error with anonymous connexion", error.code)
      console.log(error.message)
    })
}

export const UserContext = createContext({
  user: null,
})

export const useSession = () => {
  const { user } = useContext(UserContext)
  return { user }
}

export const useUser = () => {
  const auth = useAuth()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(auth.user)

  useEffect(() => {
    if (!loading) {
      return () => {}
    }
    if (auth.loading) {
      return () => {}
    }

    const userDoc = firebase.firestore().collection("user").doc(auth.user.uid)
    userDoc
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("RECEIVED")
          setUser({ ...doc.data(), ...auth.user })
          setLoading(false)
          console.log("LOADED USER")
        } else {
          console.log("IT NOT EXISTS")
          console.log(auth.user.uid)
          setLoading(false)
          setUser({ ...auth.user })
        }
      })
      .catch(err => setError(err))

    return () => {}
  }, [auth])

  return {
    error,
    loading,
    user,
  }
}

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser
    if (!user) {
      connect()
    }
    return {
      loading: !user,
      user,
    }
  })

  const onChange = user => {
    if (user) {
      setState({ loading: false, user })
    } else {
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
    return () => unsubscribe()
  }, [])

  return state
}

export const UserProvider = props => {
  const { loading, user } = useUser()

  if (loading) {
    return <div>Chargement...</div>
  }

  const { children } = props
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export const withUser = Component => props => (
  <UserContext.Consumer>
    {user => <Component {...props} user={user} />}
  </UserContext.Consumer>
)