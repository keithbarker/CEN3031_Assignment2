import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import FormDialog from './components/AddBuilding'
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      bldg: {},
      data: props.data
    };
  }

  filterUpdate = (value) => {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value.target.value})
  }

  selectedUpdate = (id) => {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    const bldg = this.state.data.find(obj => {
      return obj.id === id
    })
    this.setState({bldg})
  }

  removeBuilding = (id) => {
    const bldg = {}
    const data = this.state.data.filter(obj => {
      return obj.id !== id
    })
    this.setState({data, bldg})
  }

  addBuilding = (name, code, id, address, latitude, longitude) => {
    const coordinates = {latitude, longitude}
    const bldg = {name, code, id, address, coordinates}
    const data = [bldg].concat(this.state.data)
    this.setState({data})
  }

  render() {
    
    return (
      <div className="bg">
        <Paper className="headerandsearch">
          <Typography variant="display3">UF Directory App</Typography>
          <Search filterUpdate={this.filterUpdate}/>
        </Paper>
        <main>
          <div className="row">
            <Paper className="column1">
              <FormDialog addBuilding={this.addBuilding}/>
              <div>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Code Building</TableCell>
                    </TableRow>
                  </TableHead>
                  <BuildingList
                    bldg={this.state.bldg}
                    filter={this.state.filterText}
                    selectBuilding={this.selectedUpdate}
                    data={this.state.data}
                  />
                </Table>
              </div>
            </Paper>
            <div className="column2">
              <ViewBuilding removeBuilding={this.removeBuilding} bldg={this.state.bldg}/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
