import { number } from 'prop-types';
import React, { Component } from 'react'

var dataCheck = [
    { name: "Một", value: 1 },
    { name: "hai", value: 2 },
    { name: "ba", value: 3 },
    { name: "bốn", value: 4 },
    { name: "năm", value: 5 },
    { name: "sáu", value: 6 },
    { name: "bảy", value: 7 },
    { name: "tám", value: 8 },
    { name: "chín", value: 9 },
    { name: "mười", value: 10 },
]

var capSo = [
    { name: "đồng", value: 1 },
    { name: "mươi", value: 10 },
    { name: "trăm", value: 100 },
    { name: "nghìn", value: 1000 },
    { name: "triệu", value: 1000000 }
]

export default class CalcMoney extends Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            numberString: "",
            numberValue: 0,
            split : []
        }
    }

    // outPutValue() {
    //     let sum = 0;
    //     let sumText = "";
    //     let saveValue = "0";
    //     let numbeStringArray: string[] = this.state.numberString.split(" ");
    //     numbeStringArray.map((text: string) => {
    //         dataCheck.map((checkValue: any) => {
    //             if (text.toUpperCase().trim() == checkValue.name.toUpperCase().trim()) {
    //                 saveValue += checkValue.value;
    //             } else {
    //                 capSo.map((capSo: any) => {
    //                     if (text.toUpperCase().trim() == capSo.
                        
    //                     .toUpperCase().trim()) {
    //                         sum = sum + (parseInt(saveValue) * capSo.value);
    //                         saveValue = "0";
    //                     }
    //                 })
    //             }
    //         })


    //     })


    //     this.setState({
    //         numberValue: sum
    //     })
    // }

    testSplit(){
        let createArray :Array<any> = new Array()
        let getArray = this.state.numberString.split("_");
        for (let i = 0; i < getArray.length; i+=2) {
            let newObject = {name : getArray[i], value : getArray[i+1]}
            createArray.push(newObject) 
        }
        this.setState({
            split : createArray
        })
    }

    
    render() {
        return (
            <div>
                <p>{JSON.stringify(this.state.split)}</p>
                {/* <p>{this.state.numberValue}</p> */}
                <input
                    value={this.state.numberString}
                    onChange={(event) => {
                        this.setState({ numberString: event.target.value })
                    }}
                ></input>
                <button
                    onClick={(event) => {
                        this.testSplit()
                    }}
                >check</button>
            </div>
        )
    }
}

type Props = {

}

type State = {
    numberString: string,
    numberValue: number,
    split : Array<any>
}

