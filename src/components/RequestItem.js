import React, { useContext } from "react";
import Context from '../context'

function RequestItem({ request, index, edit }) {

  const { removeRequest } = useContext(Context)

  return (
    <tr>
      <th scope="row">1</th>
      <td>{index}</td>
      <td>{request.company}</td>
      <td>{request.fio}</td>
      <td>{request.tel}</td>
      <td>
        <button className="btn btn-primary" onClick={()=> edit(request)}>edit</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => removeRequest(request.id)}>delete</button>
      </td>
    </tr>
  );
}

export default RequestItem;
