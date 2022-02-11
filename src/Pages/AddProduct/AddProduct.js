import React, {useEffect,useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Header from '../../Components/Header/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {getCategoryInitiate,ProductInitiate} from '../../Redux/action';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

const AddProduct = () =>{
    const {category} = useSelector((state)=> state.data);
    let dispatch= useDispatch();
    const [state,setState] = useState({
        product_id:'',
        title:'',
        description:'',
        price:'',
        category:'',
        image:''


    });
    const [error,setError] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getCategoryInitiate());
    },[]);
    const input = styled('input')({
        display: 'none',
      });
      const onHandleSubmit =(e) =>{
        e.preventDefault();
        if(!product_id || !title || !price || !description || !category || !image)
        {
            setError("Please Enter All Input Field");
        }
        else{
            dispatch(ProductInitiate(state));
            navigate("/");
            setError("");
        }
      }
      const onInputHandle =(e) =>{
            const {name, value} = e.target;
            setState({ ...state, [name]: value})

      }
      const {product_id,title,description,price,categorys,image}= state;
    return(
        <>
         <Header />
            <form style={{marginTop: 150, marginLeft: 50, marginRight: 50}} onSubmit={onHandleSubmit}>
            <TextField
             id="standard-password-input"
             label="Product Id"
             type="text"
            autoComplete="off"
            variant="standard"
            name="product_id"
            value={product_id}
            onChange={onInputHandle}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
             id="standard-password-input"
             label="Product Title"
             type="text"
            autoComplete="off"
            variant="standard"
            onChange={onInputHandle}
            name="title"
            value={title}

        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <TextField
             id="standard-password-input"
             label="Product description"
             type="text"
            autoComplete="off"
            variant="standard"
            onChange={onInputHandle}
            name="description"
            value={description}

        /><br/><br />
         <TextField
             id="standard-password-input"
             label="Product Price"
             type="number"
            autoComplete="off"
            variant="standard"
            onChange={onInputHandle}
            name="price"
            value={price}

        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
         <TextField
           id="standard-password-input"
           select
           label="Select"
           variant="standard" name="category" value={categorys} onChange={onInputHandle}  SelectProps={{
            native: true,
          }}> {category && category.map((item) =>( <option key={item.category_id} value={item.category_name}>
            {item.category_name}
          </option>))}</TextField> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
  <input  id="contained-button-file" type="file" name="image"  onChange={onInputHandle} value={image} />
  <br /><br />

            <Button startIcon={<SaveIcon />}
        variant="contained" color="secondary" type="submit" onChange={onInputHandle}>Save </Button>
            </form>
        </>
    )
}
export default AddProduct;