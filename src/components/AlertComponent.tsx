import React, { Component } from 'react'
import ReactBSAlert from "react-bootstrap-sweetalert";

export default class AlertComponent extends Component<Props , State> {
    constructor(props : any ){
        super(props );
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <ReactBSAlert
                    
                    show = {true}
                    warning = {(this.props.type =="warning" ) ? true : false}
                    success = {(this.props.type =="success" ) ? true : false}
                    style={{ display: "flex",justifyContent : "center", alignItems : "center"  }}
                    title="Cảnh báo"
                    onConfirm={() => {
                        this.props.result(true)
                    }}
                    onCancel={() => {
                        this.props.result(false)
                    }}
                    confirmBtnBsStyle="warning"
                    confirmBtnText="Ok"
                    btnSize=""
                >
                    Cảnh báo ...
                </ReactBSAlert>

            </div>
        )
    }
}

type Props = {
    result :(result : boolean) => void;
    type : Type;
}

type State = {

}

export enum Type{
    warning = "warning",
    success = "success"
}