import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import NewTodo from "../components/NewTodo";

const mapStateToProps = ({ form }) => ({
  form
});

export default compose(connect(mapStateToProps, null))(NewTodo);
