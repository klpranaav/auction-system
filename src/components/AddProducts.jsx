import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.jsx';
import './AddProducts.css';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Navbar from './Header.jsx';

function AddProducts(){

  const getCurrentDateTime24HoursLater = () => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 24);

    return currentDate;
  };

  const time = getCurrentDateTime24HoursLater();
  const [name, setName]=useState('')
  const [price, setPrice]=useState('')
  const [upemail, setUpEmail]=useState('')
  const [condition, setCondition]=useState('')
  const [description, setDesc]=useState('')
  const [images, setImg]=useState('')
  const [category, setCategory]=useState('')
  const {email} = useParams();
  const status = "Ongoing";

  const formData= new FormData();
  formData.append('name',name)
  formData.append('price',price)
  formData.append('email',upemail)
  formData.append('condition',condition)
  formData.append('category',category)
  formData.append('description',description)
  formData.append('time',time)
  formData.append('status',status)
  formData.append('buyer',email);
  for (let i = 0; i < images.length; i++) {
    formData.append('images', images[i]);
  }
  

  //https://server1-git-main-sivaadithya.vercel.app/
  //https://server1-two.vercel.app/

  async function submit(e){
      e.preventDefault();
      try{
          await axios.post("https://server3-rho.vercel.app/addproduct",formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
          })
          .then(res=>{
              alert("Product Added",res)
          })
          .catch(e=>{
            alert(e,"Error")
            console.log(e)
            console.log(e.response.data)
        })
    }
    catch(e){
        console.log(e)
    } 
  }

    return(
        <>
        
        <Navbar/>
        <div className='container add-products'>
        <Container className='add-products'>
  <div className='form'>
    <h1>Enter Product Details</h1>
    <Form action="/addproduct" method="POST" enctype="multipart/form-data">

      <Row className='mb-1'>
        <Form.Label column xs={12} sm={2}>
          Product Name:
        </Form.Label>
        <Col xs={12} sm={10}>
          <Form.Control type='text' id='name' placeholder='Product Name' onChange={(e) => setName(e.target.value)} required className='inp'/>
        </Col>
      </Row>

      <Row className='mb-4'>
        <Form.Label column xs={12} sm={2}>
          Price:
        </Form.Label>
        <Col xs={12} sm={10}>
          <Form.Control type='number' id='price' placeholder='Price' onChange={(e) => setPrice(e.target.value)} required className='inp'/>
        </Col>
      </Row>

      <Row className='mb-4'>
        <Form.Label column xs={12} sm={2}>
          Email ID:
        </Form.Label>
        <Col xs={12} sm={10}>
          <Form.Control type='email' id='email' placeholder='Email ID' onChange={(e) => setUpEmail(e.target.value)} required className='inp'/>
        </Col>
      </Row>

      <Row className='mb-1'>
        <Form.Label column xs={12} sm={2}>
          Product Condition:
        </Form.Label>
        <Col xs={12} sm={10}>
          <Form.Control as='select' id='condition' onChange={(e) => setCondition(e.target.value)} required className='inp'>
            <option value='' disabled selected>
              Select Item Condition
            </option>
            <option value='used'>Used</option>
            <option value='new'>New</option>
          </Form.Control>
        </Col>
      </Row>

      <Row className='mb-1'>
        <Form.Label column xs={12} sm={2}>
          Product Category:
        </Form.Label>
        <Col xs={12} sm={10}>
          <Form.Control as='select' id='category' onChange={(e) => setCategory(e.target.value)} required className='inp'>
            <option value='' disabled selected>
              Select Item Category
            </option>
            <option value='Electronics'>Electronics</option>
            <option value='Mobile and Accessories'>Mobile and Accessories</option>
            <option value='Jewellery'>Jewellery</option>
            <option value='Antique'>Antique</option>
            <option value='Furniture'>Furniture</option>
            <option value='Computer Parts'>Computer Parts</option>
          </Form.Control>
        </Col>
      </Row>

      <Row className='mb-4'>
        <Form.Label column xs={12} sm={2}>
          Product Description:
        </Form.Label>
        <Col xs={12} sm={10}>
          <Form.Control as='textarea' placeholder='Description' id='description' onChange={(e) => setDesc(e.target.value)} required className='inp'/>
        </Col>
      </Row>

      <Row className='mb-4'>
        <Form.Label column xs={12} sm={2}>
          Product Images
        </Form.Label>
        <Col xs={12} sm={10}>
        <Form.Control type='file' id='images' name='images' accept='.png, .jpg, .jpeg' onChange={(e) => setImg(e.target.files)} required multiple className='inp' />
        </Col>
      </Row>

      <Button type='submit' variant='outline-danger' onClick={submit}>
        Submit
      </Button>
    </Form>
  </div>
</Container>
        </div>
        <Footer/>
        </>
    )
}

export default AddProducts