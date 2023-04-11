import React, { useEffect, useState } from 'react';
import "./Category.css"
import Field from '../Field/Field';

const Category = () => {
    const [category , setCategory] = useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    console.log(category)
    return (
        <div className='container  my-16'>
            <h3 className='text-5xl font-bold m-5 text-center'>Jobs Category List</h3>
            <p className='text-xl text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            {
                category.map(field => 
                <Field
                key={field.id}
                field={field}
                ></Field>)
            }

        </div>
    );
};

export default Category;