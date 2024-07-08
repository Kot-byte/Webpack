import './styles.css';
import weatherIcon from './images/clear.png';

document.getElementById('app').innerHTML = '<h1>Hello, Webpack!</h1>';

const img = document.createElement('img');
img.src = weatherIcon;
img.classList.add('img-container');

document.body.appendChild(img);
