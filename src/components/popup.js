import React from 'react';

class Popup extends React.Component {  
  render() {  
return (  
<div className='bg-green-600 w-32 h-32'>  
carros
casas
<div className="mx-auto my-2 w-20 p-2 bg-gray-600 rounded-lg"> 
<button onClick={this.props.closePopup}>close me</button>  
</div>  
</div>  
);  
}  
}  

export default Popup;