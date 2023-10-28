// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Header from '../header/Header';
// import "./table.scss"

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Iron Man', 159, 6.0, 24, 4.0),
//   createData('Spider Man', 237, 9.0, 37, 4.3),
//   createData('Barbie', 262, 16.0, 24, 6.0),
//   createData('Super Women', 305, 3.7, 67, 4.3),
//   createData('Dragon Ball', 356, 16.0, 49, 3.9),
// ];

// export default function DenseTable() {
//   return (
//     <>
//     <Header/>
//     <div className='container mt-4'>
// <h3>Latest Films</h3>
//     <TableContainer component={Paper} className=' ' style={{  backgroundColor: 'transparent', borderRadius:'20px', boxShadow:'#515050 0px 0px 13px 3px', padding:'8px' }}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className=''>
//         <TableHead style={{borderBottom:'2px solid black'}}>
//           <TableRow >
//             <TableCell>Movies</TableCell>
//             <TableCell align="right">Overview</TableCell>
//             <TableCell align="right">Details</TableCell>
//             <TableCell align="right">Rating</TableCell>
//             <TableCell align="right">Watched</TableCell>
//             <TableCell align="right"></TableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//               <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//               <TableCell component="th" scope="row" style={{borderBottom:'2px solid gray', padding:'10px', fontWeight:'600'}}>
//                 {row.name}
//               </TableCell>
//               <TableCell align="right" style={{borderBottom:'2px solid gray'}}>{row.calories}</TableCell>
//               <TableCell align="right" style={{borderBottom:'2px solid gray'}}>{row.fat}</TableCell>
//               <TableCell align="right" style={{borderBottom:'2px solid gray'}}>{row.carbs}</TableCell>
//               <TableCell align="right" style={{borderBottom:'2px solid gray'}}>{row.protein}</TableCell>
//               <TableCell align="right" style={{borderBottom:'2px solid gray'}}>
//               <i class="fa-solid fa-pen-to-square"></i>
//               </TableCell>

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//           </div>
          
//     </>

//   );
// }