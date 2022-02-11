import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {CategoryInitiate} from '../../Redux/action';
import Header from '../../Components/Header/Header';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
const AddCategory =()=>{
    const [state,setState] = useState({
        category_id:'',
        category_name:'',
        category_image:''
    });
    const [error,setError]= useState("");
    let dispatch= useDispatch();
    const navigate = useNavigate();
    const onInputHandle =(e)=>{
        const {name,value} = e.target;
        setState({ ...state, [name]: value});
    };
    const onHandleSubmit =(e) =>{
        e.preventDefault();
        if(!category_id || !category_name || !category_image)
        {
            setError("Please Enter All Input Field");
        }
        else{
            dispatch(CategoryInitiate(state));
            navigate('/');
            setError("");
        }
    }
    const {category_id,category_name, category_image}= state;
    return(
        <>
          <Header />
        <form style={{marginTop: 150, marginLeft: 50, marginRight: 50}} onSubmit={onHandleSubmit} >
            <TextField type="text" name="category_id" value={category_id} onChange={onInputHandle}   label="Category Id" autoComplete="off"  variant="standard" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField type="text" name="category_name" value={category_name} onChange={onInputHandle} label="Category Name" autoComplete="off"  variant="standard" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="file" name="category_image" value={category_image} onChange={onInputHandle} label="Category Image" />
            <br /><br />
            <Button startIcon={<SaveIcon />}
        variant="contained" color="secondary" type="submit" onChange={onInputHandle}>Save </Button>
        </form>
        </>
    )
}
export default AddCategory;