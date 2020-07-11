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


function HashContextProvider(props){
  const [hashState, setHashState] = useState({})

  function updateHashState(name, value){
    let newHashState = {...hashState, [name]:value};

    if (typeof value !== 'string')
      delete newHashState[name]

    window.location.hash = genHash(newHashState)
  }

  function breakoutState(name){
    const setBreakoutState = (value) => updateHashState(name,value)
    return [hashState[name], setBreakoutState]
  }

  const [hashStatePath, setHashStatePath] = breakoutState('hashPath')
  const [hashStateProj, setHashStateProj] = breakoutState('project')
  const [hashStateSummary, setHashStateSummary] = breakoutState('summary')


  useEffect(()=> {
    window.onhashchange = (e) => {e.preventDefault(); setHashState(parseHash(e.newURL)); }
    setHashState(parseHash(window.location.hash)); // trigger for first time
    console.log('should run once')
  }, []); //empty dependency (since it set up a call back, only execute once)

  return(
    <HashContext.Provider value={{
      hashStatePath, setHashStatePath,
      hashStateProj, setHashStateProj,
      hashStateSummary, setHashStateSummary
    }}
    >{props.children}</HashContext.Provider>
  )
}

export { HashContext, HashContextProvider, HashContextConsumer}

// // function decode
// const hashChange = {

// }

// export default hashChange
// export function onHashChangeMain(){

// }

// export function onHashChangePreview(){

// }

// export function makeHashChangePreview(){

// }