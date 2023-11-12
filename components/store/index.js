import { proxy } from "valtio";
import React from 'react';

const state = proxy({
    intro: true,
    color: '#EFA110',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '/t-avt-1.png',
    fullDecal: '/t-avt-1.png',
});

export default state;