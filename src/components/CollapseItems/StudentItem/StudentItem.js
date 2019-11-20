// import React, { useState } from 'react'
// import { Col, Form } from 'react-bootstrap'
// import { addMark } from '../../../store/actions/subjects.action'
// import Modal from '../../Modal/Modal'
// import styles from './StudentItem.module.css'
// import Collapse from '../../Collapse/Collapse'
// import MarkItem from '../MarkItem/MarkItem'
// import { useFormik } from 'formik'
//
// function StudentItem (props) {
//   const [show, setShow] = useState(false)
//
//   const formik = useFormik({
//     initialValues: {
//       mark: '',
//       coeff: '',
//       exam: ''
//     }
//   })
//
//   let avg = props.marks.reduce((total, current) => total + (current.mark * current.coeff), 0) / props.marks.reduce((total, current) => total + current.coeff, 0)
//   avg = Math.round(avg * 100) / 100
//
//   return (
//     <div className={styles.studentItem}>
//       <Collapse
//         title={props.firstName + ' ' + props.lastName + ' | moyenne : ' + avg}
//         buttonText='Ajouter une note'
//         onClick={() => {
//           setShow(true)
//           // addMark(props.subjectId, props.id, { mark: 11, coeff: 3, exam: 'TD' })
//         }}
//       >
//         {
//           props.marks.map((mark, i) =>
//             <MarkItem
//               mark={mark}
//               key={i}
//             />
//           )
//         }
//       </Collapse>
//
//       <Modal
//         show={show}
//         title={'Ajouter une note pour ' + props.firstName + ' ' + props.lastName}
//         buttonText='Ajouter'
//         disableButton={!(formik.values.mark >= 0 && formik.values.coeff > 0 && formik.values.exam !== '')}
//         onCancel={() => {
//           setShow(false)
//           formik.resetForm()
//         }}
//         onSuccess={() => {
//           addMark(props.subjectId, props.id, {
//             mark: parseInt(formik.values.mark),
//             coeff: parseInt(formik.values.coeff),
//             exam: formik.values.exam
//           })
//           setShow(false)
//           formik.resetForm()
//         }}
//       >
//         <Form>
//           <Form.Row>
//             <Form.Group as={Col} controlId='exam'>
//               <Form.Label>Examen</Form.Label>
//               <Form.Control
//                 type='text'
//                 {...formik.getFieldProps('exam')}
//               />
//             </Form.Group>
//             <Form.Group as={Col} controlId='coeff'>
//               <Form.Label>Coefficient</Form.Label>
//               <Form.Control
//                 type='number'
//                 {...formik.getFieldProps('coeff')}
//               />
//             </Form.Group>
//           </Form.Row>
//           <Form.Group controlId='mark'>
//             <Form.Label>Note</Form.Label>
//             <Form.Control
//               type='number'
//               {...formik.getFieldProps('mark')}
//               autoFocus
//             />
//           </Form.Group>
//         </Form>
//       </Modal>
//     </div>
//   )
// }
//
// export default StudentItem
