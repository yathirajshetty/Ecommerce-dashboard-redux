import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import {useDispatch,useSelector} from 'react-redux';
import {getProductInitiate} from '../../Redux/action';
import TableRow from '@mui/material/TableRow';
import Header from '../../Components/Header/Header';

const ViewProduct =()=>{
    const {products} = useSelector(state => state.data);
    let dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getProductInitiate());
    });
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    return(
        <>
        <Header />
        <h1 style={{paddingTop:100, color:"orange"}}>View Products</h1>
         <Paper  style={{marginTop: 40, marginLeft: 100, marginRight: 50}}>
        
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                 Id
                </TableCell>
                <TableCell>
                 Title
                </TableCell>
                <TableCell align="center">
                 Description
                </TableCell>
                <TableCell >
                 Price
                </TableCell>
                <TableCell>
                 Category
                </TableCell>
                <TableCell>
                 Image
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              { products && products.map((product,index) =>(

             
                  <TableRow hover role="checkbox"  key={index} >
                        <TableCell >
                         {index +1}
                        </TableCell>
                        <TableCell >
                         {product.title}
                        </TableCell>
                        <TableCell >
                         {product.description}
                        </TableCell>
                        <TableCell >
                         {product.price}
                        </TableCell>
                        <TableCell >
                         {product.category}
                        </TableCell>
                        <TableCell >
                         <img src={product.image} width="150" height="80" />
                        </TableCell>
                    
                  </TableRow>
               ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
        </>
    )

}
export default ViewProduct;