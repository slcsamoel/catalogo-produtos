import { Head, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import Header from '../Components/Guest/Header';
import Footer from '../Components/Guest/Footer';

export default function Guest({children, title}) {
  return (
    <div>
        <Head title={ title } />
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
