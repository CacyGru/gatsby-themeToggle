const React = require("react")
const { default: GlobalContextProvider } = require("./src/context/GlobalContextProvider")


exports.wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
 {element}
    </GlobalContextProvider>
     
   
  )
}