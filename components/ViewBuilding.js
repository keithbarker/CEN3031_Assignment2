import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ViewBuilding extends React.Component {
  render() {
    const { bldg, removeBuilding } = this.props

    if (Object.keys(bldg).length === 0 && bldg.constructor === Object) {
      return (
        <Card>
          <CardContent>
            <p>
              {' '}
              <i>Click on a name to view more information</i>
            </p>
          </CardContent>
        </Card>
      )
    } else {
      return (
        <Card>
          <CardContent>
            <Typography variant="headline">{bldg.name}</Typography>
            <p><strong>Building ID:</strong> {bldg.id}</p>
            <p><strong>Abbreviation:</strong> {bldg.code}</p>
            <p><strong>Address:</strong> {bldg.address}</p>
            <p><strong>Coordinates:</strong></p>
            <p>{bldg.coordinates === undefined ? 'None':bldg.coordinates.latitude} latitude</p>
            <p>{bldg.coordinates === undefined ? 'None':bldg.coordinates.longitude} longitude</p>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => removeBuilding(bldg.id)}
              variant="contained" 
              color="secondary"
            >
              Remove Building
            </Button>
          </CardActions>
        </Card>
      )
    }
  }
}
export default ViewBuilding;
