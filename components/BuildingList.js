import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class BuilingList extends React.Component {
  setBuildingId = (id) => {
    this.props.selectBuilding(id)
  }

  render() {
    //console.log('This is my directory file', this.props.data);
    const { bldg, filter, data } = this.props;

    const filteredData = data.filter(obj => {
      return obj.code.includes(filter) || obj.name.includes(filter)
    })
    const buildingList = filteredData.map(directory => {
      return (
        <TableRow key={directory.id}>
          <TableCell>{directory.code}</TableCell>
          <TableCell> {directory.name} </TableCell>
          <TableCell>
            <Button
              onClick={() => this.setBuildingId(directory.id)}
              variant="contained"
              color={bldg.id === directory.id ? "primary": "default"}
            >
              Details
            </Button>
          </TableCell>
        </TableRow>
      );
    });

    return <TableBody>{buildingList}</TableBody>
  }
}
export default BuilingList;
