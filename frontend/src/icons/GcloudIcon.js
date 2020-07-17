import React from 'react';
import AbstractIcon from 'icons/AbstractIcon'

// import svgAws from 'devicon/icons/amazonwebservices/amazonwebservices-original.svg'
// import svgAwsTxt from 'devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'

const gCloud =(
<svg version="1.1" x="0" y="0px" viewBox="-140-300 2000 2003">
		<path fill="#EA4335" d="M1057.1,369.2h50.8l144.8-144.8l7.1-61.5C990.3-75,579-49.3,341.1,220.2C275,295,227.1,384.1,200.9,480.5
			c16.1-6.6,34-7.7,50.8-3l289.6-47.8c0,0,14.7-24.4,22.4-22.9c128.8-141.5,345.6-158,494.4-37.6L1057.1,369.2z"/>
		<path fill="#4285F4" d="M1459,480.5c-33.3-122.6-101.6-232.8-196.6-317l-203.2,203.2c85.8,70.1,134.7,175.8,132.6,286.6v36.1
			c99.9,0,180.9,81,180.9,180.9s-81,180.9-180.9,180.9H830l-36.1,36.6v217l36.1,36.1h361.8c259.8,2,472.1-207,474.1-466.8
			C1667.1,716.3,1589.4,568.7,1459,480.5z"/>
		<path fill="#34A853" d="M467.7,1338.6h361.8V1049H467.7c-25.8,0-51.2-5.6-74.7-16.3l-50.8,15.8l-145.8,144.8l-12.7,50.8
			C265.4,1305.9,365.2,1339.1,467.7,1338.6z"/>
		<path fill="#FBBC05" d="M467.7,399.2C207.8,400.7-1.5,612.6,0,872.5c0.9,145.1,68.6,281.7,183.7,370.1l209.8-209.8
			c-91-41.1-131.5-148.3-90.4-239.3s148.3-131.5,239.3-90.4c40.1,18.1,72.2,50.3,90.4,90.4l209.8-209.8
			C753.4,466.9,614.6,398.6,467.7,399.2z"/>
</svg>
)

export default (props) =>{
return (<AbstractIcon
  {...props}
  svg={gCloud}
  title="Google Cloud"
  href="https://cloud.google.com/"
/>)}