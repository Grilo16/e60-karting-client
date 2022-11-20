const DatePicker = ({setDate, setTime}) => {

    const handleSelectDate = (e) => {
        setDate(e.target.value)
    }; 

    const handleSelectTime = (e) => {
        setTime(e.target.value)
    }; 

    return (
        <>
        <input onChange={handleSelectDate} type="date" name="" id="" />
        <input onChange={handleSelectTime} type="time" name="" id="" />
        </>
    
    )

}; 

export default DatePicker;