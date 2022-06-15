
import TextField from '@mui/material/TextField';


const Fields = ['Bank', 'Cleaning Number', 'Account Number'];
const PaymentDetail = () => {
    return (
        <>
            {
                Fields.map((field, indx) => {
                    return <TextField
                    style={{"width":"100%","marginBottom":"5px"}}
                        id="outlined-basic"
                        label={field}
                        required
                        name={field}
                        variant="outlined" />
                })
            }
        </>
    )
}
export default PaymentDetail