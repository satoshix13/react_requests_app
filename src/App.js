import React from 'react'
import FormRequest from './components/Form'
import RequestsTab from './components/RequestsTab'
import Context from './context'

function App() {
const [requests, setRequests] = React.useState([{
  id:11,
  company:"good",
  tel:"3333",
  fio:"boris"
},{
  id:44,
  company:"tesla",
  tel:"444",
  fio:"vasia"
}])
  

  function addRequest(request){
    // request["id"] = Date.now()
    console.log(request)
    setRequests(
      requests.concat([request])
    )
  }


  function editRequest(request){
    console.log(request)
    // setRequests(
    //   requests.map(request => {
    //     if(request.id === id){
    //       request.company = "borabora"
    //     }
    //     return request
    //   })
    // )
  }


  function removeRequest(id){
    setRequests(
      requests.filter(request => request.id !== id)
    )
  }

 

  return (
    <Context.Provider value={{ removeRequest }}>
    <div className="container mt-5">
      <div className="row">
        <FormRequest onCreate={addRequest} />
        <RequestsTab requests={requests} edit={editRequest} />
      </div>
    </div>
    </Context.Provider>
  );
}

export default App;
