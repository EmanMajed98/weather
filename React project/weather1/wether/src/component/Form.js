import React, { Children } from "react";

function Form ({getweather,children}){
 
    const inputStyle1=`mt-12 mt-12 w-[300px] h-[35px] rounded-md pl-2`
    const inputStyle2=`mb-12 mt-12 w-[300px] h-[35px]  rounded-md pl-2`

return(
    <form onSubmit={getweather} className="flex flex-col bg-cyan-900 h-[450px] rounded-lg pl-12 pr-12">
     <input type="text" placeholder="City...." name="city" className={inputStyle1}/>
     <input type="text" placeholder="Country...." name="country" className={inputStyle2} />
     <button className="w-[150px] bg-indigo-200 rounded-lg ml-16 ">Get Weather</button>
     {children}
    </form>
)

}
export default Form;