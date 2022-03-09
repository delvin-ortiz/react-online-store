import { Component } from 'react';
import ProductList from "./ProductList";
import Total from "./Total";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products_selected: []
        };
    }
    // scenario when user selects available product to buy
    handleItemsSelected = (item) => {
        console.log(item);
        this.setState({
            products_selected: this.state.products_selected.push(item)
        });
    }
    render() { 
        return ( 
            <>
                <div className="col-md-6">
                    <ProductList onSelectItemsToBuy={this.handleItemsSelected} available_items={this.props.data}/>
                </div>
                <div className="col-md-6">
                    <Total pl={this.state.products_selected}/>
                </div>
            </>
         );
    }
}
 
export default MainComponent;