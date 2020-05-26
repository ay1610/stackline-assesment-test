import React, { Component } from "react";
import ProductPane from "./productPane/productPane";
import SalesDetailsTable from "./salesDetailsTable/salesDetailsTable";
import { Grid } from "semantic-ui-react";

class ProductDetails extends Component {
  render() {
    return (
      <div>

        <Grid  >
          <Grid.Row stretched>
            <Grid.Column  width={3}>
            <ProductPane />
            </Grid.Column>
            <Grid.Column  width={10}>
            <SalesDetailsTable />
            </Grid.Column>
          </Grid.Row>
         </Grid>
        
      </div>
    );
  }
}

export default ProductDetails;
