import React from "react";

function Weather(props) {
    return (
        <div className="pl-[15%] mt-12">
            {
                props.city && <p><strong>city</strong> : <span >{props.city}</span></p>
            }
            {
                props.country && <p> <strong> country</strong> : <span>{props.country}</span></p>
            }
            {
                props.tempreature && <p><strong>tempreature</strong> : <span >{props.tempreature}</span></p>
            }
            {
                props.humidity && <p> <strong>humidity</strong> : <span >{props.humidity}</span></p>
            }
            {
                props.description && <p> <strong>description</strong> : <span>{props.description}</span></p>
            }
            {
                (props.city==="" &&  props.country==="") && <p> <strong>error</strong> : <span>pleas Enter Data</span></p>
            }
        </div>
    )

}
export default Weather;