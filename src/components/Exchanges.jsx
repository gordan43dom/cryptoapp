import React from 'react'
import HTMLReactParser from 'html-react-parser';
import { useGetCryptoExchangesQuery } from '../services/cryptoApi'
import {Row, Avatar,Table, Space} from 'antd';

import millify from 'millify';


const Exchanges = () => {

    const {data, isFetching} = useGetCryptoExchangesQuery();
    
    if( isFetching ) return "Loading...";
    
    const columns = [
        {
            title: 'Exchange',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Row>
                    <Space>
                        <Avatar src={record.iconUrl}/> {record.name}
                    </Space>
                </Row>
            )
        }, 
        {
             title: '24h Trade Volume', 
             dataIndex: 'volume',
             key: 'volume',
             render: (text) => millify(text)
        },
        {
             title: 'Number of markets', 
             dataIndex: 'numberOfMarkets',
             key: 'numberOfMarkets'
        },
        {
             title: 'Market share', 
             dataIndex: 'marketShare',
             key: 'marketShare',
             render: (text) => `${millify(text)} %`
        }
    ];

    const { Column, ColumnGroup } = Table;
    
    return (
        <>
        {
           <Table dataSource={data?.data?.exchanges} 
                    columns={columns} 
                    rowKey={"id"}
                    expandable={{
                            expandedRowRender: record => HTMLReactParser(record.description),
                            rowExpandable: record => record.name !== 'Not Expandable',
                    }}
            />
           
        }
        </>
    )
}

export default Exchanges
