import _ from "lodash";
import React, { Component } from "react";
import { Table, Container, Divider } from "semantic-ui-react";
import NumberFormat from "react-number-format";
import ReactFrappeChart from "react-frappe-charts";
import {getSalesData}  from '../../../actions/index'
import './salesDetailsTable.css'


interface MyProps {
   
}

interface SalesDetailsTableState {
  column:string
  data: any[]
  direction:string
}
class SalesDetailsTable extends Component<any,SalesDetailsTableState> {
    constructor (props){
        super(props)
        this.state = {
            column: ' ',
            data: [ { weekEnding: '',
                retailSales: 0,
                wholesaleSales: 0,
                unitsSold: 0,
                retailerMargin: 0
            }],
            direction: ''
          };
    }
  
  componentDidMount() {
    console.log('DID Mount')
    const salesData = getSalesData().payload;
    this.setState({data:salesData.sales}, ()=> {})
    // this.setState({id:'jade'}, ()=> {})
    console.log('STATE',this.state,salesData);
   
  }
  getchartData = () => {
    let reailtSalesByMonth:number[] = [];
    let wholeSalesByMonth :number[] = [];
    for (let i = 1; i < 13; i++) {
      let retailSales = 0;
      let wholesaleSales = 0;
      for (const week of this.state.data) {
        const month = Number(week.weekEnding.split("-")[1]);
        if (month === i) {
          retailSales += week.retailSales;
          wholesaleSales += week.wholesaleSales;
        }
      }
      reailtSalesByMonth.push(retailSales);
      wholeSalesByMonth.push(wholesaleSales);
    }
    const datasets = [
      {
        name: "Retail Sales",
        type: "line",
        values: reailtSalesByMonth,
      },
      {
        name: "Whole Sale Sales",
        type: "line",
        values: wholeSalesByMonth,
      },
    ];
    const  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    return { datasets :datasets, labels: labels}
  };
  handleSort = (clickedColumn: any) => () => {
    const {column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending",
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending",
    });
  };

  render() {
    const { column, data, direction } = this.state;
    return (
    <div>
        <Container className="boxShadow">
        <ReactFrappeChart
        title="Retail Sales"
      type="line"
      colors={["#21ba45"]}
      axisOptions={{ xAxisMode: "tick", yAxisMode: "span", xIsSeries: 1 }}
      height={500}
      data={this.getchartData()}
    />
    </Container >
    <Divider hidden />
    <Divider hidden />
    <Container className="boxShadow">
      <Table sortable fixed textAlign={"center"} className="boxShadow"  basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              onClick={this.handleSort("weekEnding")}
            >
              Week Ending
            </Table.HeaderCell>
            <Table.HeaderCell
             
              onClick={this.handleSort("retailSales")}
            >
              RETAIL SALES
            </Table.HeaderCell>
            <Table.HeaderCell
              
              onClick={this.handleSort("wholesaleSales")}
            >
              WHOLE SALES
            </Table.HeaderCell>
            <Table.HeaderCell
            
              onClick={this.handleSort("unitsSold")}
            >
              UNITS SOLD
            </Table.HeaderCell>
            <Table.HeaderCell
            
              onClick={this.handleSort("retailerMargin")}
            >
              RETAILER MARGIN
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(
            data,
            ({
              weekEnding,
              retailSales,
              wholesaleSales,
              unitsSold,
              retailerMargin,
            }) => (
              <Table.Row key={weekEnding}>
                <Table.Cell>{weekEnding}</Table.Cell>
                <Table.Cell>
                  {
                    <NumberFormat
                      value={retailSales}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  }
                </Table.Cell>
                <Table.Cell>
                  {
                    <NumberFormat
                      value={wholesaleSales}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  }
                </Table.Cell>
                <Table.Cell>
                  {
                    <NumberFormat
                      value={unitsSold}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  }
                </Table.Cell>
                <Table.Cell>
                  {
                    <NumberFormat
                      value={retailerMargin}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  }
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      </Container >
      </div>
    );
  }
}

export default SalesDetailsTable;
