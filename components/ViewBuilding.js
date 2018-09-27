import React from 'react';
import Button from '@material-ui/core/Button';

class ViewBuilding extends React.Component {
  render() {
    const { bldg, removeBuilding } = this.props

    if (Object.keys(bldg).length === 0 && bldg.constructor === Object) {
      return (
        <div>
          <p>
            {' '}
            <i>Click on a name to view more information</i>
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <p><strong>Name:</strong> {bldg.name}</p>
          <p><strong>Building ID:</strong> {bldg.id}</p>
          <p><strong>Abbreviation:</strong> {bldg.code}</p>
          <p><strong>Address:</strong> {bldg.address}</p>
          <p><strong>Coordinates:</strong></p>
          <p>{bldg.coordinates === undefined ? 'None':bldg.coordinates.latitude} latitude</p>
          <p>{bldg.coordinates === undefined ? 'None':bldg.coordinates.longitude} longitude</p>
          <Button
            onClick={() => removeBuilding(bldg.id)}
            variant="contained" 
            color="secondary"
          >
            Remove Building
          </Button>
        </div>
      )
    }
  }
}
export default ViewBuilding;
