export default function Hello(){
    function showName() {
        console.log('Mike');
    }
    function showAge(age){
        console.log(age);
    }
    function showText(txt){
        console.log(txt);
    }

    return(
        <div>
            <h1>state</h1>
            <h2>컴포넌트의 속성값</h2>
            <button onClick={showName}>show name</button>
            <button 
                onClick={()=>{
                    showAge(10);
                }}
            >
                show age
            </button>
            <input type='text' onChange={e =>{
                const txt = e.target.value;
                showText(txt);
            }}/>
        </div>
    );
}