// class componet useing state
import react, { Fragment } from "react"
import Text from './Text'
import Fun1 from './Fun1'
import Funprops from './Funprops'
class App extends react.Component{
    render(){
        let name="Welcome"
        return(
            <div>
                <center>
                  <h2>{name}</h2>
                  <Text/>
                  <Fun1/>
                  <Funprops/>
                </center>
            </div>
          
        )
    }
}
export default App;