var setTimer = 0;
function clock(){
	let timer = <h1>
				{new Date().toLocaleTimeString()}
			</h1>;
	ReactDOM.render(timer,document.getElementById('timer'));	

	setTimer = setTimeout(function(){
		clock();
	},1000);
};

function stopClock(){
	clearInterval(setTimer);
}

let btn = <div>
				<input type='number' placeholder='Enter the first Number' /> + 
				<input type='number' placeholder='Enter the first Number' />
				<div id='timer' className='text'></div>
				<button onClick={clock}>Start Clock</button>
				<button onClick={stopClock}>Stop Clock</button>
			</div>


ReactDOM.render(btn,document.getElementById('root'));