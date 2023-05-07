import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { Formik, Field, Form } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const TicketForm = () => {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('*Requerido').matches(/^[a-zA-Z]{3,}$/, 'El nombre debe tener al menos tres caracteres y no debe contener números'),
    lastName: Yup.string().required('*Requerido').matches(/^[a-zA-Z]{3,}$/, 'El apellido debe tener al menos tres caracteres y no debe contener números'),
    email: Yup.string().email('Correo electrónico inválido').required('*Requerido'),
  });

  const onSubmit = async (values) => {
    try {
      const docRef = await addDoc(collection(db, 'tickets'), values);
      console.log(docRef.id);
      await Swal.fire({
        icon: 'success',
        title: `Gracias por comprar en Shoptech`,
        text: `Su número de orden es: ${docRef.id}`,
      });
      clearCart();
      navigate('/');
    } catch (e) {
      console.error(e);
      await Swal.fire({
        icon: 'error',
        title: 'Error al crear el ticket',
      });
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form>
          <p>Para finalizar la compra deberá completar el siguiente formulario:</p>
          <div>
            <Field
              name="firstName"
              type="text"
              as={TextField}
              label="Nombre"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              style={{ width: '300px' }}
            />
            {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
          </div>
          <div>
            <Field
              name="lastName"
              type="text"
              as={TextField}
              label="Apellido"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              style={{ width: '300px' }}
            />
            {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
          </div>
          <div>
            <Field
              name="email"
              type="email"
              as={TextField}
              label="Correo electrónico"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              style={{ width: '300px' }}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>
          <Button  style={{ marginTop: '30px' }} type="submit" variant="contained" color="success" size="large">
            Finalizar compra!
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TicketForm;

