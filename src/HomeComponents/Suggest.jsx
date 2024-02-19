
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
    const navigate=useNavigate()
    const [Data2, setData2] = useState(null)
   
    const maxLengthSmallScreen = 10;
    const maxLengthLargeScreen = 20;
    

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/ProductDispalyView/").then((d) => {
            setData2(d.data)
            console.log(d.data[0].ImageUrl)

        }).catch((e) => {
            alert('Please Try AGian Later Somthing Eroor')
        })

    }, [])
    return (
        <>
            <div className='row shadow ml-2  mr-2' style={{ overflowX: 'hidden' }}>
                {Data2 && Data2.slice(22, 25).map((e, ind) => {
                    return (
                        <div key={ind} className='col-sm-4 col-md-4' style={{ height: '300px',  }}>
                            <div className='card' style={{borderRadius:'50px',background:'#F5F7FA'}}>
                                <div className='card-body' style={{}}>
                                    <img src={e.ImageUrl} alt={""} height={'120px'} width={'100%'} style={{borderRadius:'50px',position:'relative'}} />
                                    <span style={{position:'relative',top:'-20 px',backgroundColor:'green',display:'inline-block',width:"60px",color:'white'}}>{(Math.random() * (5 - 4) + 3).toFixed(1)}<i class="fa-solid fa-star"></i></span>

                                </div>
                                <div>
                                    <div className='card-body'>
                                        <span className='d-none d-md-block text-primary' onClick={()=>{navigate("/Dis", { state: {data:e } })}} style={{ fontWeight: 'bold' }}><TruncateWords text={e.Product_Name.Product_Name} maxLength={"20"} /></span>
                                        <span className='d-block d-md-none text-primary' onClick={()=>{navigate("/Dis", { state: {data:e } })}} style={{ fontWeight: 'bold' }}><TruncateWords text={e.Product_Name.Product_Name} maxLength={"15"} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </>
    )
}

export default Suggest