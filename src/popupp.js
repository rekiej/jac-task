import React, { Component } from 'react';  
import Popup from './components/popup';  


class App extends Component {  

  constructor(props){  
super(props);  
this.state = { showPopup: false };  
}  

  togglePopup() {  
this.setState({  
     showPopup: !this.state.showPopup  
});  
 }  

  render() {  
return (  
<div>  
<h1> Simple Popup Example In React Application </h1>  
<button className="bg-red-600 rounded-lg" onClick={this.togglePopup.bind(this)}>
     Click To Launch Popup<
         /button>  
<div className=" mx-auto">
{this.state.showPopup ?  
<Popup  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
</div>
</div>  

);  
}  
}  

export default App;