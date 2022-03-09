import { Component } from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    state = { }
    // Note event handler method 'onChange' must be a callback () => {} 
    handleChange = (event, item) => {
        console.log(event.target.value);
         this.props.onSelectItemsToBuy(item);
    };
    render() { 
        return ( 
            <>
                <div className="border border-2 border-dark m-3">
                    {
                        this.props.available_items.map((item) =>
                            <div className="m-3 p-1">
                                <input type="checkbox" value={item.name} id={item.name} onChange={(event) => this.handleChange(event,item)}/>
                                <label htmlFor={item.name}>
                                    {item.name}:-&nbsp;{item.price}
                                </label><br/>                        
                            </div>
                        )
                    }
                </div>
            </>
         )
    }
}
 
export default ProductList;