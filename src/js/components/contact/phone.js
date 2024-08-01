import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhone = () => {
  const input = document.querySelector('#phone');

  intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    utilsScript:
      'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/23.4.0/js/utils.js' ||
      '/intl-tel-input/js/utils.js?1721468771539',
    strictMode: true,
  });
};
