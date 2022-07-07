// ----stacked cards- about us---------
var cardPos = document.getElementsByClassName('about-us-cards')
const cardsBackwards = document.getElementById('about-back');
const cardsForwards = document.getElementById('about-forward');

cardsBackwards.addEventListener('click', shuffleBack)
cardsForwards.addEventListener('click', shuffleForward)

function shuffleForward(){
	var Index = ''

	for(var card of cardPos) {
		// check z-index
		Index = getComputedStyle(card).zIndex;
		
		// change and update
		if (Index == 3) { card.style.zIndex = 1
				// card.classList.toggle('')
								}
			else if (Index == 2) { card.style.zIndex = 3
						// card.classList.toggle('')
												}
				else if (Index == 1) { card.style.zIndex = 2
								// card.classList.toggle('')
																}
	}	
}

function shuffleBack (){
	var Index = ''

	for(var card of cardPos) {
		// check z-index
		Index = getComputedStyle(card).zIndex;
		
		// change and update
		if (Index == 3) { card.style.zIndex = 2
				// card.classList.toggle('')
								}
			else if (Index == 2) { card.style.zIndex = 1
						// card.classList.toggle('')
												}
				else if (Index == 1) { card.style.zIndex = 3
								// card.classList.toggle('')
																}
	}
}

// -----------------------
const serviceButtonPop = document.getElementsByClassName('services-button')
const cardCloseButton = document.getElementsByClassName('pop-up-button-close')
const popUpClass = document.getElementsByClassName('services-pop-up');



	serviceButtonPop[0].addEventListener('click', function(){toggle(0)})
	serviceButtonPop[1].addEventListener('click', function(){toggle(1)})
	serviceButtonPop[2].addEventListener('click', function(){toggle(2)})
	serviceButtonPop[3].addEventListener('click', function(){toggle(3)})

	cardCloseButton[0].addEventListener('click', function(){close(0)})
	cardCloseButton[1].addEventListener('click', function(){close(1)})
	cardCloseButton[2].addEventListener('click', function(){close(2)})
	cardCloseButton[3].addEventListener('click', function(){close(3)})


function close(num){
	
	popUpClass[num].classList.add('pop-hide')
	popUpClass[num].classList.remove('pop-show')
}

function toggle(val){
	var indy = val
	popUpClass[indy].classList.add('pop-show')
	popUpClass[indy].classList.remove('hide')
	popUpClass[indy].classList.remove('pop-hide')
}


// -----------------CTA button-----------
const heroButton = document.getElementById('hero-CTA');
heroButton.addEventListener('click', jumpTo)

function jumpTo(){
   window.location = "#section04"
}

// ---------------Card flip process section-------------------------------
const nextProcessButton = document.getElementById('next-button');
const previousProcessButton = document.getElementById('previous-button');
const cardTarget = document.getElementById('process-body');


var cardNo = 0

nextProcessButton.addEventListener('click', forwardFlipCard)
previousProcessButton.addEventListener('click', reverseFlipCard)


function forwardFlipCard(){
	
	if(cardNo<=2){
		previousProcessButton.classList.add('show')
		previousProcessButton.classList.remove('hide')
		cardTarget.children[cardNo].classList.add('flip')
		cardTarget.children[cardNo].firstElementChild.classList.add('flip')
		cardTarget.children[cardNo].lastElementChild.classList.add('unflip')
		cardNo++
	}
	else {
		nextProcessButton.classList.add('hide')
		nextProcessButton.classList.remove('show')
	}
}
function reverseFlipCard(){

	if(cardNo>0){
		nextProcessButton.classList.add('show')
		nextProcessButton.classList.remove('hide')
		cardTarget.children[cardNo-1].classList.remove('flip')
		cardTarget.children[cardNo-1].firstElementChild.classList.remove('flip')
		cardTarget.children[cardNo-1].lastElementChild.classList.remove('unflip')
		cardNo--
		}
	else {
		previousProcessButton.classList.add('hide')
		previousProcessButton.classList.remove('show')
	}
}
// ----------------Blogs--------------------------
var blogArticle = []
var blogImage = []
var blogTitle = []
var readBlog = []
const m = ''
var defblogLink = 'https://bing.com'

for(var i = 0; i < 3; i++)
{
	blogImage[i] = document.getElementById('article-image' + i);
	blogTitle[i] = document.getElementById('article-title'+ i);
	blogArticle[i] = document.getElementById("article-context" + i)
	readBlog[i] = document.getElementById('read-more-button' + i);
}




function updateBlog () {
	// fetching articles

	const options = {
	method: 'GET',
	params: {q: 'food', lang: 'en', page: '1', page_size: '1'},
	headers: {
		'X-RapidAPI-Key': '432ae274e1msh3ce16d6f2527085p122989jsne39606e9cabe',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};

fetch('https://free-news.p.rapidapi.com/v1/search?q=farm&lang=en&page_size=3', options)
	.then(response => response.json())
	.then(response => 
	{
		// console.log(response)
		var title = "";
		var summary = "";
		var image = "";


		for (var i = 0; i < 3; i++) {
			title = response.articles[i].title;
			summary = response.articles[i].summary;
			image = response.articles[i].media;
			blogLink = response.articles[i].link
			
			blogTitle[i].innerText = title;
			blogArticle[i].innerText = summary;
			blogImage[i].src = image;
			readBlog[i].href = blogLink
			// buttonUpdate(blogLink)
			readBlog[i].addEventListener('click', ()=> {
				window.open(blogLink)
			});

		}
		// console.log(title)
	})
	.catch(err => console.error(err));
}


//event listeners--------------------


// ----------------------------------

// ******************banner*****************

testObject = { "Commodity" : 0.005125}

fetch('https://commodities-api.com/api/latest?access_key=ah8v18b9mfcq7o22p9zw76q5e78y6yiz3rb7sq06knxp2wvzd0a1l3e09yt3&base=UGX&symbols=COFFEE,COCOA,COTTON,OAT,RICE,ROBUSTA,SUGAR,WHEAT')
	.then(response => response.json())
	.then(response => {
		// console.log(response)
		// console.log(response.data.rates)
		testObject = response.data.rates

	})
	.catch(err => console.error(err));




	

// *****************************************



// ------------------------------------------------------
const comodityList = document.getElementById('banner')
var comodity = document.createElement('li');
var arrowIcon = document.createElement('img')


var minComodities = 0
var listLoop = 0
var comodityName = ''
var comodityValue = ''


function comodityLoopScroll() {

	comodity = document.createElement('li');
	if(listLoop >= Object.keys(testObject).length )listLoop=0
	indexValue = Math.round((Math.random() * 10) * 100)/100
	comodityName = Object.keys(testObject)[listLoop]
	comodityValue = Object.values(testObject)[listLoop]
	comodity.innerText = comodityName + ' UGX ' + Math.round((1/(comodityValue))*100)/100 ;
	listLoop++
	comodity.classList.add('comodity');	
	// arrowIcon = document.createElement('img')
	// if (indexValue > 5) {arrowIcon.src = 'Assets/icons/arrow-green-up.svg'}
	// 	else {arrowIcon.src = 'Assets/icons/arrow-red-down.svg'}
	
	// arrowIcon.classList.add('header-icon')
	// comodity.append(arrowIcon)

	comodityList.append(comodity)
	minComodities++
	if (minComodities > 10) {comodityList.removeChild(comodityList.childNodes[0])}
	
}

// **************moo****************
const delisiocaLogo = document.getElementById('logo-image')
const soundEffect = document.getElementById('effectSound');

delisiocaLogo.addEventListener('click', playSound)

function playSound(){ 

	soundEffect.volume = 0.2
	soundEffect.play()}



// *********************************
// function calls 
updateBlog();
const comodityLoop = setInterval(comodityLoopScroll, 3000) /*run loop banner*/
// ---------------------------------

	console.log('connected');

