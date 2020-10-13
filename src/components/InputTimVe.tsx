import React, { Component, Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FaceIcon from '@material-ui/icons/Face';
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Hà Nội' },
    { title: 'Hồ Chí Minh' },
    { title: 'Buôn Mê Thuột' },
];
const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
    };
});

class InputTimVe extends Component {

    render() {

        return (
            <div className="khungTimVe">
                <div >
                    <Autocomplete className="form-group"
                        id="grouped-demo"
                        size="medium"
                        openText="Mở"
                        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                        groupBy={(option) => option.firstLetter}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        renderInput={(params) =>
                            <div className="form-group mb-3" ref={params.InputProps.ref}>
                                <div className="input-group input-group-merge input-group-alternative">
                                    <input style={{ height: 46, borderRadius: ".25rem", outline: "none", border: "none", textIndent: 10}} className="form-control" placeholder="Nơi đi" type="text" {...params.inputProps} />
                                </div>
                            </div>
                        }
                    />
                </div>
                <div >
                    <Autocomplete
                        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                        groupBy={(option) => option.firstLetter}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        renderInput={(params) =>
                            <div className="form-group mb-3" ref={params.InputProps.ref}>
                                <div className="input-group input-group-merge input-group-alternative">
                                    <input style={{ height: 46, borderRadius: ".25rem", outline: "none", border: "none", textIndent: 10 }} className="form-control focused" placeholder="Nơi đến" type="text" {...params.inputProps} />
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className="col-2">
                    <input className="form-control" type="date" id="example-date-input" />
                </div>
                <div >
                    <button style={{height: 46}} type="button" className="btn btn-success">TÌM VÉ</button>
                </div>
            </div>
        );
    }
}

export default InputTimVe;