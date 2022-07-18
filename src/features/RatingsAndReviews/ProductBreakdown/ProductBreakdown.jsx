/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import { useGetReviewMetadataQuery } from '../../../services/reviews.js';
import ProductScaleFeature from './ProductScaleFeature/ProductScaleFeature.jsx';
import styles from './ProductBreakdown.module.css';

export default function ProductBreakdown({ productId }) {
  const { data, error, isLoading } = useGetReviewMetadataQuery(productId);
  console.log('meta data', data);

  if (error) {
    return <>Oh no, there was an error loading the product breakdown.</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    const newObject = Object.keys(data.characteristics).map((type) => {
      let leftDescription = '';
      let rightDescription = '';

      switch (type) {
        case 'Fit':
          leftDescription = 'Runs tight';
          rightDescription = 'Runs long';
          break;
        case 'Width':
          leftDescription = 'Too narrow';
          rightDescription = 'Too wide';
          break;
        case 'Comfort':
          leftDescription = 'Uncomfortable';
          rightDescription = 'Perfect';
          break;
        case 'Size':
          leftDescription = 'Too Small';
          rightDescription = 'Too Large';
          break;
        case 'Quality':
          leftDescription = 'Poor';
          rightDescription = 'Perfect';
          break;
        case 'Length':
          leftDescription = 'Runs short';
          rightDescription = 'Run long';
          break;
        default:
          break;
      }

      return ({
        name: type,
        id: data.characteristics[type].id,
        percent: ((data.characteristics[type].value / 5) * 100).toFixed(),
        leftDescription,
        rightDescription,
      });
    });
    console.log(newObject);
    return (
      <div className={styles.pb_border}>
        {newObject.map((value) => (
          <ProductScaleFeature characteristic={value} key={value.id} />
        ))}
      </div>
    );
  }
}

ProductBreakdown.propTypes = {
  productId: PropTypes.number.isRequired,
};



// {checkForCharacteristic('Size') && (
//   <>
//     Size
//     <ProductScaleFeature
//       pointerPosition={Number(type.Size.value)}
//       characteristicData={newObject.Size}
//     />
//   </>
// )}
// {checkForCharacteristic('Width') && (
//   <>
//     Width
//     <ProductScaleFeature pointerPosition={Number(type.Width.value)}
//       characteristicData={newObject.Width} />
//   </>
// )}
// {checkForCharacteristic('Comfort') && (
//   <>
//     Comfort
//     <ProductScaleFeature pointerPosition={Number(type.Comfort.value)}
//       characteristicData={newObject.Comfort} />
//   </>
// )}
// {checkForCharacteristic('Quality') && (
//   <>
//     Quality
//     <ProductScaleFeature pointerPosition={Number(type.Quality.value)}
//       characteristicData={newObject.Quality} />
//   </>
// )}
// {checkForCharacteristic('Length') && (
//   <>
//     Length
//     <ProductScaleFeature pointerPosition={Number(type.Length.value)}
//       characteristicData={newObject.Length} />
//   </>
// )}
// {checkForCharacteristic('Fit') && (
//   <>
//     Fit
//     <ProductScaleFeature pointerPosition={Number(type.Fit.value)}
//       characteristicData={newObject.Fit} />
//   </>
// )}