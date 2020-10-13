import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class Error {
    email?: string
}
export default function TestFormMilk() {
    return (

        <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ email: '', password: '' }} // đây là giá trị mặc định ban đầu
          validate={values => {

            //sau khi nhấn submit thì nó sẽ vào đây kiểm tra
            const errors: any = {}; // cái này nó sẽ găng eror vào khi gặp lỗi
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
            //sau khi check xong thì nó sẽ trả về lỗi dưới dạng đôi tượng error
          }}

          onSubmit={(values, { setSubmitting }) => {
            //cái này nó sẽ chạy sau khi validate đéo trả về gì
              // setSubmitting(false);
              console.log(setSubmitting);
              alert(JSON.stringify(values,  null, 1 ));
              //null là cái đéo gì ..đêch biết
              // số 1 kia là số dòng hiển thị , khi mà đeo có thì nó thành 1 dòng
          }}
        >


            {({values,errors,touched,handleBlur,handleChange,handleSubmit,isSubmitting,
            //tức là 3 thằng handle đều giống nhau ... mà thằng khỉ nào đưa vô 3 cái làm mẹ gì.. làm t tìm hiểu chết mịa luôn
            //touch sẽ trả về true false nhưng đéo hiểu sao nó ăn cứ trả về true dù trường hợp nào
            /* and other goodies */}) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                // onBlur={handleBlur}
                // onBlur = {()=>console.log(handleChange.toString())}
                onFocus = {()=> console.log("thằng thứ nhât đang focus")}
                value={values.email}
                // Blur là khi rời khỏi input đó
                // focus là khi ở trong input đó
              />
              <br></br>
              <label style = {{color : "red"}}>{ errors.email}</label>
              <br></br>
              <label style = {{color : "red"}}>{JSON.stringify(touched)}</label>
              <br></br>
              
              <br></br>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <br></br>
              {errors.password && touched.password && errors.password}
              
              <br></br>
              <br></br>
              <button type="submit">
                Submit
              </button>
            </form>
          )}



        </Formik>
      </div>


    )
}
