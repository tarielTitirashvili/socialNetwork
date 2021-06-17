export const requiredField = (value) => {
    if (value) return undefined
    return "this field is required"
}

export const maxLength = (lengthNumber) => {
    return(value)=>{
        if (value.length > lengthNumber)return <div>{`field value should be less then ${lengthNumber}`}</div>
        return undefined
    }
} 


