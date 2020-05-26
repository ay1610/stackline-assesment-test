import React ,{Component} from 'react';
import NavBar from './components/navBar/navBar';
import ProductDetails from './components/productDetails/product-details';
import { Divider } from 'semantic-ui-react';


class App extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <Divider hidden />
            <ProductDetails />
            </div>
        );
    }

}



export default App