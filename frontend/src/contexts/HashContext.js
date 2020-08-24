import React, {useContext, useEffect, useState} from "react"

// accept the full url, or only the hash string
// parse and decodeURIComponent
function parseHash(url){
  // type check
  if (typeof url != 'string') return {}

  // extract hash string
  const hashStr = url.substr(url.indexOf('#')+1)

  // if more than 2 ? found => invalid format
  const hashSplit = hashStr.split('?')
  if  (hashSplit.length>2) return {}


  //output
  let result = {hashPath: hashSplit[0]}
  if (hashSplit.length===2){
    result = hashSplit[1].split('&').reduce(function (result, item){
      if (item !== ""){
        let parts = item.split('=').map((s) => decodeURIComponent(s))
        result[parts[0]] = parts[1]
      }
      return result
    }, result)
  }

  console.log(result)
  // parse query
  return result
}

function genHash(paras){
  let result = '#'

  if (paras.hashPath){
    result +=  paras.hashPath
  }else{
    result += '/'
  }
  delete paras.hashPath


  if (Object.keys(paras).length > 0){
    result += Object.keys(paras).reduce((acc, key)=>
      acc + encodeURIComponent(key) + '=' + encodeURIComponent(paras[key]) + '&'
    , '?')
    result = result.substring(0, result.length-1)
  }

  return result
}

const HashContext = React.createContext()
const HashContextConsumer = HashContext.Consumer


// workflow:
//   inital load:
//     1. add setHashState to onhashchange event listener
//     2. run setHashState to get inital HashState

//   program change state:
//     1. setHashState... is called
//         -> updateHashState is called
//         -> location.hash is changed
//     2. onhashchange is called
//         -> setHashState is called


function HashContextProvider(props){
  // stateful code (hashStateHistory is the only useState)
  const [hashStateHistory, setHashStatesHistory] = useState([])

  function getHashState(){
    const state = hashStateHistory[hashStateHistory.length-1] || {}
    var returnState = Object.assign({}, state)
    delete returnState._time_ms
    return returnState
  }

  function setHashState(newState){
    newState['_time_ms'] = Date.now()
    setHashStatesHistory(preHistory => [...preHistory, newState])

  }

  // stateless codes

  function updateWindowHash(name, value){
    let newHashState = {...getHashState(), [name]:value};

    if (typeof value !== 'string')
      delete newHashState[name]

    window.location.hash = genHash(newHashState)
  }


  function breakoutState(name){
    const setBreakoutState = (value) => updateWindowHash(name,value)
    return [getHashState()[name], setBreakoutState]
  }

  // page state hash
  const [hashStatePath, setHashStatePath] = breakoutState('hashPath')
  const [hashStateProj, setHashStateProj] = breakoutState('project')
  const [hashStateSummary, setHashStateSummary] = breakoutState('summary')

  // analytics hash
  const [hashStateReferral, setHashStateReferral] = breakoutState('ref')

  // run once on init
  useEffect(()=> {
    window.onhashchange = (e) => {e.preventDefault(); setHashState(parseHash(e.newURL)); }
    setHashState(parseHash(window.location.hash)); // trigger for first time
  }, []); //empty dependency (since it set up a call back, only execute once)

  // helper functions
  function requestFactory(dest, formData){
    // create payload
    console.log('xxxxx', hashStateSummary)
    const payload = JSON.stringify({
      formData,
      hashStateHistory,
    })

    // send xhr and get promise
    return new Promise(function (resolve, reject){

      var xhr = new XMLHttpRequest()
      xhr.open("POST", `${process.env.REACT_APP_BACKEND_BASE_URL}/${dest}`)
      xhr.setRequestHeader("Content-Type", "application/json")


      xhr.onerror = function(){
        reject({
          status: xhr.status,
          response: xhr.response
        })
      }

      xhr.onload = function(){
        if (xhr.status >= 200 && xhr.status < 300){
          resolve(xhr.response)
        }else{
          xhr.onerror()
        }
      }

      xhr.send(payload)


  })
  }

  return(
    <HashContext.Provider value={{
      // current stat getter/setter
      hashStatePath, setHashStatePath,
      hashStateProj, setHashStateProj,
      hashStateSummary, setHashStateSummary,
      hashStateReferral, setHashStateReferral,

      // others
      hashStateHistory,
      requestFactory
    }}
    >{props.children}</HashContext.Provider>
  )
}

export { HashContext, HashContextProvider, HashContextConsumer, parseHash}
