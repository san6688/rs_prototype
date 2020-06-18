import React, { useState } from 'react';

const dummyImages = ['https://i.pinimg.com/originals/d9/3f/7a/d93f7afa8c9804710d95c02876586ee9.jpg',
  'https://media.architecturaldigest.com/photos/571e97c5818277135ff91610/master/w_1600%2Cc_limit/modernist-decor-inspiration-02.jpg',
  'https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/1:1/w_2803,h_2803,c_limit/modernist-decor-inspiration-01.jpg',
  'http://demo.archiwp.com/wp-content/uploads/2015/07/p3_a.jpg',
  'http://demo.archiwp.com/wp-content/uploads/2015/07/p3_b.jpg',
  'https://img.etimg.com/thumb/msid-65793721,width-643,imgsize-254073,resizemode-4/home-decor.jpg',
  'https://media.architecturaldigest.com/photos/571e97c5818277135ff91610/master/w_1600%2Cc_limit/modernist-decor-inspiration-02.jpg',
  'https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/1:1/w_2803,h_2803,c_limit/modernist-decor-inspiration-01.jpg',
  'https://i.pinimg.com/originals/d9/3f/7a/d93f7afa8c9804710d95c02876586ee9.jpg',
  'https://img.etimg.com/thumb/msid-65793721,width-643,imgsize-254073,resizemode-4/home-decor.jpg',
];

const MasonryGallery = (props) => (
  <div className="image-grid">
    {
        dummyImages.map((_img) => (
          <div className="image-item image-item--quick-zoom">
            <img src={_img} alt="test1" />
          </div>
        ))
      }
  </div>
);

export default MasonryGallery;
