import React from 'react';

const Categories = () => {
    return (
        <>

            <div className='item_category'>
                <div className='category_container'>
                    <div className='cat_type'>
                        <div className='type'>
                            <img src={require('../images/type1.jpg')}></img>
                        </div>
                        <div className='type'>
                            <img src={require('../images/type2.jpg')}></img>
                        </div>
                        <div className='type'>
                            <img src={require('../images/type3.jpg')}></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Categories;