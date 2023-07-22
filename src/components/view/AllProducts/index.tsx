"use client"

import BASE_PATH_FOR_API from '@/components/shared/BasePath';
import { oneProductType } from '@/components/utils/ProductsDataArrayAndType';
import { Component, ReactNode } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card } from '../Card';

interface propsTypes {
    productArray: Array<oneProductType>
}

export default class AllProductsComponent extends Component<{ ProductData: propsTypes }> {
    start: number = 0;
    end: number = 20;
    state: { items: Array<oneProductType>, hasMore: boolean } = {
        items: this.props.ProductData.productArray,
        hasMore: true,
    }
    fetchDataFromAPIGradually = async (start: number, end: number) => {
        const res = await fetch(`${BASE_PATH_FOR_API}/api/products?start=${start}&end=${end}`);
        const dataToCheckAndSend = await res.json();
        if (dataToCheckAndSend.productArray === "Not Found") {
            this.setState({ hasMore: false })
            return
        }
        return dataToCheckAndSend;
    }
    getData = async () => {
        let allTogether = await this.fetchDataFromAPIGradually(this.start, this.end)
        if (allTogether && allTogether.productArray !== "Not Found") {
            this.setState({
                items: this.state.items.concat(allTogether.productArray)
            })
            this.start = this.start + 10;
            this.end = this.end + 10;
        }
    }
    render(): ReactNode {
        return (
            <InfiniteScroll
                dataLength={this.state.items ? this.state.items.length : 0} //This is important field to render the next data
                next={this.getData}
                hasMore={this.state.hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                className='grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-4'
            >
                {this.state.items && this.state.items.map((item: oneProductType, index: number) => (
                    <Card key={index} singleProductData={item} />
                ))}
            </InfiniteScroll>
        )
    }
}