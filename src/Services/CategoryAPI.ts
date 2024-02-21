import {useEffect, useState} from "react";

export interface Category {
    name: string;
    products: any;
    productMoveHistories: any;
    id: number;
    createdDate: string;
    createdById: string;
    updatedDate: string;
    updatedBy: any;
    isActive: boolean;
}

export default function CategoryAPI() {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        fetch('http://localhost:5249/api/Category')
            .then(response => response.json())
            .then((result: Category[]) => {
                setCategories(result);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    return categories;
}