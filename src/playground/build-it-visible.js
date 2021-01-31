
let visibility = false;

const showShit = () => {
visibility = !visibility;
visibilityToggle();
};



const visibilityToggle = () => {
    const buildIt = (
       <div>
         <h1>can you see the words</h1>  
         <button onClick={showShit}>
             {visibility ? 'dont show shit' : 'show shit'}
         </button>
         {visibility && (
         <div>
             <p>im right behind you</p>
         </div>)}
        
         
       </div>
        );
        console.log(showShit)
        ReactDOM.render(buildIt, document.getElementById('app'));
       
};

visibilityToggle();