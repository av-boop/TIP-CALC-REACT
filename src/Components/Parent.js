import React,{useState} from 'react'
import Heading from './Heading'
import Field from './Field'
import Button from './Button'
import Result from './Result'

function Parent() {

    const[values,setValues] = useState({

        billAmt:0,
        serviceRating:"",
        totalPerson:0,
        result:0.0

    })

    const setBillAmt = (e) => {

        setValues({

            ...values,
            billAmt:e.target.value
        })
    }
  

    const setServiceRating = (e) => {

        setValues({

            ...values,
            serviceRating:e.target.value
        })
    }

    const setPerson = (e) => {

        setValues({

            ...values,
            totalPerson:e.target.value
        })
    }

    const calculateBill = () => {

        let totalAmt = values.billAmt;
        let persons=values.totalPerson;
        let serviceRate = values.serviceRating;

        if(!totalAmt || !persons || !serviceRate)
        {
            
            alert("Please enter all values")
    
        }

        else{
        let eachAmount = ((totalAmt*serviceRate)/persons).toFixed(2);

        setValues({

            ...values,
            result:eachAmount
        })
    }
    }

    const resetFunc = () => {

        setValues({

            ...values,
            billAmt:0,
            serviceRating:"",
            totalPerson:0,
            result:0.0

        })
    }

    
  
  
    return (
   
    <div className='wrapper'>
       <Heading 
       headText="TIP CALCULATOR" 
       headClass="headingDiv"
       />
       <Field 
       inputText="How Much Is Your Bill"
       inputEle = {<input type='number' className='inputBox' value={values.billAmt} onChange={setBillAmt}/>}
       />

       <Field 
       inputText="How Was The Service"
       inputEle = {<select type='' className='inputBox' value={values.serviceRating} onChange={setServiceRating}>

        
        <option>Choose option</option>
        <option value={0.3}>30% - outstanding</option>
        <option value={0.2}>20% - very good</option>
        <option value={0.15}>15% - It was ok</option>
        <option value={0.1}>10% - Bad</option>
        <option value={0.05}>05% - Terrible</option>

       </select>}
       />

       <Field 
       inputText="Number of Persons Sharing The Bill"
       inputEle = {<input type='number' className='inputBox' value={values.totalPerson} onChange={setPerson }/>}
       />

       <Button 
        btnText="Calculate"
        btnClass="calcBtn"
        calculateBill={ calculateBill}
       />

       <Result eachAmt={values.result}/>

       <Button 
        btnText="Reset"
        btnClass="resetBtn"
        calculateBill={resetFunc}

       />



       

       
    </div>
  )
}

export default Parent