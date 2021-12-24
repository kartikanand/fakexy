# fakexy

A wrapper over fakexy.com

## Install

```
npm install fakexy
```

## Usage

```javascript
import {
    getAddress,
    getProfile,
    getPhonenumbers,
    getZipcodes,
    getCreditcard
} from fakexy;

console.log(getAddress({ countryCode: 'us' }));
// {
//   Street: '887 Battlefield Pkwy',
//   'City/Town': 'Fort Oglethorpe',
//   'State/Province/Region': 'Georgia',
//   'Zip/Postal Code': '30742',
//   'Phone Number': '(706) 861-3337',
//   Country: 'United States',
//   Latitude: '34.95409',
//   Longitude: '-85.251194'
// }

console.log(getProfile({ countryCode: 'us', stateCode: 'ca' }));
// {
//   'Full Name': 'Rhianna Keebler',
//   Gender: 'female',
//   Birthday: '1975-01-15',
//   'Social Security Number': '551-99-4513'
// }

console.log(getPhonenumbers({ countryCode: 'us', stateCode: 'ca' }));
// {
//   '(510) 879-7026': '(CA, Emeryville)',
//   '(714) 692-8394': '(CA, Yorba Linda)',
//   '(760) 722-7031': '(CA, Oceanside)',
//   '(415) 931-9103': '(CA, San Francisco)',
//   '(707) 544-3833': '(CA, Santa Rosa)',
//   '': '(CA, Pomona)',
//   '(209) 526-9274': '(CA, Modesto)',
//   '(661) 257-3233': '(CA, Castaic)',
//   '(805) 693-4331': '(CA, Solvang)',
//   '(213) 280-1152': '(CA, Studio City)',
//   '(661) 266-9464': '(CA, Palmdale)',
//   '(323) 569-4949': '(CA, South Gate)'
// }

console.log(getZipcodes({ countryCode: 'us', stateCode: 'ca' }));
// {
//   '90250': '(CA, Hawthorne)',
//   '90504': '(CA, Torrance)',
//   '90807': '(CA, Long Beach)',
//   '91010': '(CA, Duarte)',
//   '91104': '(CA, Pasadena)',
//   '91204': '(CA, Glendale)',
//   '92243': '(CA, El Centro)',
//   '92376': '(CA, Rialto)',
//   '92653': '(CA, Laguna Hills)',
//   '93465': '(CA, Templeton)',
//   '94063': '(CA, Redwood City)'
// }

console.log(getCredicard({ creditcardBrand: 'visa' }));
// {
//   'Credit card brand': 'Visa',
//   'Credit card number': '4539780566426911',
//   Expire: '2023/10',
//   CVV: '998'
// }
```

## API

[Docs](https://www.kartikanand.com/fakexy.js/identifiers.html)
