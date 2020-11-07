import React from 'react'
import RequestItem from './RequestItem'


function RequestsTab(props){
  return (
    <div className="col">
       <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {props.requests.map((request,index) => {
        return <RequestItem request={request} key={request.id} index={index} edit={props.edit} />
    })}
  </tbody>
</table>
    </div>
  )
}


export default RequestsTab