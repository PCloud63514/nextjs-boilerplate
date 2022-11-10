import React, {useState} from "react";
import {getTimeLineList} from "../../services/TimeLineService";

export function TimeLineItem(data: any) {
    return (
        <div>
            <li>Content: {data.data.content}</li>
        </div>
    )
}

export default function TimeLineList() {
    const [values, setValues] = useState<any[]>([]);

    React.useEffect(() => {
        getTimeLineList().then(value => {
            setValues(value.data.values);
        });
    }, []);

    return (
        <div>
            {
                values.map(value => <TimeLineItem data={value}/>)
            }
        </div>
    )
}