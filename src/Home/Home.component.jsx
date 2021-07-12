import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MaterialUiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import ROUTE from '/routes.js';
import {stableSort} from './utils/stableSort.util';
import {getComparator} from './utils/getComparator.util';

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
    padding: 0,
  },
})(MaterialUiTableCell);

const headCells = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title',
  },
  {id: 'magnitude', numeric: true, disablePadding: false, label: 'Magnitude'},
  {id: 'time', numeric: true, disablePadding: false, label: 'Time'},
];

function EnhancedTableHead(props) {
  const {order, orderBy, onRequestSort} = props;

  const createSortHandler = property => event => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              IconComponent={() => null}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function Home(props) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('title');

  const handleRequestSort = property => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h5>{props.title}</h5>

        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={'small'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={props.earthquakes?.length}
            />
            <TableBody>
              {stableSort(props.earthquakes, getComparator(order, orderBy)).map(
                (row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={row.title}
                      size={'small'}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align={'center'}
                        size={'small'}
                      >
                        <Link to={ROUTE.Detail.replace(':id', row.id)}>
                          {row.title}
                        </Link>
                      </TableCell>
                      <TableCell align="center" size={'small'}>
                        {row.magnitude}
                      </TableCell>
                      <TableCell align="center" size={'small'}>
                        {`${moment(row.time).format('ll')}, ${moment(
                          row.time,
                        ).format('LT')}`}
                      </TableCell>
                    </TableRow>
                  );
                },
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}

export default Home;
