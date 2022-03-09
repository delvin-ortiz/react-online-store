import { useState } from 'react';

let Total = (props) => {
    let [selected_products, setProducts] = useState(props.pl);

    return (
        <div className="border border-2 border-dark m-3">
            <div className="d-grid gap-2 m-3">
                <button className="btn btn-primary text-start fw-bold" type="button">
                    Total Products in Cart
                    <span className="badge bg-light text-dark float-end">
                        {selected_products.length}
                    </span>
                </button>
            </div>
        </div>
    );
}
 
export default Total;