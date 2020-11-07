import React, { useState } from 'react'


// import { useFormik } from 'formik'


// let initialValues = {
//    company:"",
//    fio:"",
//    tel:"",
//    comment:"",
//    date:"",
//    time:""
// }

// const onSubmit = (values, onSubmitProps) => {
//    // setRequest(values);
//    // console.log(request)
//    // onCreate(values)
//    console.log(onSubmitProps)
   
// }
 

function FormRequest(props){

 const [company, setCompany] = useState()
 const [fio, setFio] = useState()
 

 function handleSubmit(e) {
   e.preventDefault()
   // props.setRequests(prev => prev.concat({company, fio, id: Date.now()}))
   setCompany('')
   setFio('')
   props.onCreate({company, fio, id: Date.now()})
 }

 
  return (
    <div id="form" className="col">
      <h1 className="title mb-3">Создать новую заявку</h1>
        <form onSubmit={handleSubmit}>
         <div className="form-group">
            <label htmlFor="formGroupExampleInput">Фирма клиента</label>
            <input value={company} type="text" onChange={e => setCompany(e.target.value) } name="company" className="form-control" id="formGroupExampleInput" placeholder="ООО Вымпел"/>
         </div>
         <div className="form-group">
            <label htmlFor="formGroupExampleInput">ФИО перевозчика</label>
            <input value={fio} type="text" onChange={e => setFio(e.target.value )} name="fio" className="form-control" id="formGroupExampleInput" placeholder="Борис Борисович Борисов"/>
         </div>
         {/* <div className="form-group">
            <label htmlFor="formGroupExampleInput">Телефон</label>
            <input type="number" name="tel" className="form-control" id="formGroupExampleInput" placeholder="7838884738" onChange={handleChange} value={values.name}/>
         </div>
         <div className="form-group">
            <label htmlFor="formGroupExampleInput">Комментарии</label>
            <input type="text" name="comment" className="form-control" id="formGroupExampleInput" placeholder="Коменты" onChange={handleChange} value={values.name}/>
         </div>
         <div className="form-group">
            <label htmlFor="formGroupExampleInput">Дата получения</label>
            <input type="text" name="date" className="form-control" id="formGroupExampleInput" placeholder="24/09/21" onChange={handleChange} value={values.name} />
         </div>
         <div className="form-group">
            <label htmlFor="formGroupExampleInput">Время получения</label>
            <input type="text" name="time" className="form-control" id="formGroupExampleInput" placeholder="21:30" onChange={handleChange} value={values.name}/>
         </div> */}
         <button  type="submit" className="btn btn-primary mb-3 mt-3">Отправить</button>
         
        </form>
        
    </div>
  )
}


export default FormRequest


