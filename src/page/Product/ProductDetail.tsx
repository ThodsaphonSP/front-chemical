import {BaseContainer} from "../admin/BaseContainer";
import {
    Grid,
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel, SelectChangeEvent, TableBody, TableRow, TableCell, TableContainer, Paper, Table, TableHead,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {GetCategory, Category} from "../../Services/CategoryAPI";
import {GetUnit, UnitOfMeasurement} from "../../Services/UnitOfMeasurementAPI";
import {GetProduct, Product} from "../../Services/productAPI";
import {CreateProduct} from "../../Services/PostProduct";

export interface ProductData {
    name: string,
    code: string,
    detail: string,
    standardPrice: number | null,
    multiplier: number | null,
    quantity: number | null,
    price: number | null,
    isActive: boolean,
    categoryId: any,
    substituteProductId: any,
    unitOfMeasurementId: any
}

export function ProductDetail() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [units, setUnits] = useState<UnitOfMeasurement[]>([]);
    const [products, setProducts] = useState<Product[]>([]); // เปลี่ยนตัวแปร formData เป็น products
    const headCol = ['Name', 'Code', 'Detail0', 'Standard Price', 'Multiplier', 'quantity', 'Price', 'Status', 'Category ID', 'SubtituteProduct ID', 'Unit of measurement ID']

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await GetCategory();
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchData = async () => {
            try {
                const response = await GetProduct();
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const fetchUnit = async () => {
            try {
                const response = await GetUnit();
                setUnits(response.data);
            } catch (error) {
                console.log('Error fetching units:', error);
            }
        };

        fetchCategories();
        fetchData();
        fetchUnit();
    }, []);

    const [productFormData, setProductFormData] = useState<ProductData>({
        name: '',
        code: '',
        detail: '',
        standardPrice: null,
        multiplier: null,
        quantity: null,
        price: null,
        isActive: true,
        categoryId: '',
        substituteProductId: "",
        unitOfMeasurementId: ""
    });

    const [formDataError, setFormDataError] = useState({
        name: false,
        code: false,
        detail: false,
        standardPrice: false,
        multiplier: false,
        quantity: false,
        price: false,
    })

    //Forms handle changing
    const clearTextFields = () => {
        setProductFormData({
            name: '',
            code: '',
            detail: '',
            standardPrice: null,
            multiplier: null,
            quantity: null,
            price: null,
            isActive: false,
            categoryId: '',
            substituteProductId: '',
            unitOfMeasurementId: ''
        });
    }
    //Form changing on textfields
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            name: event.target.value
        }));
    };

    const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            code: event.target.value
        }));
    };

    const handleChangeDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            detail: event.target.value
        }));
    };

    const handleChangeStandardPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            standardPrice: parseFloat(event.target.value) || null
        }));
    };

    const handleChangeMultiplier = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            multiplier: parseFloat(event.target.value) || null
        }));
    };

    const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            quantity: parseFloat(event.target.value) || null
        }));
    };

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            price: parseFloat(event.target.value) || null
        }));
    };

    const handleChangeIsActive = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            isActive: event.target.value === "1"
        }));
    };

    const handleChangeCategoryIdChange = (event: SelectChangeEvent<string>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            categoryId: event.target.value
        }));
    };

    const handleChangeSubstituteProductId = (event: SelectChangeEvent<string>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            substituteProductId: event.target.value
        }));
    }

    const handleChangeUnitOfMeasurementIdChange = (event: SelectChangeEvent<string>) => {
        setProductFormData((prevFormData) => ({
            ...prevFormData,
            unitOfMeasurementId: event.target.value
        }));
    }

    //handle save button
    const handleSave = async () => {
        let formErrors = {
            name: false,
            code: false,
            detail: false,
            standardPrice: false,
            multiplier: false,
            quantity: false,
            price: false,
        };

        if (!productFormData.name) {
            formErrors.name = true;
        }
        if (!productFormData.code) {
            formErrors.code = true;
        }
        if (!productFormData.detail) {
            formErrors.detail = true;
        }
        if (productFormData.standardPrice === null) {
            formErrors.standardPrice = true;
        }
        if (productFormData.multiplier === null) {
            formErrors.multiplier = true;
        }
        if (productFormData.quantity === null) {
            formErrors.quantity = true;
        }
        if (productFormData.price === null) {
            formErrors.price = true;
        }
        setFormDataError(formErrors);
        if (Object.values(formErrors).some(error => error)) {
            return;
        }
        try {
            await CreateProduct(productFormData);
            clearTextFields();
            const newProducts = await GetProduct();
            setProducts(newProducts.data);
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <BaseContainer>
            <h3>Product Details</h3>
            <form onSubmit={handleSave}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            size="small"
                            type="text"
                            value={productFormData.name}
                            error={formDataError.name}
                            onChange={handleChangeName}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Code"
                            variant="outlined"
                            size="small"
                            type="text"
                            value={productFormData.code}
                            error={formDataError.code}
                            onChange={handleChangeCode}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Detail"
                            variant="outlined"
                            size="small"
                            type="text"
                            value={productFormData.detail}
                            error={formDataError.detail}
                            onChange={handleChangeDetail}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Standard Price"
                            variant="outlined"
                            size="small"
                            type="number"
                            value={productFormData.standardPrice}
                            error={formDataError.standardPrice}
                            onChange={handleChangeStandardPrice}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}> <TextField
                        label="Multiplier"
                        variant="outlined"
                        size="small"
                        type="number"
                        value={productFormData.multiplier}
                        error={formDataError.multiplier}
                        onChange={handleChangeMultiplier}
                        fullWidth
                        required
                    /></Grid>
                    <Grid item xs={6}> <TextField
                        label="Quantity"
                        variant="outlined"
                        size="small"
                        type="number"
                        value={productFormData.quantity}
                        error={formDataError.quantity}
                        onChange={handleChangeQuantity}
                        fullWidth
                        required
                    /></Grid>
                    <Grid item xs={6}> <TextField
                        label="Price"
                        variant="outlined"
                        size="small"
                        type="number"
                        value={productFormData.price}
                        error={formDataError.price}
                        onChange={handleChangePrice}
                        fullWidth
                        required
                    /></Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                            <RadioGroup row value={productFormData.isActive ? "1" : "0"}
                                        onChange={handleChangeIsActive}>
                                <FormControlLabel value="1" control={<Radio/>} label="Active"/>
                                <FormControlLabel value="0" control={<Radio/>} label="Inactive"/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small-label">Category ID</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={productFormData.categoryId}
                                label="Category ID"
                                onChange={handleChangeCategoryIdChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {categories.map((category) => (
                                    <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}><FormControl size="small" fullWidth>
                        <InputLabel id="demo-select-small-label">Substitute Product ID</InputLabel>
                        <Select

                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={productFormData.substituteProductId}
                            label="Substitute Product ID"
                            onChange={handleChangeSubstituteProductId}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                        </Select>
                    </FormControl></Grid>
                    <Grid item xs={4}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small-label">Unit of measurement ID</InputLabel>
                            <Select

                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={productFormData.unitOfMeasurementId}
                                label="Unit of measurement ID"
                                onChange={handleChangeUnitOfMeasurementIdChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {units.map((unit) => (
                                    <MenuItem key={unit.id} value={unit.id}>{unit.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} container justifyContent="space-between">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="success"
                                type="submit"
                                onClick={handleSave}
                            >บันทึก</Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                type="reset"
                                style={{backgroundColor: "red", color: "white"}}
                                onClick={clearTextFields}
                            >รีเซ็ท</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            <TableContainer component={Paper} style={{marginTop: "10px"}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableCell>Name</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Detail</TableCell>
                        <TableCell>Standard Price</TableCell>
                        <TableCell>Multiplier</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Category ID</TableCell>
                        <TableCell>SubtituteProduct ID</TableCell>
                        <TableCell>Unit of measurement ID</TableCell>
                    </TableHead>
                    <TableBody>
                        {products.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.code}</TableCell>
                                <TableCell>{item.detail}</TableCell>
                                <TableCell>{item.standardPrice}</TableCell>
                                <TableCell>{item.multiplier}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.isActive ? "Active" : "Inactive"}</TableCell>
                                <TableCell>{item.categoryId}</TableCell>
                                <TableCell>{item.substituteProductId}</TableCell>
                                <TableCell>{item.unitOfMeasurementId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </BaseContainer>
    );
}