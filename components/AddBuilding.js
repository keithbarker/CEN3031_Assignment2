import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    name: '',
    code: '',
    id: '',
    address: '',
    latitude: '',
    longitude: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateBldgState = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  addNewBuilding = () => {
    this.props.addBuilding(
      this.state.name,
      this.state.code,
      this.state.id,
      this.state.address,
      this.state.latitude,
      this.state.longitude
    )
    this.handleClose()
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
              name="name"
              id="name"
              label="Building Name"
              fullWidth
            />
          <TextField
              margin="dense"
              onChange={this.updateBldgState}
              id="id"
              name="id"
              label="Building ID"
              fullWidth
            />
            <TextField
              margin="dense"
              onChange={this.updateBldgState}
              id="code"
              name="code"
              label="Building Abbreviation"
              fullWidth
            />
            <TextField
              margin="dense"
              onChange={this.updateBldgState}
              id="address"
              name="address"
              label="Address"
              type="textarea"
              fullWidth
            />
            <TextField
              margin="dense"
              onChange={this.updateBldgState}
              id="latitude"
              name="latitude"
              label="Coordinates: latitude"
              fullWidth
            />
            <TextField
              margin="dense"
              onChange={this.updateBldgState}
              id="longitude"
              name="longitude"
              label="Coordinates: longitude"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.addNewBuilding}
              color="primary"
            >
              Add Building
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
