const Welcome=({onButtonClick})=>{
    return (
        <>
    <center><h3>There are no Posts yet</h3><br/>
    <button onClick={onButtonClick} class="btn btn-warning">Fetch Posts</button></center>
    </>
    );

};

export default Welcome;