import React from "react";
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Form,
    Dropdown
} from 'react-bootstrap';
// import '../adminPanel.scss';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getRoleDetailsAction } from "../../Redux/Action/roleAction";
import Home from "../Home/home";

const LineofBusiness = () =>{
    const { register, handleSubmit , formState: { errors } } = useForm();

    // console.log("getroledata",getroledata)

    const onSubmit = (lobdata) =>{
      console.log("line of business",lobdata)
    }
    return(
        <>
            {/* <Row>
                <Col>
                    <h1 className='page-title'>Role Panel Demo</h1>
                </Col>
            </Row> */}
            <div className='admin-wrapper'>
            <div className="adminContainer">       
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='admin-section'>
                                <div className='admin-header'>
                                    <h2 className='admin-title'>Line of Business Table</h2>
                                </div>
                                <div className='table-responsive'>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>LOB Code</th>
                                                <th>LOB Name</th>
                                                <th>Entity ID</th>
                                                <th>Status </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>sdf</td>
                                                <td>sdfsdf</td>
                                                <td>sdfs</td>
                                                <td>
                                                    <span className='status active'>Active</span>
                                                </td>
                                                <td>
                                                    <Button className='btn-action delete'>
                                                        <AiFillDelete />
                                                    </Button>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td>0012</td>
                                                <td>Allie Grater</td>
                                                <td>#0012</td>
                                                <td>*****</td>
                                                <td>
                                                    <span className='status inactive'>Inactive</span>
                                                </td>
                                                <td>01/03/2022</td>
                                                <td>01/03/2022</td>
                                                <td>
                                                    <Button className='btn-action edit'>
                                                        <AiFillEdit />
                                                    </Button>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </Table>
                                </div>
                                <Col md={12}>
                                        <Form.Group className="table-actions">
                                            <Button type="submit" className='admin-page-btn'>
                                                Add More
                                                <BsPlusLg className='icon' />
                                            </Button>
                                        </Form.Group>
                                    </Col>
                            </div>
                            <div className='admin-section admin-section-page'>
                                <h2 className='admin-title'>Line of Business Form</h2>
                                <Form className="admin-form-ui" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                    <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Entity Id : 1002</Form.Label>
                                            </Form.Group>
                                        </Col>
                                    </div>
                                    <Row>
                                    
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>LOB Code</Form.Label>
                                                <Form.Control type="text" 
                                                {...register("lobCode",{required: true,})} 
                                                placeholder="ex: #0012" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>LOB Name</Form.Label>
                                                <Form.Control type="text" {...register("lobName")} placeholder="ex: lobName" />
                                            </Form.Group>
                                        </Col>
                                        
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Last Op Ind</Form.Label>
                                                <Form.Control type="text" {...register("lastOptionIndex")} placeholder="ex: Last op Ind" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Updated By</Form.Label>
                                                <Form.Control type="text" {...register("updatedBy")} placeholder="ex: Updated By" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Created By</Form.Label>
                                                <Form.Control type="text" {...register("createBy")} placeholder="ex: Created By" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Update Date</Form.Label>
                                                <Form.Control type="date" {...register("updateDate")} placeholder="ex: 21/09/2004" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Created Date</Form.Label>
                                                <Form.Control type="date" {...register("createdDate")} placeholder="ex: 22/11/2004" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Status</Form.Label>
                                                <div className='status-check'>
                                                <Form.Check
                                                     {...register("status")}
                                                    inline
                                                    label="Active"
                                                    value="Active"
                                                    name="status"
                                                    type="radio"
                                                    id='1'
                                                />
                                                <Form.Check
                                                     {...register("status")}
                                                    inline
                                                    label="Inactive"
                                                    value="Inactive"
                                                    name="status"
                                                    type="radio"
                                                    id='2'
                                                />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="form-actions">
                                                <Button type="submit" className='admin-page-btn'>Submit</Button>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        </>
    )
}

export default LineofBusiness;