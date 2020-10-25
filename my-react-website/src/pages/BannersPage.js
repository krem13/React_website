import React from 'react';
import BannersList from '../components/BannersList';
import bannersContent from './banners-content';
import AddBannerForm from '../components/AddBannerForm';

const BannersPage = () => (
        <>
        <AddBannerForm />
        <BannersList banners={bannersContent} />
        </>
    );
export default BannersPage;