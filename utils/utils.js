const BASE_URL = 'http://localhost:8001/';

const REST_CLIENT = {
	baseUrl: BASE_URL,
	photos: BASE_URL + 'photos/',
	photoList: BASE_URL + 'photos/list/'
}

const MATH_UTILS = {
	randomRotate: (maxAngle = 7) => Math.floor(Math.random()*maxAngle) - (maxAngle-1)/2,
}

const bddRef = firebase.database().ref('photos');