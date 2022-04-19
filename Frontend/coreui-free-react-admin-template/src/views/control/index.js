import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CDropdown,
  CDropdownItem,
  CDropdownToggle,
  CDropdownMenu,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CFormSelect,
  CImage,
} from '@coreui/react'

import curtain from 'src/assets/images/control/curtain.png'
import fan from 'src/assets/images/control/fan.png'
import mister from 'src/assets/images/control/mister.png'
import light from 'src/assets/images/control/light.png'
import temp from 'src/assets/images/control/temp.png'
import humidity from 'src/assets/images/control/humidity.png'



const index = () => {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }


    return (
        <>
        <CRow className="justify-content-start">
            <CCol xs={2}>Control technique </CCol>
            <CCol xs={4}>
                <CFormSelect aria-label="Default select example" style={{ width: '20rem' }}>
                    <option value="1">Rule-based control</option>
                    <option value="2">Data driven control</option>
                </CFormSelect>
            </CCol>
        </CRow>
        <br></br>
        <CRow className="justify-content-start"><h4>Current Conditions</h4></CRow>
        <br></br>
        <CRow className="justify-content-start">
            <CCol>
                <CCard style={{ width: '20rem', backgroundColor: '#ffa07a' }}>
                    <CCardBody>
                        <CCardTitle>Temperature</CCardTitle>
                        <CImage align="end" src={temp} width={60} height={60} />
                        <br></br>
                        <CRow>
                            <CCol>
                                <CCardText><b>
                                Current</b>
                                </CCardText>
                            </CCol>
                            <CCol>
                                <CCardText>
                                <b>27 C</b>
                                </CCardText>
                            </CCol>
                            <CCol></CCol>

                        </CRow>
                        <CRow>
                            <CCol>
                                <CCardText>
                                <b>Ideal</b>
                                </CCardText>
                            </CCol>
                            <CCol>
                            
                                <CCardText>
                                <b>26 C</b>
                                </CCardText>
                            
                            </CCol>
                            <CCol>
                                <CButton href="#" size="sm">Edit</CButton>
                            </CCol>

                        </CRow>
                        
                    </CCardBody>
                </CCard>
            </CCol>
        

            <CCol>
                <CCard style={{ width: '20rem' , backgroundColor :'#add8e6'}}>
                    <CCardBody>
                        <CCardTitle>Humidity</CCardTitle>
                        <CImage align="end" src={humidity} width={60} height={60} />
                        <br></br>
                        <CRow>
                            <CCol>
                                <CCardText>
                                <b>Current</b>
                                </CCardText>
                            </CCol>
                            <CCol>
                                <CCardText>
                                <b>27 C</b>
                                </CCardText>
                            </CCol>
                            <CCol></CCol>

                        </CRow>
                        <CRow>
                            <CCol>
                                <CCardText>
                                <b>Ideal</b>
                                </CCardText>
                            </CCol>
                            <CCol>
                            
                                <CCardText>
                                <b>26 C</b>
                                </CCardText>
                            
                            </CCol>
                            <CCol>
                                <CButton href="#" size="sm">Edit</CButton>
                            </CCol>

                        </CRow>
                        
                    </CCardBody>
                </CCard>
            </CCol>
        

            <CCol>
                <CCard style={{ width: '20rem', backgroundColor:'#f0e68c' }}>
                    <CCardBody>
                        <CCardTitle>Light Intensity</CCardTitle>
                        <CImage align="end" src={light} width={60} height={60} />
                        <br></br>
                        <CRow>
                            <CCol>
                                <CCardText>
                                <b>Current</b>
                                </CCardText>
                            </CCol>
                            <CCol>
                                <CCardText>
                                <b>27 C</b>
                                </CCardText>
                            </CCol>
                            <CCol></CCol>

                        </CRow>
                        <CRow>
                            <CCol>
                                <CCardText>
                                <b>Ideal</b>
                                </CCardText>
                            </CCol>
                            <CCol>
                            
                                <CCardText>
                                <b>26 C</b>
                                </CCardText>
                            
                            </CCol>
                            <CCol>
                                <CButton href="#" size="sm">Edit</CButton>
                            </CCol>

                        </CRow>
                        
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        <br></br>
        <CRow className="justify-content-start"><h4>Control mechanism</h4></CRow>
        <br></br>

        <CRow className="justify-content-start">
            <CCol>
                <CCard style={{ width: '20rem',backgroundColor:'#1e90ff', WebkitTextFillColor:'white' }}>
                    <CCardBody>
                        
                        <CCardTitle>Fan</CCardTitle>
                        <CImage align="end" src={fan} width={60} height={60} />
                        
                        <br></br>
                        <CRow>
                            <CCol>
                                <CCardText>
                                <b>Status</b>
                                </CCardText>
                            </CCol>
                            <CCol>
                                <CCardText>
                                <h4>ON</h4>
                                </CCardText>
                            </CCol>
                        </CRow>
                        
                    </CCardBody>
                </CCard>
            </CCol>

            <CCol>
                <CCard style={{ width: '20rem',backgroundColor:'#1e90ff', WebkitTextFillColor:'white' }}>
                    <CCardBody>
                        <CCardTitle>Curtains</CCardTitle>
                        <CImage align="end" src={curtain} width={60} height={60} />
                        <br></br>
                        <CRow>
                            <CCol>
                                <CCardText>
                                <b>Status</b>
                                </CCardText>
                            </CCol>
                            <CCol>
                                <CCardText>
                                <h4>ON</h4>
                                </CCardText>
                            </CCol>
                        </CRow>
                        
                    </CCardBody>
                </CCard>
            </CCol>

            <CCol>
                <CCard style={{ width: '20rem',backgroundColor:'#1e90ff', WebkitTextFillColor:'white' }}>
                    <CCardBody>
                        <CCardTitle>Mister</CCardTitle>
                        <CImage align="end" src={mister} width={60} height={60} />
                        <br></br>
                        <CRow>
                            <CCol>
                                <CCardText>
                                <b>Status</b>
                                </CCardText>
                            </CCol>
                            <CCol>
                                <CCardText>
                                <h4>OFF</h4>
                                </CCardText>
                            </CCol>
                        </CRow>
                        
                    </CCardBody>
                </CCard>
            </CCol>
        

 
        </CRow>

        </>
      )
    }
    export default index