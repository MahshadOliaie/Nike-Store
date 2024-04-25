import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch/useFetch'
import Customer from '../Customer/Customer'
import Layout from '../Laout/Layout'
import CustomersSkeleton from '../Skeleton/CustomersSkeleton/CusomersSkeleton'
import CSS from './index.module.css'


function CustomersPage() {
    const [data, setData] = useState([])
    const users = useFetch('https://randomuser.me/api/?results=50')

    useEffect(() => {
        setData(users)
    }, [users])



    return (
        <>
            <Layout>
                <h1 className={CSS.heading}>Customers Group</h1>
                <div className={CSS.customersContainer}>
                    {(data.results) ?
                        data.results?.map((user, index) => {
                            return <Customer user={user} key={index} />
                        })
                        :
                        [...new Array(20)].map((user, index) => {
                            return <CustomersSkeleton key={index} />
                        })
                    }
                </div>
            </Layout>
        </>
    )
}


export default CustomersPage