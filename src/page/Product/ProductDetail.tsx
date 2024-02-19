import {BaseContainer} from "../admin/BaseContainer";
import {Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent} from "@mui/material";
import * as React from 'react';
import {useState} from "react";

export function ProductDetail() {

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
//Forms handle changing
    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            name: event.target.value
        }));
    };

    const handleCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            code: event.target.value
        }));
    };
    const handleDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            detail: event.target.value
        }));
    };
    const handleStandardPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            standardPrice: event.target.value
        }));
    };

    const handleMultiplier = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            multiplier: event.target.value
        }));
    };

    const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            quantity: event.target.value
        }));
    };

    const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            price: event.target.value
        }));
    };

    const handleIsActive = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            isActive: event.target.value
        }));
    };
    const handleCategoryIdChange = (event: SelectChangeEvent<string>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            categoryId: event.target.value
        }));
    };

    const handleSubstituteProductId = (event: SelectChangeEvent<string>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            substituteProductId: event.target.value
        }));
    }

    const handleUnitOfMeasurementIdChange = (event: SelectChangeEvent<string>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            unitOfMeasurementId: event.target.value
        }));
    }
    //---------------------------------------------------------------------------------------------
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
    //Forms validation
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
                            onChange={handleName}
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
                            onChange={handleCode}
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
                            onChange={handleDetail}
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
                            onChange={handleStandardPrice}
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
                        onChange={handleMultiplier}
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
                        onChange={handleQuantity}
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
                        onChange={handlePrice}
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
                        onChange={handleIsActive}
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
                                onChange={handleCategoryIdChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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
                            onChange={handleSubstituteProductId}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl></Grid>
                    <Grid item xs={4}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small-label">Unit of measurement ID</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={formData.unitOfMeasurementId}
                                label="Unit of measurement ID"
                                onChange={handleUnitOfMeasurementIdChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} container justifyContent="space-between">
                        <Grid item>
                            <Button variant="contained" color="success" onClick={handleSave}
                                    type="submit">บันทึก</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" type="reset"
                                    style={{backgroundColor: "red", color: "white"}}
                                    onClick={clearTextFields}>รีเซ็ท</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </BaseContainer>
    );
}