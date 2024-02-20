function Footer(){
    const today = new Date().getFullYear()
    return (
        <div className="fixed-bottom text-muted text-center"><small>&copy; {today} Tomashi POS for supermarket </small></div>
    )
}

export default Footer