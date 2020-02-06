const helper = {
    validation: (currentState) => {
        let errors = currentState.errors;
        errors.fname = errors.lname = errors.emailid = errors.mobileno = errors.gender = errors.language = errors.location = '';
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let valid = true;
        if (currentState.fname === '') {
            errors.fname = helper.errormessages.required.fname;
            valid = false;
        }
        if (currentState.lname === '') {
            errors.lname = helper.errormessages.required.lname;
            valid = false;
        }
        if (currentState.emailid === '') {
            errors.emailid = helper.errormessages.required.emailid;
            valid = false;
        } else if (emailPattern.test(currentState.emailid) === false) {
            errors.emailid = 'Email id is invalid';
            valid = false;
        }
        if (currentState.mobileno === '') {
            errors.mobileno = helper.errormessages.required.mobileno;
            valid = false;
        }
        if (currentState.gender === '') {
            errors.gender = helper.errormessages.required.gender;
            valid = false;
        }
        if (currentState.location === '') {
            errors.location = helper.errormessages.required.location;
            valid = false;
        }
        if (currentState.language.length < 1) {
            errors.language = helper.errormessages.required.language;
            valid = false;
        }
        return { status: valid, errors: errors };
    },
    modalConfig : {
        title: '',
        body: '',
        btntext: '',
        pbtnAction: () => 0,
    },
    deletePopupConfig: {
        title: 'Delete Record',
        body: 'Do you want to delete this record ? This action cannot be undone',
        btntext: 'Delete',
        pbtnAction: () => 0,
    },
    updatePopupConfig: {
        title: 'Update Record',
        body: 'Do you want to update this record ?',
        btntext: 'Update',
        pbtnAction: () => 0,
    },
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
        alertvisible: false,
        alertmessage: '',
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