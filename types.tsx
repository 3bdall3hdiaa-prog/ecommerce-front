import React, { ReactElement } from 'react'

export interface Product {
    id: number;
    name: string;
    description: string;
    subSubCategoryId: string;
    price: number;
    image: string;
    rate: number;
    color: string;
}
export interface Subcategory {
    id: number;
    name: string;
    categoryId: number;
    image: string;
}
export interface Category {
    id: number;
    name: string;
    icon: any;
}
export interface Subsubcategory {
    id: number;
    name: string;
    subcategoryId: number;
}