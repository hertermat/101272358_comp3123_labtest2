import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';


const apiKey = '76cf6d18ce2f53956862bf5a138aa55f'
const finalAPI= `http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}`

function App() {
  
  const [weather, setWeather] = useState({});
  console.log(weather)

  useEffect(() => {
    fetch(finalAPI)
      .then((res) => res.json())
      .then(result => setWeather(result));
  }, [finalAPI]);

  
  

  const todaysDate = (today) =>{
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September',
    'October','November','December'];

    let day = days[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    
    return `${day} ${month} ${date} , ${year}`

  }
 
 
  {
    return (
      <div className="App rain">
        <main>
          <div></div>
          <div className='location'>{weather.name},{weather.sys.country} </div>
          <div className='date'>{todaysDate(new Date())}</div>
          <div className='temp'>{weather.main.temp} °F</div>
          <div>{weather.weather[0].main}</div>
        </main>
        
      </div>
    );
  }

  
}

export default App;
