import React from 'react';
import './Introduction.css';
import Nav from '../../Components/Nav'
// import React, { Component } from 'react';
//import './Home.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
// 10/13 TRY: commented out original Introduction page components. 
// feel free to revert back if it makes more sense

// function Introduction() {
//   return (
//     <div> 
//       <Nav/>
//       <h1>Introduction Page</h1>
//       <b1 className = "introduction-part">
//         Add/Edit Your Choice Below:
//       </b1>  
//     </div>
    
//   );
// }

// export default Introduction;


const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const App = () => {
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );

  const onChange = event => setValue(event.target.value);

  return (
    <div> 
       <Nav/>
       <h1>Introduction Page</h1>
       <b1 className = "introduction-part">
         
          Add/Edit Your Introduction Below:
       </b1>  

       <form>
              <textarea 
              // rows = '15' 
              // cols = '75' 
              className="custom-textbox-size"
              value={value} 
              type="text" 
              onChange={onChange} 
              size="custom-textbox-size" />
              {/* <input type='submit' value = 'submit'/> */}
          </form>

          <div class="Introduction-submit-button">   
          {/* <div> */}
            <Link to = "/player-responses">
              <Button
              size = "custom-submit-button"
              variant="outline-secondary"
              value = "Submit"
              >
                Submit
              </Button>{' '}
            </Link>
          </div>


       {/* <input 
       className="TRY-type"
       value={value} 
       type="text" 
       onChange={onChange}
       size = "element.value.length + 1"
      //  size="TRY-custom-size" */}
       {/* /> */}
       {/* <input value={value} type="text" onChange={onChange}/> */}
     </div>
    
  );
};
export default App;
