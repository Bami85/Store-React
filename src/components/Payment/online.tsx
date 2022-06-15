
import TextField from '@mui/material/TextField';


const Fields = ['Credit Cart Name', 'Credit Cart_Number', 'Expire Date', 'CVC'];
const OnlinePayment = () => {
    return (
        <>
            {
                Fields.map((field, indx) => {
                    return <TextField
                    style={{"width":"100%","marginBottom":"5px"}}
                        id="outlined-basic"
                        required
                        label={field}
                        name={field}
                        variant="outlined" />
                })
            }
        </>
    )
}
export default OnlinePayment