const helper = {
    radioGroup: [
        {
            name: 'gender',
            id: 'male',
            value: 'Male',
            displaylbl: 'Male'
        },
        {
            name: 'gender',
            id: 'female',
            value: 'Female',
            displaylbl: 'Female'
        }
    ],
    checkboxGroup: [
        {
            name: 'language',
            id: 'marathi',
            value: 'Marathi',
            displaylbl: 'Marathi'

        },
        {
            name: 'language',
            id: 'hindi',
            value: 'Hindi',
            displaylbl: 'Hindi'

        },
        {
            name: 'language',
            id: 'english',
            value: 'English',
            displaylbl: 'English'

        }
    ],
    languageDD: [
        {
            optionValue: '',
            optionText: 'Please Select Location'
        },
        {
            optionValue: 'Pune',
            optionText: 'Pune'
        },
        {
            optionValue: 'Delhi',
            optionText: 'Delhi'
        },
        {
            optionValue: 'Mumbai',
            optionText: 'Mumbai'
        },
        {
            optionValue: 'Kolkata',
            optionText: 'Kolkata'
        }
    ],
    initialState: {
        fname: '',
        lname: '',
        emailid: '',
        mobileno: '',
        gender: '',
        language: [],
        location: '',
        userData: [],
        modal: false,
        alertvisible:false,
        alertmessage:'',
        errors: {
            fname: '',
            lname: '',
            emailid: '',
            mobileno: '',
            gender: '',
            language: '',
            location: ''
        }
    },
    errormessages: {
        required: {
            fname: 'First Name is required',
            lname: 'Last Name is required',
            emailid: 'Email id is required',
            mobileno: 'Mobile number is required',
            gender: 'Select any Gender',
            language: 'Select atleast one language',
            location: 'Select any location',
        }
    }
}
export default helper;