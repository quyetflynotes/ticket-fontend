import { FormControlLabel, Input, Radio, RadioGroup } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';

import React, { useEffect, useState } from 'react'
import { Ticket } from '../share/base-ticket/base-carOwner/Ticket';

type Props = {
    infoTicket: Ticket;
    onChange: (infoTicket: Ticket) => void;
}
export default function DiemDonTra(props: Props) {
    const [localStart, setLocalStart] = useState<string>("")
    const [localEnd, setLocalEnd] = useState<string>("");
    useEffect(() => {
        console.log("on render at efffect")
        if (props.infoTicket.trip?.Route?.localStart != props.infoTicket.localPickup) {
            setLocalStart(props.infoTicket.localPickup || "")
        }
        else setLocalStart(props.infoTicket.localPickup|| "")
        if (props.infoTicket.trip?.Route?.localEnd != props.infoTicket.localDrop) {
            setLocalEnd(props.infoTicket.localDrop || "")
        }

    }, [props])
    return (
        <div className="khungDiemDonTra">
            <div className="khungDiem">
                <div className="diemDon">
                    <div className="label">
                        Điểm đón
                    </div>

                    <RadioGroup aria-label="gender" name="gender1" defaultValue={(props.infoTicket.localPickup == localStart) ? localStart: props.infoTicket.trip?.Route?.localStart } onClick={(e: any) => props.onChange({ ...props.infoTicket, localPickup: e.target.value })}
                    >
                        <FormControlLabel value={props.infoTicket.trip?.Route?.localStart} control={<Radio />} label={
                            <div>
                                <div className="groupsItem ">
                                    <span className="timeAndDiaDiem" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <span style={{ fontWeight: 700, color: "var(--primary)" }}>21:45</span>
                                        <span className="diaDiem" >
                                            <span>•</span>
                            &nbsp;{props.infoTicket.trip?.Route?.localStart}
                                        </span>
                                    </span>
                                </div>

                            </div>
                        } />

                        <FormControlLabel value={localStart} control={<Radio />} label={
                            <div>
                                <div className="groupsItem ">
                                    <span className="timeAndDiaDiem">
                                        <span style={{ fontWeight: 700, color: "var(--primary)" }}>21:45</span>
                                        <div className="diaDiem" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <span>•</span>
                                            <input
                                                style={{ marginLeft: 5 }}
                                                type="text"
                                                className="form-control"
                                                value={localStart}
                                                id="exampleFormControlInput1"
                                                placeholder="Nơi đón khác"
                                                onChange={(e) => setLocalStart(e.target.value)}
                                            />
                                        </div>
                                    </span>
                                </div>
                            </div>
                        } />

                    </RadioGroup>


                </div>
                <span className="colum"></span>
                <div className="diemDon">
                    <div className="label">
                        Điểm trả
                    </div>
                    <RadioGroup aria-label="gender" name="gender1" defaultValue={"female"} onChange={(e) => props.onChange({ ...props.infoTicket, localDrop: e.target.value })}>
                        <FormControlLabel value={props.infoTicket.trip?.Route?.localEnd} control={<Radio />} label={
                            <div>
                                <div className="groupsItem ">
                                    <span className="timeAndDiaDiem" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <span style={{ fontWeight: 700, color: "var(--primary)" }}>21:45</span>
                                        <span className="diaDiem" >
                                            <span>•</span>
                            &nbsp;{props.infoTicket.trip?.Route?.localEnd}
                                        </span>
                                    </span>
                                </div>

                            </div>
                        } />

                        <FormControlLabel value={localEnd} control={<Radio />} label={
                            <div>
                                <div className="groupsItem ">
                                    <span className="timeAndDiaDiem">
                                        <span style={{ fontWeight: 700, color: "var(--primary)" }}>21:45</span>
                                        <div className="diaDiem" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <span>•</span>
                                            <input
                                                style={{ marginLeft: 5 }}
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Nơi trả khác"
                                                value={localEnd}
                                                onChange={(e) => setLocalEnd(e.target.value)}
                                            />
                                        </div>
                                    </span>
                                </div>
                            </div>
                        } />

                    </RadioGroup>
                </div>

            </div>
        </div>
    );
}
