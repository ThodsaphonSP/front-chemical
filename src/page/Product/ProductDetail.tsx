import {BaseContainer} from "../admin/BaseContainer";
import {Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent} from "@mui/material";
import * as React from 'react';
import {useState} from "react";
import CategoryAPI from '../../Services/CategoryAPI';
import {Category} from "../../Services/CategoryAPI";

export interface Product {
    name: string,
    code: string,
    detail: string,
    standardPrice: number,
    multiplier: number,
    quantity: number,
    price: number,
    isActive: boolean,
    categoryId: number,
    substituteProductId: number,
    unitOfMeasurementId: any
}

export function ProductDetail() {
    const categories = CategoryAPI();
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        detail: '',
        standardPrice: '',
        multiplier: '',
        quantity: '',
        price: '',
        isActive: '',
        categoryId: '',
        substituteProductId: '',
        unitOfMeasurementId: ''
    })

    const [formDataError, setFormDataError] = useState({
        name: false,
        code: false,
        detail: false,
        standardPrice: false,
        multiplier: false,
        quantity: false,
        price: false,
        isActive: false,
    })
    //---------------------------------------------------------------------------------------------

//Forms handle changing
    const clearTextFields = () => {
        setFormData({
            name: '',
            code: '',
            detail: '',
            standardPrice: '',
            multiplier: '',
            quantity: '',
            price: '',
            isActive: '',
            categoryId: '',
            substituteProductId: '',
            unitOfMeasurementId: ''
        });
    }
//Form changing on textfields
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            name: event.target.value
        }));
    };
    const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            code: event.target.value
        }));
    };
    const handleChangeDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            detail: event.target.value
        }));
    };
    const handleChangeStandardPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            standardPrice: event.target.value
        }));
    };
    const handleChangeMultiplier = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            multiplier: event.target.value
        }));
    };
    const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            quantity: event.target.value
        }));
    };
    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            price: event.target.value
        }));
    };
    const handleChangeIsActive = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            isActive: event.target.value
        }));
    };
    const handleChangeCategoryIdChange = (event: SelectChangeEvent<string>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            categoryId: event.target.value
        }));
    };
    const handleChangeSubstituteProductId = (event: SelectChangeEvent<string>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            substituteProductId: event.target.value
        }));
    }
    const handleChangeUnitOfMeasurementIdChange = (event: SelectChangeEvent<string>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            unitOfMeasurementId: event.target.value
        }));
    }
    //----------------------------------------------------------------------------------------------------------
    //handle save button
    const handleSave = () => {
        if (formData.name === '') {
            setFormDataError((prevFormDataError) => ({
                ...prevFormDataError,
                name: true
            }));
        }
        if (formData.code === '') {
            setFormDataError((prevFormDataError) => ({
                ...prevFormDataError,
                code: true
            }));
        }
        if (formData.detail === '') {
            setFormDataError((preFormDataError) => ({
                ...preFormDataError,
                detail: true
            }));
        }
        if (formData.standardPrice === '') {
            setFormDataError((prevFormDataError) => ({
                ...prevFormDataError,
                standardPrice: true
            }));
        }
        if (formData.multiplier === '') {
            setFormDataError((prevFormDataError) => ({
                ...prevFormDataError,
                multiplier: true
            }));
        }
        if (formData.quantity === '') {
            setFormDataError((prevFormDataError) => ({
                ...prevFormDataError,
                quantity: true
            }));
        }
        if (formData.price === '') {
            setFormDataError((prevFormDataError) => ({
                ...prevFormDataError,
                price: true
            }));
        }
        if (formData.isActive === '') {
            setFormDataError((prevFormDataError) => ({
                ...prevFormDataError,
                isActive: true
            }));
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
                            value={formData.name}
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
                            value={formData.code}
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
                            value={formData.detail}
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
                            value={formData.standardPrice}
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
                        value={formData.multiplier}
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
                        value={formData.quantity}
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
                        value={formData.price}
                        error={formDataError.price}
                        onChange={handleChangePrice}
                        fullWidth
                        required
                    /></Grid>
                    <Grid item xs={6}> <TextField
                        label="Is active"
                        variant="outlined"
                        size="small"
                        type="number"
                        value={formData.isActive}
                        error={formDataError.isActive}
                        onChange={handleChangeIsActive}
                        fullWidth
                        required
                    /></Grid>
                    <Grid item xs={4}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small-label">Category ID</InputLabel>
                            <Select

                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={formData.categoryId}
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
                            value={formData.substituteProductId}
                            label="Substitute Product ID"
                            onChange={handleChangeSubstituteProductId}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {/*                {categories.map((category) => (
                                <MenuItem>{category.products}</MenuItem>
                            ))}*/}
                        </Select>
                    </FormControl></Grid>
                    <Grid item xs={4}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small-label">Unit of measurement ID</InputLabel>
                            <Select

                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={formData.categoryId}
                                label="Unit of measurement ID"
                                onChange={handleChangeUnitOfMeasurementIdChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
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
        </BaseContainer>
    );
}