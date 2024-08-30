import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, editData, removeData } from './FormikSlice'

const FormikDesign = () => {
    const dispatch = useDispatch()
    const test = useSelector((state) => state.formikcalc.enter)
    const test1 = useSelector((state) => state.formikcalc.test)
    console.log(test1);
    const handleData = (values,{resetForm}) => {
        dispatch(addData(values))
        resetForm()
    }
    const remove=(i)=>{
       dispatch(removeData(i)) 
    }
    const edit=(i)=>{
        dispatch((editData(i)))
   
    }
    return (
        <div>
            <Formik
                initialValues={test}
                enableReinitialize

                onSubmit={handleData}
            >
                <Form>
                    First Name:-     <Field type="text" name="fname" /> <br /><br />
                    Last Name:-     <Field type="text" name="lname" /><br /><br />
                    City :-         <Field type="text" name="city" /><br /><br />
                    <button type='Submit'>Submit</button> <br /><br />
                </Form>
            </Formik>
            <table border={1} align='center'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                {
                    test1.map((el, i) => (
                        <tr>
                            <td>{el.fname}</td>
                            <td>{el.lname}</td>
                            <td>{el.city}</td>
                            <td><button onClick={()=>remove(i)}>Remove</button></td>
                            <td><button onClick={()=>edit(i)}>Edit</button></td>
                        </tr>
                    ))

                }
            </table>
        </div>
    )
}

export default FormikDesign
