import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    bldg: {}
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateBldgState = e => {
    this.setState({e.target.name: e.target.value})
    console.log(this.state.data)
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={this.handleClickOpen}
        >
          Add New Building
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Building</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              onChange={this.updateBldgState}
              margin="dense"
              id="name"
              label="Building Name"
              fullWidth
            />
          <TextField
              margin="dense"
              id="id"
              label="Building ID"
              fullWidth
            />
            <TextField
              margin="dense"
              id="code"
              label="Building Abbreviation"
              fullWidth
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="textarea"
              fullWidth
            />
            <TextField
              margin="dense"
              id="latitude"
              label="Coordinates: latitude"
              fullWidth
            />
            <TextField
              margin="dense"
              id="longitude"
              label="Coordinates: longitude"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add Building
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
