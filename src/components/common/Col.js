import React, { Component } from 'react';

class Col extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { span, md, xs, lg } = this.props;
        var col_class = "";
        if (md)
            col_class += "col-md-" + md;

        if (xs)
            col_class += " col-" + xs;

        if (lg)
            col_class += " col-lg-" + lg;

        if(!col_class){
            col_class = "col-md-" + span;
        }
        return (
            <div className={col_class}>{this.props.children}</div>
        )
    }
}

export default Col;