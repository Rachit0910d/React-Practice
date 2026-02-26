function Wrapper({children, color="green"}){
  return (
    <div>
        <div style={{color:color, border:"3px solid green", width: "300px", margin:"10px" }}>
            {children}
        </div>
    </div>
  )
}

export default Wrapper;