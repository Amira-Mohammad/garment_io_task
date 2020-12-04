import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { colors, sizes } from './constants'
import './App.css';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  let colorName = colors.map(color => {
    return <MenuItem value={color}>{color}</MenuItem>
  })
  const [color, setcolor] = React.useState('');

  const handlecolorChange = (event) => {
    setcolor(event.target.value);
  };

  let [size1, setSize1] = React.useState('');
  let [size2, setSize2] = React.useState('');
  let [size3, setSize3] = React.useState('');


  let sizeItem1 = sizes.map(size1 => {
    return <MenuItem value={size1}>{size1}</MenuItem>
  })
  let sizeItem2 = sizes.map(size2 => {
    return <MenuItem value={size2}>{size2}</MenuItem>
  })
  let sizeItem3 = sizes.map(size3 => {
    return <MenuItem value={size3}>{size3}</MenuItem>
  })
  const handleChange1 = (event) => {
    setSize1(event.target.value);
  };
  const handleChange2 = (event) => {
    setSize2(event.target.value);
  };
  const handleChange3 = (event) => {
    setSize3(event.target.value);
  };
  let myDrawing = () => {
    let firstSize = size1;
    let secondSize = size2;
    let thirdSize = size3;
    let totalResult = firstSize + secondSize + thirdSize;
    return (

      <div className="d-flex  justify-content-around w-100 border-bottom border-dark my-3">
        <div className="w-25">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">color</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-labe"
              id="demo-simple-select-outlined"
              value={color}
              onChange={handlecolorChange}
              label="color"
            >
              {colorName}
            </Select>
          </FormControl>
        </div>
        <div className="align-self-center text-left border-bottom border-dark mx-5 w-25">
          {firstSize}
        </div>
        <div className="align-self-center text-left border-bottom border-dark mx-5 w-25">
          {secondSize}
        </div>
        <div className="align-self-center text-left border-bottom border-dark mx-5 w-25">
          {thirdSize}
        </div>
        <div className="align-self-center greyBackground rounded p-2">
          {totalResult}
        </div>
      </div>

    )
  }

  const [InsertedItems, setInsertedItems] = React.useState(myDrawing);
  // const { register, handleSubmit, errors } = useForm(); // initialize the hook
  let rowArray = [];
  let renderd ;
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Size values", size1, size2, size3);

    rowArray.push({
       firstRow: size1,
       secondRow: size2,
      thirdRow: size3,
     })
    // rowArray = [...rowArray, {
    //   firstRow: size1,
    //   secondRow: size2,
    //   thirdRow: size3,
    // }]

    let totalResult;
     renderd = rowArray.map((renderRow) => {

      return (
        <div className="d-flex  justify-content-around w-100 border-bottom border-dark my-3">
          <div className="w-25">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">color</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-labe"
                id="demo-simple-select-outlined"
                value={color}
                onChange={handlecolorChange} 
                label="color"
              >
                {colorName}
              </Select>
            </FormControl>
          </div>
          <div className="align-self-center text-left border-bottom border-dark mx-5 w-25">
            {renderRow.firstRow}
          </div>
          <div className="align-self-center text-left border-bottom border-dark mx-5 w-25">
            {renderRow.secondRow}
          </div>
          <div className="align-self-center text-left border-bottom border-dark mx-5 w-25">
            {renderRow.thirdRow}
          </div>
          <div className="align-self-center greyBackground rounded p-2">
            {totalResult}
          </div>
        </div>
      )
    })
  };
  return (
    <div className="App d-flex flex-column justify-content-center h-100 px-5">
      <div>
        <form className="d-flex flex-row justify-content-around w-100 border-bottom border-dark my-3"
          onSubmit={submitHandler}>
          <div className="w-25">
          </div>
          <div className="w-25">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label1" >Size</InputLabel>
              <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                value={size1}
                onChange={handleChange1}
              >
                {sizeItem1}
              </Select>
            </FormControl>
          </div>
          <div className="w-25">
            <FormControl className={classes.formControl}>
              <InputLabel id="second" >Size</InputLabel>
              <Select
                labelId="second"
                id="second"
                value={size2}
                onChange={handleChange2}
              >
                {sizeItem2}
              </Select>
            </FormControl>
          </div>
          <div className="w-25">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label3">Size</InputLabel>
              <Select
                labelId="demo-simple-select-label3"
                id="demo-simple-select3"
                value={size3}
                onChange={handleChange3}
              >
                {sizeItem3}
              </Select>
            </FormControl>
          </div>
          <input type="submit" class="btn btn-info align-self-center"  value="add"/>
          {/* <button type="submit" class="btn btn-info align-self-center">add</button> */}
        </form>
      </div>

{renderd}


      <div className="d-flex flex-row justify-content-end w-100">


        <button type="button" class="btn btn-success">save</button>



      </div>



    </div>
  );
}

export default App;
