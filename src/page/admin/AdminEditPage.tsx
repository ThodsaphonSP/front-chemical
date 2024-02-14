import React, {ReactNode, useEffect, useState} from 'react';
import {BaseContainer} from './BaseContainer'; // Assuming this is a custom component
import {
    Grid,
    TextField,
    Button,
    Typography,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem,
    Checkbox,
    ListItemText, SelectChangeEvent, FormHelperText
} from '@mui/material';
import {setTitle} from "../../features/Nav/NavSlice";
import pageData from "../../type/PageData.json";
import {useDispatch} from "react-redux";
import {Role} from "../../type/Role";
import {GetCompanyAPI, GetRoleAPI, registerAccount, UserRegistrationRequest} from "../../Services/RoleAPI";
import {useNavigate, useParams} from "react-router-dom";
import {Company} from "../../type/User";
import {AxiosError} from "axios";

export interface BaseContainerProps {
    children: ReactNode;
}


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const isValidEmail = (email: string | undefined): boolean => {
    if (!email) {
        return false;
    }
    // This pattern matches the common structure of an email address: text@text.domain
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
};

function isValidPassword(password?: string) {
    if (!password) {
        return "Password is missing.";
    } else if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    } else if (!/\d/.test(password)) {
        return "Password must contain at least one digit.";
    } else if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    return null;
}

export function AdminEditPage() {





    const {id} = useParams<{ id: string }>();

    const [roles, setRoles] = useState<Role[]>([]);

    const [companyData, setCompanyData] = useState<Company[]>()

    // State for user form
    const [user, setUser] = useState<UserRegistrationRequest>();

    const [roleName, setRoleName] = React.useState<string[]>([]);


    const dispatch = useDispatch();

    const navigate = useNavigate();


    //-------------------
    const [firstnameHelperText, setFirstnameHelperText] = useState<string>("")
    const [lastNameHelperText, setLastnameHelperText] = useState<string>("")

    const [emailEror, setEmailError] = useState<string>("")


    useEffect(() => {

        const titleValue = pageData.adminEdit.pageTitle;
        dispatch(setTitle(titleValue));
        document.title = titleValue;


    }, [dispatch]);


    useEffect(() => {
        fetchRoleData().catch(error => {
            console.error('Failed to fetch data:', error);
        })


        fetchCompanyData().catch(error => {
            console.error('Failed to fetch data:', error);
        })
    }, []);


    const [company, setCompany] = useState<string>();
    const [phoneError, setPhoneError] = useState<string>("");
    const [companyError, setCompanyError] = useState<string>("");
    const [roleError, setRoleError] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>("");

    const handleSelectChange = (event: SelectChangeEvent<typeof roleName>) => {
        let value: string[] | string;
        ({
            target: {value},
        } = event);

        setRoleName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    function validateFirstname(user?: UserRegistrationRequest) {
        if (!user || user.firstName === "") {
            setFirstnameHelperText("ห้ามเป็นค่าว่าง");
            return false;
        }
        setFirstnameHelperText("");
        return true;
    }

    function validateLastname(user?: UserRegistrationRequest) {
        if (!user || user.lastName === "") {
            setLastnameHelperText("ห้ามเป็นค่าว่าง");
            return false;
        }
        setLastnameHelperText("");
        return true;
    }

    function validateRole(user?: UserRegistrationRequest) {

        if (!user || !user.roleName || user.roleName.length > 0) {
            setRoleError("เลือกอย่างน้อย 1 role");
            return false;
        }
        setRoleError("");
        return true;
    }

    function validatePhoneNumber(user?: UserRegistrationRequest) {
        if (!user || !isValidPhoneNumber(user.phoneNumber)) {
            setPhoneError("กรอกเบอร์โทรควาวยาว 10 ตัวเลข");
            return false;
        }
        setPhoneError("");
        return true;
    }

    function validateCompany(user?: UserRegistrationRequest) {
        if (!user || user.companyId === 0) {
            setCompanyError("เลือกบริษัท");
            return false;
        }
        setCompanyError("");
        return true;
    }

    function validateEmail(user?: UserRegistrationRequest) {
        if (!user || !isValidEmail(user.email)) {
            setEmailError("ระบุอีเมลให้ถูก format");
            return false;
        }
        setEmailError("");
        return true;
    }



    function validatePassword(user?: UserRegistrationRequest) {
        const validationError = isValidPassword(user?.password);
        if (!user || validationError !== null) {
            setPasswordError(validationError || "Missing user information");
            return false;
        }
        setPasswordError("");
        return true;
    }

    function checkUser(user?: UserRegistrationRequest) {
        let isValid = true;
        isValid = validateFirstname(user) && isValid;
        isValid = validateLastname(user) && isValid;
        isValid = validatePhoneNumber(user) && isValid;
        isValid = validateEmail(user) && isValid;
        isValid = validateCompany(user) && isValid;
        isValid = validateRole(user) && isValid;
        isValid = validatePassword(user) && isValid;

        return isValid;
    }

// Handle input change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;


        const defaultState: UserRegistrationRequest = {
            email: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            password: '',
            companyId: 0, // You need to adjust this line to provide a sensible default value
            roleName: [],
        }

        setUser(prevState => ({
            ...defaultState,
            ...(prevState ?? {}),
            [name]: value,
        }));

        checkUser(user);
    };

    // Handle form submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('User Data:', user);
        // Here you would typically make your API call to update the user
    };


    const fetchRoleData = async (name = ""): Promise<void> => {
        // setRoleLoading(true);
        try {
            const response = await GetRoleAPI(name);

            setRoles(response.data);


        } catch (error) {
            console.error('Failed to fetch data:', error);
        }

    };


    const fetchCompanyData = async (name = ""): Promise<void> => {
        // setRoleLoading(true);
        try {
            const response = await GetCompanyAPI(name);

            setCompanyData(response.data);


        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
        // setRoleLoading(false);
    };

    const companySelectChange = (event: SelectChangeEvent) => {
        setCompany(event.target.value as string)
    };
    const handleSave = async (user: UserRegistrationRequest | undefined) => {


        if (!checkUser(user)) {
            alert("กรอกฟอร์มให้ถูกต้อง")
            return;
        }

        if (!user) {
            return;
        }

        user.roleName = roleName;

        if (!company) {
            return
        }
        user.companyId = +company;





        if (id === "0") {
            //create
            try {
                const response = await registerAccount(user);
                if (response.status === 200) { // or any other status that means success.

                    alert("User สำเร็จ")
                    navigate(-1);
                }
            } catch (error: unknown) {
                if (error instanceof AxiosError && error.response) {
                    // Check for status code 500
                    if (error.response.status === 500) {
                        console.error('Server Error: 500');
                        alert(" กรุณาเช็คข้อมูล หรือ ติดต่อ ผู้ดูแลระบบ")
                    }

                }
            }
        }
    };
    return (
        <div>
            <BaseContainer>
                <Grid rowSpacing={1} columnSpacing={1} container component="form" onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Edit User</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            size={"small"}
                            error={firstnameHelperText !== ""}
                            fullWidth
                            label="Firstname"
                            name="firstName"
                            value={user?.firstName}
                            helperText={firstnameHelperText}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            size={"small"}
                            error={lastNameHelperText !== ""}
                            fullWidth
                            label="LastName"
                            name="lastName"
                            helperText={lastNameHelperText}
                            value={user?.lastName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            size={"small"}
                            error={phoneError !== ""}
                            helperText={phoneError}
                            fullWidth
                            label="Phone Number"
                            name="phoneNumber"
                            value={user?.phoneNumber}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            size={"small"}
                            error={emailEror !== ""}
                            helperText={emailEror}
                            fullWidth
                            label="Email"
                            name="email"
                            value={user?.email}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TextField
                            size={"small"}
                            error={passwordError !== ""}
                            helperText={passwordError}
                            fullWidth
                            label="Password"
                            name="password"
                            value={user?.password}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl size={"small"} fullWidth error={companyError !== ""}>

                            <InputLabel id="company-label">Company</InputLabel>
                            <Select
                                labelId="company-label"
                                id="company"
                                value={company}
                                label="Company"
                                onChange={companySelectChange}
                            >
                                {companyData?.map(value => {
                                    return <MenuItem key={value.companyId}
                                                     value={value.companyId}>{value.companyName}</MenuItem>
                                })}

                            </Select>
                            <FormHelperText>{companyError}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl size={"small"} fullWidth={true} error={roleError !== ""}>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                                labelId="role-label"
                                id="role-select"
                                multiple
                                value={roleName}
                                onChange={handleSelectChange}
                                input={<OutlinedInput label="Role"/>}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {roles.map((role) => (
                                    <MenuItem key={role.id} value={role.name}>
                                        <Checkbox checked={roleName.indexOf(role.name) > -1}/>
                                        <ListItemText primary={role.name}/>
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>{roleError}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid container={true} item xs={12}>
                        <Grid item xs>
                            <Button
                                onClick={() => navigate(-1)}
                                variant="contained"
                                sx={{
                                    backgroundColor: "#1E90FF",
                                    color: "#FFFFFF",
                                    '&:hover': {
                                        backgroundColor: '#0000CD',
                                    },
                                }}
                            >
                                ย้อนกลับ
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button
                                disabled={id === "0"}

                                variant="contained"
                                sx={{
                                    backgroundColor: "#FF6347", //Change this to preferred background color
                                    color: "#FFFFFF", //Change this to preferred text color
                                    '&:hover': {
                                        backgroundColor: '#FF4500', //Change this to preferred hover color
                                    },
                                }}
                            >
                                ลบ
                            </Button>
                        </Grid>
                        <Grid>

                            <Button
                                onClick={() => handleSave(user)}
                                variant="contained"
                                sx={{
                                    backgroundColor: "#32CD32",
                                    color: "#FFFFFF",
                                    '&:hover': {
                                        backgroundColor: '#228B22',
                                    },
                                }}
                            >
                                บันทึก
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </BaseContainer>
            {/*<ErrorModal open={isModalOpen} errorMessage={error} handleClose={handleClose}/>*/}
        </div>
    );
}





function isValidPhoneNumber(phoneNumber: string|undefined): boolean {

    if (!phoneNumber){
        return false;
    }
    const regex = /^\d{10}$/; // Regex pattern for 10-digit phone number

    // Test if phone number matches regex pattern
    return regex.test(phoneNumber);
}