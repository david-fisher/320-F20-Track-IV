// import React from 'react';
// //import '../Components/Components.css'
// import Nav from '../../Components/Nav'
// import {Link} from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Modal from '@material-ui/core/Modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const Conversations = () => {

//   const useStyles = makeStyles((theme) => ({
//     root: {
//         margin: theme.spacing(1),
//         marginTop: theme.spacing(4),
//         marginLeft: theme.spacing(4),
//         width: '100ch',
//     },
//     paper: {
//       position: 'absolute',
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
    
//   }));
  
//     const classes = useStyles();
  
//     // ----- modal -----
//     const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   // const body = (
//   //   <div style={modalStyle} className={classes.paper}>
//   //     <h2 id="simple-modal-title">Text in a modal</h2>
//   //     <p id="simple-modal-description">
//   //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//   //     </p>
//   //     <Modal />
//   //   </div>
//   // );

//   const editStakeholder = (
//     <div style={modalStyle} className={classes.paper}>
//       <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="modal-textfield" 
//       label="John Doe" 
//       placeholder="Edit Stakeholder Conversation"
//       variant="outlined" 
//       />
      
//     </form>
//       <Modal />
//       </div> 
//   );
//   const addStakeholder = (
//     <div style={modalStyle} className={classes.paper}>
//       <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="modal-textfield" 
//       label="Add Stakeholder" 
//       placeholder="Input Stakeholder Name"
//       variant="outlined" 
//       />
      
//     </form>
//       <Modal />
//       </div> 
//   );
  

//     return (
      
//       <div> 
//          <Nav/>
//          <form className={classes.root} noValidate autoComplete="off">
//          <h1>  Conversations </h1>
//            </form>
           
//            <div>
//             <button type="button" onClick={handleOpen}>
//               Add Stakeholder
//             </button>
//             <Modal
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="simple-modal-title"
//               aria-describedby="simple-modal-description"
//             >
//               {addStakeholder}
//             </Modal>
//           </div>

//           <div>
//             <button type="button" onClick={handleOpen}>
//               John Doe
//             </button>
//             <Modal
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="simple-modal-title"
//               aria-describedby="simple-modal-description"
//             >
//               {editStakeholder}
//             </Modal>
//           </div>

//             <div className={classes.root}>   
//             <div>
//             <Button  
//             component={ Link } to="/matrix"
//             variant="contained" 
//             color="primary" 
//             href="#contained-buttons"
//             size='medium'
//             alignItems='right'
//             style={{ 
//               //marginTop: 10,
//               //marginRight: 100,
//               marginRight: 20
//               //marginBottom: 100
//             }}
            
//             >
//             Conversation Matrix
//           </Button>
//           </div>
//             </div>
       
//        </div>
      
//     );
//   };
//   export default Conversations;


import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import Nav from '../../Components/Nav'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Suneditor, {buttonList}from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    //display: "inline",
    backgroundColor: grey[400],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function StakeholderCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  
  const handleEdit = () => {
    console.log("I am here");
    setIsEditable(!isEditable);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
        <Nav />
        
        <div>
          <h1>Conversations Page</h1>
        </div>
{/* --------------------------------- begin Card option 1 ------------------------------------------ */}
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="this card has issues with value"
        subheader={
        //   <TextField
        //   id="stakeholderName"
        //   variant="outlined"
        //   label="Stakeholder Name"
        //   //disabled={!isEditable}
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
        //   onBlur={() => setIsEditable(false)}
        // />


            <SunEditor name="my-editor" 
            //contents={this.state.value} 
            // onChange={this.handleEdit} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            setOptions = {{
            // height: 50,
            // width: '10%',
            //maxWidth: '1000px',
            buttonList: buttonList.complex,
            placeholder: "Add stakeholder name here"

          }}/>
        }
        
        // title="John Doe"
        // subheader="Work Position"
        
      />
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <SunEditor name="my-editor" 
            //contents={this.state.value} 
            // onChange={this.handleEdit} 
            onChange={(e) => setName(e.target.value)}
            setOptions = {{
            // height: 50,
            // width: '10%',
            //maxWidth: '1000px',
            buttonList: buttonList.complex,
            placeholder: "Add stakeholder bio here"

          }}/>
        {/* <form className={classes.root} >
         <TextField
            id="stakeholderBio"
            variant="outlined"
            label="Stakeholder Bio"
            //disabled={!isEditable}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            onBlur={() => setIsEditable(false)}
            multiline
          rows={5}
          fullWidth
        />
        </form> */}
        </CardContent>
      </Collapse>
    </Card>
    {/* --------------------------------- end Card option 1 ------------------------------------------ */}
    {/* --------------------------------- begin Card option 2 ------------------------------------------ */}
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="this card does not use SunEditor"
        subheader={
          <TextField
          id="stakeholderName"
          variant="outlined"
          label="Stakeholder Name"
          //disabled={!isEditable}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setIsEditable(false)}
        />


          //   <SunEditor name="my-editor" 
          //   //contents={this.state.value} 
          //   // onChange={this.handleEdit} 
          //   onChange={(e) => setName(e.target.value)}
          //   setOptions = {{
          //   // height: 50,
          //   // width: '10%',
          //   //maxWidth: '1000px',
          //   buttonList: buttonList.complex,
          //   placeholder: "Add stakeholder name here"

          // }}/>
        }
        
        // title="John Doe"
        // subheader="Work Position"
        
      />
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {/* <SunEditor name="my-editor" 
            //contents={this.state.value} 
            // onChange={this.handleEdit} 
            onChange={(e) => setName(e.target.value)}
            setOptions = {{
            // height: 50,
            // width: '10%',
            //maxWidth: '1000px',
            buttonList: buttonList.complex,
            placeholder: "Add stakeholder bio here"

          }}/> */}
        <form className={classes.root} >
         <TextField
            id="stakeholderBio"
            variant="outlined"
            label="Stakeholder Bio"
            //disabled={!isEditable}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            onBlur={() => setIsEditable(false)}
            multiline
          rows={5}
          fullWidth
        />
        </form>
        </CardContent>
      </Collapse>
    </Card>
    {/* --------------------------------- end Card option 2 ------------------------------------------ */}
    <Button  
      component={ Link } to="/matrix"
      variant="contained" 
      color="primary" 
      href="#contained-buttons"
      size='medium'
      alignItems='right'
      style={{ 
        //marginTop: 10,
        //marginRight: 100,
        marginRight: 20
        //marginBottom: 100
      }}
      
      >
      Conversation Matrix
    </Button>
    </div>
  );
}
