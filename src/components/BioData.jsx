const BioData = ({bgColor}) =>{
    return(
        <div style={{backgroundColor:bgColor}}>
        <form action="" method="post">
            <input type="text" name="fullName" id="fullName" />
            <input type="text" name="age" id="age" />
            <input type="text" name="address" id="address" />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default BioData;