import React, {createContext, useState } from "react"

let UserContext = React.createContext()
let UserContextConsumer = UserContext.Consumer

function UserContextProvider(props){
  const [urlNewWindow, setUrlNewWindow] = useState(true);

  const openUrl = (url) => {
    if (typeof url != 'string' || url.length<=0) return;

    if (urlNewWindow){
      window.open(url, '_blank')
    }else{
      window.location.href = url
    }
  }

  return(
    <UserContext.Provider value={{
      openUrl, urlNewWindow, setUrlNewWindow,

    }}
    >{props.children}</UserContext.Provider>
  )
}

export { UserContext, UserContextProvider, UserContextConsumer}