import React, { useState } from 'react'
import Search from './Group 287.png'
import Select from './Group 294.png'
import StandOut from './2.svg'
import Privacy from './Rectangle 124.png'
import Terms from './Rectangle 125.png'
import Domain from './Rectangle 126.png'
import Invoice from './Rectangle 127.png'
import white from './white.svg'
import Frame from './Frame.png'

const Form = () => {

    return (<>
        <div className='div-col'>
            <div className=' container mt-4 d-flex justify-content-between'>
            <img src={white}/>
                <div className='d-flex align-items-center '>
                    <p className='text-white mt-3 '> Sign in</p>
                    <button className=' btn-dukaan '>Dukaan for pc</button>
                </div>
            </div>
            <div className='container'>
                <div className='card card-style mt-5'>
                    <div className='padding_div'>
                        <p className='font-fam'>Free slogan maker</p>
                        <p className='font-fam2 '>Simply enter a term that describes your business, and get up to 1,000 <br />relevant slogans for free.</p>
                        <div className='mt-4'>
                            <p className='mb-1 '>Word for your slogan</p>
                            <input type="search" className="mt-0 input-width" />
                        </div>
                        <div className='my-5'>
                            <input type="submit" className='btn-gen' value="Generate slogans" />
                        </div>
                        <hr />
                        <div className='mt-5 d-flex justify-content-between align-items-center'>
                            <p className='h5'>We have generated 1,023 slogans for “cozy”</p>
                            <input type="submit" className="btn-down" value="Download all" />
                        </div>
                        <div className='mt-3'>
                            <div className='row mt-4'>
                                <div className='col bg-col '>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                                <div className='col bg-col '>coziness building for tomorrow</div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col bg-col '>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                                <div className='col bg-col '>Review the facts cool is the best.</div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col bg-col '>Review the facts cool is the best.</div>
                                <div className='col bg-col '>coziness building for tomorrow</div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col bg-col '>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                                <div className='col bg-col '>coziness building for tomorrow</div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col bg-col '>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                                <div className='col bg-col '>coziness building for tomorrow</div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col bg-col '>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                                <div className='col bg-col '>coziness building for tomorrow</div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col bg-col '>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                                <div className='col bg-col '>coziness building for tomorrow</div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col bg-col '>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                                <div className='col bg-col '>coziness building for tomorrow</div>
                            </div>
                            <div className='row mt-4 mb-5'>
                                <div className='col bg-col '>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                                <div className='col bg-col '>coziness building for tomorrow</div>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex margin-l align-items-center'>
                                    <span className='text-blu mar-r1 '>1</span>
                                    <span className='text-blu mar-r'>2</span>
                                    <span className='text-blu mar-r'>3</span>
                                    <span className='text-blu mar-r'>...</span>
                                    <span className='text-blu mar-r'>21</span>
                                </div>
                                <div>
                                    <a className='text-blu'>Next</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='div-col2 '>
                <div className='container'>
                    <div className='row margin-t '>
                        <div className='col   '>
                            <img src={Search} className="img-fluid padding-l" />
                            <p className='text-center h4 mt-5'>Search</p>
                            <p className='text-center px-2'>Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</p>
                        </div>
                        <div className='col'>
                            <img src={Select} className="img-fluid padding-l" />
                            <p className='text-center h4 mt-5'>Select</p>
                            <p className='text-center px-2'>Choose from thousands of options generated by the slogan maker that fit your needs.</p>
                        </div>
                        <div className='col'>
                            <img src={StandOut} className="img-fluid padding-l" />
                            <p className='text-center h4 mt-4'>Stand Out</p>
                            <p className='text-center px-2'>Congrats on your new slogan. It's time to win the world!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <p className='h3 fw-bold'>Try our other free products</p>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <img src={Privacy} className="p-l" />
                        <p className='text-center h4 mt-4'>Privacy Policy Generator</p>
                        <p className='text-center'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src={Terms} className="p-l" /> 
                         <p className='text-center h4 mt-4'>Terms & Conditions Generator</p>
                        <p className='text-center'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src={Domain} className="p-l"/> 
                         <p className='text-center h4 mt-4'>Domain Name Generator</p>
                        <p className='text-center'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src={Invoice} className="p-l"/>
                        <p className='text-center h4 mt-4'>Invoice Generator</p>
                        <p className='text-center'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                    </div>
                </div>
            </div>
            <div className='div-col3'>
                <div className='container margin-t'>
                    <div className='row mb-5'>
                        <div className='col'>
                        <img src={white}/>
                        </div>
                        <div className='col'>
                            <p className='text-white'>Contact</p>
                            <p className='text-white'>FAQs</p>
                        </div>
                        <div className='col'>
                            <p className='text-white'>Tutorials</p>
                            <p className='text-white'>Blogs</p>
                        </div>
                        <div className='col'>
                            <p className='text-white'>Privacy</p>
                            <p className='text-white'>Banned Items</p>
                        </div>
                        <div className='col'>
                            <p className='text-white'>About</p>
                            <p className='text-white'>Jobs<span className='mar-r3 '>3</span></p>
                        </div>
                        <div className='col'>
                            <p className='text-white'>Facebook</p>
                            <p className='text-white'>Twitter</p>
                            <p className='text-white'>Linkedin</p>
                        </div>
                    </div>
                    <hr className='text-white'/>
                    <div className='mt-3'>
                        <div className='d-flex justify-content-between '>
                            <p className='text-white'>Dukaan 2020, All rights reserved</p>
                            <p className='text-white'>Made in <img src={Frame}/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>

    )
}

export default Form