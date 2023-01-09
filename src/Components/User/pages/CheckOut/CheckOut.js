
import React, { useEffect } from 'react';
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import MainLayout from '../../MainLayout';
import useFetchData from '../../../Admin/customHooks/useFetchData';
import "../../../../App.css"
import useCheckCurrentGameInLibrary from '../../../Admin/customHooks/useCheckCurrentGameInLibrary';
import useAxiosConfig from '../../../Admin/customHooks/useAxiosConfig';
import { failedAlert, successAlert } from '../../../sharedComponents(user+admin)/UI/Alert';


const CheckOut = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data, fetchSingleData } = useFetchData();
    const { isAlreadyPurchased } = useCheckCurrentGameInLibrary(id);
    const { axiosConfig, email } = useAxiosConfig();
    const { title, img, description, price, genre, developer } = data

    useEffect(() => {
        fetchSingleData(id);
    }, [id]);

    async function handlePlaceOrder() {
        if(email) {
            try {
                const res = await axiosConfig.patch('add-order', {
                    email,
                    id
                });
                res && successAlert('Added to Library')
            } catch (error) {
                failedAlert(error.response.data)
            }
        } else {
            history.push('/login')
        }
    }


    return (
        <MainLayout>
            <Container size="md" className='my-5'>
                <Row>
                    <Col md="7">
                        <Image src={img}
                            fluid
                        />
                        <h4 className="text-white my-4">{title}</h4>
                        <p className="text-light text__p2">{description}</p>
                        <Table hover className='mt-4 table-borderLess'>
                            <tbody>
                                <tr>
                                    <th className="text-light">Genre</th>
                                    <td className="text-light">{genre}</td>
                                </tr>
                                <tr>
                                    <th className="text-light">Developer</th>
                                    <td className="text-light">{developer}</td>
                                </tr>
                                <tr>
                                    <th className="text-light">Platform</th>
                                    <td className="text-light">PS4, PS5, XBOX, Windows, Nintendo Switch</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md="5" className=''>
                        <Table hover className='table-borderLess w-75'>
                            <tbody >
                                <tr>
                                    <th>Price</th>
                                    <td>{price}</td>
                                </tr>
                                <tr>
                                    <th>Tax</th>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <th>Vat</th>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>{price}</td>
                                </tr>
                            </tbody>
                        </Table>
                        {
                            isAlreadyPurchased ?
                                <Button variant="success" className='w-75 mx-2'>In library</Button>
                                :
                                <Button variant="danger" className='w-75 mx-2'
                                    onClick={handlePlaceOrder}>+ Add to library</Button>
                        }
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    );
};

export default CheckOut;