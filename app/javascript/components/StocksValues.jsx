import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { BiErrorCircle } from 'react-icons/bi'; 
import PageWrapper from './common/PageWrapper';

// KB: Just a note fwiw - at work, we try to use the least amount of custom CSS possible. That doesn't mean you need to change anything! 
// Just wanted to point out that in a work environment, that would be the preference. There is a decent amount of custom CSS below - I wonder if it's worth splitting it into another file or something.

const StocksValuesStyle = styled.div`
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
select {
  height: 40px;
  width: 400px;
  border-radius: 5px;
  background-image:
    linear-gradient(45deg, transparent 50%, black 50%),
    linear-gradient(135deg, black 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  background-color: white;
  padding: 5px 60px 5px 15px;
  margin: 15px;    
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;  
  border-style: none;
}
select:focus {
  background-image:
    linear-gradient(45deg, black 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, black 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  outline: 0;
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 black;
}
button, textarea {
  background-color: white;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  margin: 15px;
}
button {
  padding: 5px 20px 5px 20px;
  cursor: pointer;
}
textarea {
  width: 400px;
  height: 100px;
  padding: 5px;
}
button, textarea:focus {
    outline: 0;
}
label {
  width: 150px;
}
.section {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.validation {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.success {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(237, 247, 237);
  color: rgb(30, 70, 32);
  padding: 0px 0px 10px 10px;
  border-radius: 5px;
}
.error {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(97, 26, 21);
  color: rgb(253, 236, 234);
  padding: 0px 0px 10px 10px;
  border-radius: 5px;
}
.close {
  padding-top: 10px;
}
`

function StocksValues() {
  const [stocks, setStocks] = useState([]);
  const [price, setPrice] = useState([]);
  const [volume, setVolume] = useState([]);
  const [stock_id, setStockId] = useState('');
  const [message, setMessage] = useState('');
  const [hasSucceeded, setHasSucceeded] = useState('');

  useEffect(() => {
    fetch('/api/v1/stocks/index')
      .then(response => response.json())
      .then(data => setStocks(data))
      .catch(console.log)
  }, []);
  
//   KB: One thing that could help with repetitive form logic is using a forms library. My company uses Formik (https://formik.org/), and I see in a Google search that it's recommended.
//   I'd suggest looking into it and potentially trying out a refactor with the library (or a similar one). It handles validation, initial values, 

  const handleChangeStockId = (event) => {
    setStockId(event.target.value);
  }

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  }

  const handleChangeVolume = (event) => {
    setVolume(event.target.value);
  }

  /*const handleClick = () => {
    fetch("stocks_values/scrape", {
      method: 'post'
    })
      // A GET is the default method for fetch requests. See here: https://github.github.io/fetch/.
      // The result of the scrape endpoint (the response.json()) is:
      // {
      //   "spider_name": "stock_data",
      //   "status": "completed",
      //   "error": null,
      //   "environment": "development",
      //   "start_time": "2021-03-20T17:47:09.976-04:00",
      //   "stop_time": "2021-03-20T17:47:10.274-04:00",
      //   "running_time": 0.298,
      //   "visits": {
      //       "requests": 1,
      //       "responses": 1
      //   },
      //   "items": {
      //       "sent": 0,
      //       "processed": 0
      //   },
      //   "events": {
      //       "requests_errors": {},
      //       "drop_items_errors": {},
      //       "custom": {}
      //   }
      // }
      // And the result of the scrape is not stock-specific, is it? I'm not sure what you want to display in the return for this page, other than the "Scrape" button.
      // I see the "stockPrice" in a div below to be rendered, but I don't see how this fetch call returns a response for setting that value.
      // You could flash a message or something that says something along the lines of "Scrape successful/failed" and/or redirect to the homepage or something. At least as a first pass?
      .then((response) => response.json())
      .then((data) => console.log(data));
    // With these changes, you can see your result in the console!
  };*/

  const handleClickSave = (event) => {
//     KB: I don't think I'll review this function or its use too thoroughly, as my understanding is that this was just a temporary thing and that integrating an API would replace this parsing of user inputted data.
    event.preventDefault();
    if (stock_id === "" || price.length == 0 || volume.length == 0) {
      setMessage('Empty fields.');
      setHasSucceeded("no");
    } else if (!price.includes("[") || !price.includes("]") || !volume.includes("[") || !volume.includes("]")) {
      setMessage("The data entered should be in an array.");
      setHasSucceeded("no")
    } else {
      const parsedPrice = JSON.parse(price);
      const parsedVolume = JSON.parse(volume);
      const data = [];
      let object;

      for (var i = 0; i < parsedPrice.length; i++) {
        for (var j = 0; j < parsedVolume.length; j++) {
          const price = parsedPrice[i].value;
          const volume = parsedVolume[j].value;
          const date = parsedPrice[i].dateTime.slice(0, 10);
          const initialTime = parsedPrice[i].dateTime.slice(11, 19);
          const initialMinute = parsedPrice[i].dateTime.slice(13, 19);
          const initialHour = parseInt(initialTime);
          const rightHour = (initialHour - 4).toString();
          const time = rightHour + initialMinute;
          const datetime = date + ' ' + time + ":00";
          if (parsedPrice[i].dateTime === parsedVolume[j].dateTime) {
            data.push({stock_id, price, volume, datetime});
          }  
        } 
      };
      for (var i = 0; i < data.length; i++) {
        object = data[i]

        fetch("/api/v1/values/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
        },
          body: JSON.stringify(object)
        })
        .then((response) => response.json())
        .then(data => {data ? [ setMessage("Data successfully saved!"), setHasSucceeded("yes") ] : [ setMessage("There was an error saving your data."), setHasSucceeded("no") ]})
        .catch(console.log)         
      }
      setPrice([]);
      setVolume([]);
    }
  }

  const handleClickClose = () => {
    setHasSucceeded("")
  }

  const handleSubmit = () => {
    //setStocks([]);
    setPrice([]);
    setVolume([]);
  }

  return (
    <PageWrapper>    
      <StocksValuesStyle>
        <h1>Stock Data</h1>
        <div>
          <form>
            <div className="section">
              <label>Stock name</label>
              <select onChange = {handleChangeStockId}>
                <option>Select your stock</option> 
// KB: I think this should be a label, rather than the first option in the dropdown. Here's a good example if that helps: https://reactjs.org/docs/forms.html#the-select-tag 
                { stocks.map(stocks => (
                    /*<select key={stocks.id}>*/
                      <option key={stocks.id} value={stocks.id} name="stock_id" required>{stocks.name}</option>
                    /*</select>*/  
                )) }
              </select>
            </div>
            <div className="section">
              <label>Price</label>
              <textarea
                name="price"
                rows="15"
                cols="50"
                onChange={handleChangePrice} // KB: If you're not going to use a form library, it may be easier/less functions/more visible to define the onChange function in-line, 
// which would look like onChange={e => setPrice(e.target.value)};
                value={price}
              />
            </div>
            <div className="section">
              <label>Volume</label>
              <textarea
                name="volume"
                rows="15"
                cols="50"
                onChange={handleChangeVolume}
                value={volume}
              />
            </div>
            <div className="validation">
              <button onClick={handleClickSave} type="submit">Add data!</button> 
//            KB: I think maybe the submit button is an element that should be outside of the validation div.
              { hasSucceeded === "yes" 
                ? <div className="success">
                    <div className="pr1 close"><IoMdCheckmarkCircleOutline /></div>
                    <div className="close">{message}</div>
                    <div className="pl4 pr0 pointer" onClick={handleClickClose}><RiCloseFill /></div>
                  </div>
                : hasSucceeded === "no" ?
//              KB: If you don't use a form manager, I think it's more conventional to set an `errorMessage` (or similar) state, and then check for the presence of error messages, like they do here: https://www.educative.io/edpresso/how-to-show-an-error-message-in-react
                  <div className="error">
                    <div className="pr1 close"><BiErrorCircle /></div>
                    <div className="close">{message}</div>
                    <div className="pl4 pr0 pointer" onClick={handleClickClose}><RiCloseFill /></div>
                  </div>
                : <p></p> 
//              KB: If you don't need an empty para, you can just return null instead. But I don't think you need this 3-layer conditional rendering.
//                 I think you can do something like: {hasSucceeded && <whatever you wanna render on success goes here>}
//                 And then on the next line: {errorMessage && <whatever you wanna render on error goes here>}
//                 You might wanna make errorMessage or whatever you would name it an object. Or not, depends what you wanna show.
//                 Here's an article that uses ^ approach for reference: https://www.educative.io/edpresso/how-to-show-an-error-message-in-react
              }
            </div>
          </form>  
        </div>
      </StocksValuesStyle>
    </PageWrapper>
  );
}
export default StocksValues;
