import React from "react";
import MakeTransactionPurchaseView from "./MakeTransactionPurchase.view";
import { getTransactionData } from "../../../../Server/PurchaseTransactionActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
  return {
    getTransactionData: () => {
      dispatch(getTransactionData());
    }
  };
};

const mapStateToProps = state => {
  return {
    suppliersList: state.PurchaseTransactionReducer.suppliersList,
    productsList: state.PurchaseTransactionReducer.productsList
  };
};

class MakeTransactionPurchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0, costPrice: 0, total: 0, supplierId: "" };
    this.onChange = this.onChange.bind(this);
    this.changeSupplierState = this.changeSupplierState.bind(this);
  }

  componentDidMount() {
    this.props.getTransactionData();
    //alert("DID Mount");
  }

  onChange(event) {
    if ([event.target.name] == "quantity") {
      var total = event.target.value * this.state.costPrice;
    } else if ([event.target.name] == "costPrice") {
      var total = this.state.quantity * event.target.value;
    }

    this.setState({ [event.target.name]: event.target.value, total: total });
  }

  changeSupplierState(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <MakeTransactionPurchaseView
        suppliersList={this.props.suppliersList}
        productsList={this.props.productsList}
        changeSupplierState={this.changeSupplierState}
        quantity={this.state.quantity}
        costPrice={this.state.costPrice}
        total={this.state.total}
        onChange={this.onChange}
        supplierId={this.state.supplierId}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeTransactionPurchase);
