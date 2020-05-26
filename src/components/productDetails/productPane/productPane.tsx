import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import './productPane.css'
import {getProductMetaData}  from '../../../actions/index'
interface MyProps {
   
  }
interface ProductPaneState {
    id: string,
    title: string,
    image: string,
    subtitle: string,
    tags: string[],
  }
class ProductPane extends Component<MyProps,ProductPaneState>{
    constructor (props){
        super(props);
        this.state = {
            id: '',
            title: '',
            image: '',
            subtitle: '',
            tags: [],
        }
    
        
    }
 
    componentDidMount() {
        const productMetaData = getProductMetaData().payload;
        this.setState(productMetaData, ()=> {})
       
      }
    
  render() {
    return (
      <div className="boxShadow ProductPane">       
        <Card>
          <Image
            src={this.state.image}
            alt={this.state.title}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header textAlign={"center"}>{this.state.title}</Card.Header>
            <Card.Meta textAlign={"center"}>
              <span>{this.state.subtitle}</span>
            </Card.Meta>
            <Card.Description>
           { this.state.tags.map((tag)=>{
      return <div className="ui basic label">{tag}</div>
  })}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="home" />
            OVERVIEW
            <div className="ui hidden divider"></div>
            <Icon name="chart bar outline" />
            SALES
          </Card.Content>
        </Card> 
        
      </div>
    );
  }
}


export default  ProductPane;
