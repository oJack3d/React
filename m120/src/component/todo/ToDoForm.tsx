import React from 'react'
import { Formik, Form, Field, FieldProps } from 'formik'
import { TextField, TextFieldProps, Button, Typography } from '@material-ui/core'
import * as Yup from 'yup'
import ToDo from '../../model/ToDo'
import SaveIcon from '@material-ui/icons/Save';

interface ToDoFormProps {
    todo: ToDo
    submitText: string
    submitFunction(todo: ToDo): void
    resetAfterSubmit: boolean
}

const ToDoForm: React.FC<ToDoFormProps> = 
    (props) => {
    return (
        <Formik 
            enableReinitialize={true}
            initialValues={ {title: props.todo.title} }
            validationSchema = {todoValidationSchema}
            onSubmit={ (values, {resetForm}) => {
                props.todo.title = values.title
                props.submitFunction(props.todo)
                if (props.resetAfterSubmit) { resetForm() }
        } }
        >
            { ({errors, touched}) => (
                <Form>
                    <Field
                    name="title"
                    component={MaterialUiField}
                    style={{margin:"5px"}}
                    placeholder="Enter a ToDo"
                    label="ToDo"
                    />
                    <div>
                        {
                            errors.title && touched.title
                            ? (<Typography color='secondary'>May not be empty</Typography>)
                            : null
                        }
                    </div>
                    <div>
                    <Button
                        style={{margin:"1px"}}
                        type="submit"
                        variant='contained' 
                        color='primary' 
                        fullWidth
                        startIcon={<SaveIcon />}
                    >
                        {props.submitText}
                    </Button>
                    </div>
                    
                </Form>
                
            ) }
        </Formik>
    )
}

const MaterialUiField: 
    React.FC<FieldProps & TextFieldProps> =
    ({field, form, ...textProps}) => 
    <TextField 
        {...field}
        {...textProps}
        fullWidth
    />

const todoValidationSchema = Yup.object().shape({
    title: Yup.string().required('A ToDo is required'),
})

export default ToDoForm