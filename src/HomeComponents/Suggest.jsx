
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

class TruncateWords extends React.Component {
    truncateWords = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        const truncated = text.substr(0, text.lastIndexOf(' ', maxLength));
        return truncated + '...';
    };

    render() {
        const { text, maxLength } = this.props;
        const truncatedText = this.truncateWords(text, maxLength);

        return <span>{truncatedText}</span>;
    }
}


const Suggest = () => {
    const navigate = useNavigate()
    const [Data2, setData2] = useState(null)

    const maxLengthSmallScreen = 10;
    const maxLengthLargeScreen = 20;


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/ProductDispalyView/").then((d) => {
            setData2(d.data)
           

        }).catch((e) => {
            alert('Please Try AGian Later Somthing Eroor')
        })

    }, [])
    return (
        <>
            <div className='col-12 d-sm-flex flex-sm-column d-md-flex flex-md-row' style={{overflowX:'hidden'}}>
                <div className='col-sm-11 col-md-4 card-body mt-2' style={{ background: '#B4926D',cursor:'pointer' }}>
                    <div className='col-12 d-flex flex-row justify-content-between'>
                        <div className='col-6' style={{ height: '150px', overflow: 'hidden' }}>
                            {Data2 && Data2.slice(22, 23).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px' }} />
                                    </>
                                )
                            })}
                        </div>
                        <div className='col-6' style={{ height: '150px', overflow: 'hidden' }}>
                            {Data2 && Data2.slice(24, 25).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px' }} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-12 d-flex flex-row justify-content-between mt-2'>
                        <div className='col-6' style={{ height: '150px', overflow: 'hidden' }}>
                            {Data2 && Data2.slice(25, 26).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px', overflow: 'hidden' }} />
                                    </>
                                )
                            })}
                        </div>
                        <div className='col-6' style={{ height: '150px', overflowX: 'hidden' }}>
                            {Data2 && Data2.slice(26, 27).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px' }} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='col-sm-11 col-md-4 card-body mt-2 ml-auto' style={{ background: '#BE5C59',cursor:'pointer' }}>
                    <div className='col-12 d-flex flex-row justify-content-between'>
                        <div className='col-6' style={{ height: '150px', overflow: 'hidden' }}>
                            {Data2 && Data2.slice(10, 11).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px' }} />
                                    </>
                                )
                            })}
                        </div>
                        <div className='col-6' style={{ height: '150px', overflow: 'hidden' }}>
                            {Data2 && Data2.slice(11, 12).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px' }} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-12 d-flex flex-row justify-content-between mt-2'>
                        <div className='col-6' style={{ height: '150px', overflow: 'hidden' }}>
                            {Data2 && Data2.slice(12, 13).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px', overflow: 'hidden' }} />
                                    </>
                                )
                            })}
                        </div>
                        <div className='col-6' style={{ height: '150px', overflowX: 'hidden' }}>
                            {Data2 && Data2.slice(9, 10).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px' }} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='col-sm-11 col-md-4 card-body mt-2 ml-auto' style={{ background: '#C3853C',cursor:'pointer' }}>
                    <div className='col-12 d-flex flex-row justify-content-between'>
                        <div className='col-6' style={{ height: '150px', overflow: 'hidden' }}>
                            {Data2 && Data2.slice(15, 16).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px' }} />
                                    </>
                                )
                            })}
                        </div>
                        <div className='col-6' style={{ height: '150px', overflow: 'hidden' }}>
                            {Data2 && Data2.slice(16, 17).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px' }} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-12 d-flex flex-row justify-content-between mt-2'>
                        <div className='col-6' style={{ height: '150px', overflow: 'hidden' }}>
                            {Data2 && Data2.slice(17, 18).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px', overflow: 'hidden' }} />
                                    </>
                                )
                            })}
                        </div>
                        <div className='col-6' style={{ height: '150px', overflowX: 'hidden' }}>
                            {Data2 && Data2.slice(18, 19).map((e) => {
                                return (
                                    <>
                                        <img  onClick={() => { navigate('/Dis', { state: { data: e } }) }} src={e.ImageUrl} alt="" srcset="" style={{ height: '150px' }} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Suggest